const TABLE_NAME = 'salaries'

exports.up = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, (table) => {
    table.double('nettoSum')
    table.double('costMin')
    table.double('costMax')
    table.double('costAvg')
    table.double('costSum')
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, (table) => {
    table.dropColumn('nettoSum')
    table.dropColumn('costMin')
    table.dropColumn('costMax')
    table.dropColumn('costAvg')
    table.dropColumn('costSum')
  })
}
