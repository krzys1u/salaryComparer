const fetch = require('node-fetch')

const {
  SALARY_MIN,
  SALARY_MAX,
  SALARY_STEP,
  CREATIVE_RIGHTS_STEPS,
} = require('../src/config')

const ENDPOINT = 'https://api.bankier.pl/calculators/salary/calculate/uop'

const HIGH_ZUS = 1457.49
const LOW_ZUS = 627.01
const INCOME_TAX_PERCENTAGE = 0.19

const BATCH_SIZE = 100

const results = []

let toRetry = []

let fetched = 0
let fetchedBatches = 0

const printReport = () => {
  console.info('\t Fetched: ', fetched)
  console.info('\t toRetry: ', toRetry.length)
}

const round = (number) => Math.round(number * 100 + Number.EPSILON) / 100

const parseSalaryData = (salaryData, creativeRightsValue) => ({
  gross: salaryData.koszty[0].kwota_brutto,
  nettoMin: salaryData.koszty.sort(
    (first, second) => first.kwota_netto - second.kwota_netto,
  )[0].kwota_netto,
  nettoMax: salaryData.koszty.sort(
    (first, second) => second.kwota_netto - first.kwota_netto,
  )[0].kwota_netto,
  nettoAvg: round(
    salaryData.koszty.reduce(
      (acc, monthData) => acc + monthData.kwota_netto,
      0,
    ) / salaryData.koszty.length,
  ),
  type: `uop-${creativeRightsValue}`,
})

const prepareB2bData = (brutto, zus) => ({
  gross: brutto,
  nettoMin: round(brutto * (1 - INCOME_TAX_PERCENTAGE) - zus),
  nettoMax: round(brutto * (1 - INCOME_TAX_PERCENTAGE) - zus),
  nettoAvg: round(brutto * (1 - INCOME_TAX_PERCENTAGE) - zus),
  type: `b2b-${zus === LOW_ZUS ? 'low-zus' : 'high-zus'}`,
})

const fetchData = async (brutto, creativeRightsPercent = 0) => {
  const year = new Date().getFullYear()

  const response = await fetch(ENDPOINT, {
    method: 'post',
    body: JSON.stringify({
      kwota: brutto,
      rok_podatkowy: year,
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
  })

  return await response.json()
}

const bruttoValues = Array.from(
  new Array(1 + (SALARY_MAX - SALARY_MIN) / SALARY_STEP),
).map((_, index) => SALARY_MIN + index * SALARY_STEP)

const bruttoWithCreativeRights = bruttoValues.flatMap((brutto) =>
  CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => {
    return { brutto, creativeRightsValue }
  }),
)

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
        }
      }),
  )

const parseBatch = async (batch) => {
  for await (let data of batch) {
    const { ok, brutto, creativeRightsValue } = data.meta

    if (!ok) {
      toRetry.push({
        brutto: brutto,
        creativeRightsValue: creativeRightsValue,
      })
      continue
    }

    results.push(parseSalaryData(data, creativeRightsValue))

    fetched++
  }
}

const prepareBatches = (data) => {
  const count = Math.ceil(data.length / BATCH_SIZE)

  return Array.from(new Array(count)).map((_, index) =>
    data.slice(index * BATCH_SIZE, index * BATCH_SIZE + BATCH_SIZE),
  )
}

let batches = prepareBatches(bruttoWithCreativeRights)

module.exports = async () => {
  do {
    toRetry = []

    for await (let batch of batches) {
      const batchId = ++fetchedBatches

      console.clear()
      console.info(
        `Start fetching of batch number ${batchId}/${batches.length}`,
      )

      const data = await fetchBatch(batch)
      await parseBatch(data)

      printReport()

      console.info(`Batch number ${batchId} has been fetched`)
      console.info('---')
    }

    console.info('Data to refetch', toRetry.length)
    console.info('---')

    fetchedBatches = 0

    batches = prepareBatches(toRetry)
  } while (toRetry.length !== 0)

  bruttoValues.forEach((brutto) => {
    results.push(prepareB2bData(brutto, HIGH_ZUS))
    results.push(prepareB2bData(brutto, LOW_ZUS))
  })

  console.log('Data has been prepared')

  return results
}
