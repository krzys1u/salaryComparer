const TABLE_NAME = 'metadata'

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.string('key').primary()
    table.string('value').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  knex.schema.dropTableIfExists(TABLE_NAME)
}
