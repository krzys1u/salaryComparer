const fs = require('fs');

const HIGH_ZUS = 0;
const LOW_ZUS = 0;
const INCOME_TAX_PERCENTAGE = 0.19;

const input = {
  uop: require('../data/uop'),
  uopKup10: require('../data/uop-kup-10'),
  uopKup20: require('../data/uop-kup-20'),
  uopKup30: require('../data/uop-kup-30'),
  uopKup40: require('../data/uop-kup-40'),
  uopKup50: require('../data/uop-kup-50'),
  uopKup60: require('../data/uop-kup-60'),
  uopKup70: require('../data/uop-kup-70'),
  uopKup80: require('../data/uop-kup-80'),
};

const amounts = Object.keys(input.uop);

input.b2bHighZus = amounts
  .map(amount => ({amount, net: new Array(12).fill(amount * (1 - INCOME_TAX_PERCENTAGE) - HIGH_ZUS)}))
  .reduce((acc, obj) => ({...acc, [obj.amount]: obj.net}), {});

input.b2bLowZus = amounts
  .map(amount => ({amount, net: new Array(12).fill(amount * (1 - INCOME_TAX_PERCENTAGE) - LOW_ZUS)}))
  .reduce((acc, obj) => ({...acc, [obj.amount]: obj.net}), {});

const output = {};

Object.keys(input).forEach((type) => {
  amounts.forEach((amount) => {
    const values = input[type][amount];

    const measures = {
      min: Math.min(...values),
      max: Math.max(...values),
      avg: Math.floor(100 * values.reduce((a, b) => a+b, 0) / 12) / 100,
      median:  Math.floor(100 * values.sort().slice(5,7).reduce((a, b) => a+b, 0) / 2) / 100,
    };

    Object.keys(measures).forEach(measure => {
      const key = `${type}-${measure}`;

      if (!output[key]) {
        output[key] = {};
      }

      output[key][amount] = measures[measure]
    })
  })
});

fs.writeFileSync('src/data.json', JSON.stringify(output),  { flag: 'w' });