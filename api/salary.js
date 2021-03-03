const { getKnex } = require('../knexfile')

module.exports = require('../src/api/salary')(getKnex())
