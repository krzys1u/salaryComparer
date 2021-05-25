const TABLE_NAME = 'salaries'

exports.up = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, (table) => {
    table.dropColumns([
      'costMin',
      'costMax',
      'costAvg',
      'costSum',
    ])

    table.double('taxMin')
    table.double('taxMax')
    table.double('taxAvg')
    table.double('taxSum')
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, (table) => {
    table.dropColumns([
      'taxMin',
      'taxMax',
      'taxAvg',
      'taxSum',
    ])
  })
}
