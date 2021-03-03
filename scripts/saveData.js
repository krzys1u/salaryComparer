const admin = require('firebase-admin')

const fetchData = require('./fetchData')
const { getKnex } = require('../knexfile')
const { createFirebaseService } = require('../src/services/FirebaseService')
const { FIREBASE_URL } = require('../src/config')

const DB_USE = 'postgres'

const firebaseDB = {
  init: function () {
    if (!this.firebase) {
      admin.initializeApp({
        credential: admin.credential.cert(require('../authKey.json')),
        databaseURL: FIREBASE_URL,
      })

      const db = admin.firestore()

      this.firebase = createFirebaseService(db)
    }
  },
  getCurrentVersion: async function () {
    const versionData = await this.firebase.get({
      collection: 'meta',
      document: 'version',
    })

    return versionData.version
  },
  saveData: async function (collectionName, data) {
    return Promise.all(
      data.map((entry) => {
        return this.firebase.saveRecord(
          collectionName,
          getRecordId(entry),
          entry,
        )
      }),
    )
  },
  saveRecord: async function (collection, key, record) {
    await this.firebase.set({ collection, key, record })
  },
  saveMetadata: async function (metadata) {
    return this.saveRecord('meta', 'version', metadata)
  },
  withTransaction: async (fn) => {
    await fn
  },
  exit: () => {},
}

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
        .update({ value: metadata.version }),
      this.db('metadata')
        .transacting(this.transaction)
        .where({ key: 'created' })
        .update({ value: metadata.created }),
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
  firebase: firebaseDB,
}

const database = DATABASES[DB_USE]

const createVersionData = (version, created) => ({
  version,
  created,
})

// const getCollectionName = (version) => `salary-data-${version}`

const getRecordId = (record) => `${record.brutto}-${record.type}`

const updateVersion = (version) => {
  const versionData = createVersionData(version, new Date().getTime())

  return database.saveMetadata(versionData, version !== 1)
}

const createNewVersion = async (data) => {
  const version = await database.getCurrentVersion()
  const nextVersion = version + 1

  //const collectionName = getCollectionName(nextVersion)

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
