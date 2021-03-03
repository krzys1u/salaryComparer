const TABLE_NAME = 'salaries'

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id').primary()
    table.integer('gross')
    table.double('nettoMin')
    table.double('nettoMax')
    table.double('nettoAvg')
    table.string('type')
    table.integer('version')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
}
