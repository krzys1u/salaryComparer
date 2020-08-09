const fetch = require('node-fetch');

const ENDPOINT = 'https://api.bankier.pl/calculators/salary/calculate/';
const MIN = 1000;
const MAX = 30000;
const STEP = 250;
const CREATIVE_RIGHTS = [0, 10, 20, 30, 40, 50, 60, 70, 80];

const HIGH_ZUS = 1431.48;
const LOW_ZUS = 609.14;
const INCOME_TAX_PERCENTAGE = 0.19;

const BATCH_SIZE = 100;

const results = [];

let toRetry = [];

let fetched = 0;
let fetchedBatches = 0;

const printReport = () => {
  console.info(`\t Fetched: `, fetched);
  console.info(`\t toRetry: `, toRetry.length);
};

const round = (number) => Math.round(number * 100 + Number.EPSILON) / 100;

const parseSalaryData = (salaryData, creativeRightsValue) => ({
  brutto: salaryData.koszty[0].kwota_brutto,
  nettoMin: salaryData.koszty.sort((first, second) => first.kwota_netto - second.kwota_netto)[0].kwota_netto,
  nettoMax: salaryData.koszty.sort((first, second) => second.kwota_netto - first.kwota_netto)[0].kwota_netto,
  nettoAvg: round(
    salaryData.koszty.reduce((acc, monthData) => acc + monthData.kwota_netto, 0) / salaryData.koszty.length,
  ),
  type: `uop-${creativeRightsValue}`,
});

const prepareB2bData = (brutto, zus) => ({
  brutto,
  nettoMin: round(brutto * (1 - INCOME_TAX_PERCENTAGE) - zus),
  nettoMax: round(brutto * (1 - INCOME_TAX_PERCENTAGE) - zus),
  nettoAvg: round(brutto * (1 - INCOME_TAX_PERCENTAGE) - zus),
  type: `b2b-${zus === LOW_ZUS ? 'low-zus' : 'high-zus'}`,
});

const fetchData = async (brutto, creativeRightsPercent = 0) => {
  const response = await fetch(ENDPOINT, {
    method: 'post',
    body: JSON.stringify({
      kwota: brutto,
      ppk_procent_pracodawca: 1.5,
      ppk_procent_lacznie: 1.5,
      procent_kosztow_autorskich: creativeRightsPercent,
      procent_pracodawca_wypadkowe: 1.67,
      czy_kwota_brutto: 1,
      czy_mlody: 0,
      czy_oswiadczenie_pobieranie_pit_mlody: 0,
      czy_oswiadczenie_niepobieranie_drugi_prog: 0,
      praca_poza_miejscem_zamieszkania: 0,
      czy_kwota_wolna: 0,
      czy_fp: 1,
      czy_fgsp: 1,
      czy_ppk: 0,
      kwoty_brutto: [],
      czy_fp_bez_limitu: 1,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

const bruttoValues = Array.from(new Array((MAX - MIN) / STEP))
  .map((_, index) => MIN + index * STEP)
  .flatMap((brutto) =>
    CREATIVE_RIGHTS.map((creativeRightsValue) => {
      return { brutto, creativeRightsValue };
    }),
  );

const fetchBatch = (batch) =>
  batch.map(({ brutto, creativeRightsValue }) =>
    fetchData(brutto, creativeRightsValue)
      .then((data) => ({
        ...data,
        meta: {
          brutto,
          creativeRightsValue,
          ok: true,
        },
      }))
      .catch(() => {
        return {
          meta: {
            ok: false,
            brutto,
            creativeRightsValue,
          },
        };
      }),
  );

const parseBatch = async (batch) => {
  for await (let data of batch) {
    if (!data.meta.ok) {
      toRetry.push({ brutto: data.meta.brutto, creativeRightsValue: data.meta.creativeRightsValue });
      continue;
    }

    const brutto = data.meta.brutto;

    results.push(parseSalaryData(data, data.meta.creativeRightsValue));

    results.push(prepareB2bData(brutto, HIGH_ZUS));
    results.push(prepareB2bData(brutto, LOW_ZUS));

    fetched++;
  }
};

const prepareBatches = (data) => {
  const count = Math.ceil(data.length / BATCH_SIZE);

  return Array.from(new Array(count)).map((_, index) =>
    data.slice(index * BATCH_SIZE, index * BATCH_SIZE + BATCH_SIZE),
  );
};

let batches = prepareBatches(bruttoValues);

module.exports = async () => {
  do {
    toRetry = [];

    for await (let batch of batches) {
      const batchId = ++fetchedBatches;

      console.clear();
      console.info(`Start fetching of batch number ${batchId}`);

      const data = await fetchBatch(batch);
      await parseBatch(data);

      printReport();

      console.info(`Batch number ${batchId} has been fetched`);
      console.info('---');
    }

    console.info('Data to refetch', toRetry.length);
    console.info('---');

    batches = prepareBatches(toRetry);
  } while (toRetry.length !== 0);

  console.log('Data has been prepared');

  return results;
};
