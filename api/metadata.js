const { getKnex } = require('../knexfile')
console.log('metadata')

module.exports = require('../src/api/metadata')(...getKnex())
