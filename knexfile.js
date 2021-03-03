require('dotenv').config({ path: './env/.env' })

const knex = require('knex')

const DB_CONNECTION = {
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  ssl: { rejectUnauthorized: false },
}

const DB = {
  client: 'postgresql',
  connection: DB_CONNECTION,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
    directory: './db/migrations',
  },
}

module.exports = {
  production: DB,
  getKnex: () => knex(DB),
}
