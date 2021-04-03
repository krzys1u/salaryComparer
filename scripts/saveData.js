const fetchData = require('./fetchData')
const { getKnex } = require('../knexfile')

const DB_USE = 'postgres'

const pgDB = {
  init: function () {
    this.db = getKnex()
  },
  getCurrentVersion: async function () {
    const version = await this.db
      .select()
      .table('metadata')
      .where('key', 'version')

    return parseInt((version[0] || { value: '0' }).value)
  },
  saveData: async function (table, data) {
    await this.db.transacting(this.transaction).insert(data).into(table)
  },
  saveMetadata: async function (metadata, versionDataExists) {
    if (!versionDataExists) {
      return await this.saveData('metadata', [
        { key: 'version', value: metadata.version },
        { key: 'created', value: metadata.created },
      ])
    }

    return await Promise.all([
      this.db('metadata')
        .transacting(this.transaction)
        .where({ key: 'version' })
        .update({ value: metadata.version, updated_at: this.db.fn.now() }),
      this.db('metadata')
        .transacting(this.transaction)
        .where({ key: 'created' })
        .update({ value: metadata.created, updated_at: this.db.fn.now() }),
    ])
  },
  withTransaction: async function (fn) {
    return this.db
      .transaction(
        async function (trx) {
          this.transaction = trx

          await fn()
        }.bind(this),
      )
      .then(() => {
        this.transaction.commit()
      })
  },
  exit: function () {
    this.db.destroy()
  },
}

const DATABASES = {
  postgres: pgDB,
}

const database = DATABASES[DB_USE]

const createVersionData = (version, created) => ({
  version,
  created,
})

const updateVersion = (version) => {
  const versionData = createVersionData(version, new Date().getTime())

  return database.saveMetadata(versionData, version !== 1)
}

const createNewVersion = async (data) => {
  const version = await database.getCurrentVersion()
  const nextVersion = version + 1

  try {
    await database.withTransaction(async () => {
      return database
        .saveData(
          'salaries',
          data.map((record) => ({ ...record, version: nextVersion })),
        )
        .then(() => {
          return updateVersion(nextVersion)
        })
    })

    console.info('New data has been saved')
  } catch (e) {
    console.error('Error during saving data', e)

    database.transaction.rollback()
  }
}

;(async () => {
  database.init()

  const data = await fetchData()

  await createNewVersion(data)

  database.exit()
})()
