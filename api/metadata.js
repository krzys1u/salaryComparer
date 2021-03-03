const { getKnex } = require('../knexfile')

module.exports = require('../src/api/metadata')(getKnex())
