const admin = require('firebase-admin')

const fetchData = require('./fetchData')
const { createFirebaseService } = require('../src/services/FirebaseService')
const { FIREBASE_URL } = require('../src/config')

const DB_USE = 'firebase'

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
  saveRecord: async function (collection, key, record) {
    await this.firebase.set({ collection, key, record })
  },
  saveMetadata: async function (metadata) {
    return this.saveRecord('meta', 'version', metadata)
  },
  startTransaction: async () => {},
  commitTransaction: async () => {},
  rollbackTransaction: async () => {},
}

const DATABASES = {
  postgres: '',
  firebase: firebaseDB,
}

const database = DATABASES[DB_USE]

database.init()

const createVersionData = (version, created) => ({
  version,
  created,
})

const getCollectionName = (version) => `salary-data-${version}`

const getRecordId = (record) => `${record.brutto}-${record.type}`

const saveData = async (collectionName, data) => {
  return Promise.all(
    data.map((entry) => {
      return database.saveRecord(collectionName, getRecordId(entry), entry)
    }),
  )
}

const updateVersion = (version) => {
  const versionData = createVersionData(version, new Date().getTime())

  return database.saveMetadata(versionData)
}

const createNewVersion = async (data) => {
  const version = await database.getCurrentVersion()
  const nextVersion = version + 1

  const collectionName = getCollectionName(nextVersion)

  try {
    await database.startTransaction()

    await saveData(collectionName, data)
    await updateVersion(nextVersion)

    await database.commitTransaction()

    console.info('New data has been saved')
  } catch (e) {
    await database.rollbackTransaction()

    console.error('Error during saving data', e)
  }
}

;(async () => {
  const data = await fetchData()

  await createNewVersion(data)
})()
