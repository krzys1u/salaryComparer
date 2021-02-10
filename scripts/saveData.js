const admin = require('firebase-admin')

const fetchData = require('./fetchData')
const { createFirebaseService } = require('../src/services/FirebaseService')
const { FIREBASE_URL } = require('../src/config')

admin.initializeApp({
  credential: admin.credential.cert(require('../authKey.json')),
  databaseURL: FIREBASE_URL,
})

const db = admin.firestore()

const firebase = createFirebaseService(db)

const createVersionData = (version, created) => ({
  version,
  created,
})

const getCollectionName = (version) => `salary-data-${version}`

const getRecordId = (record) => `${record.brutto}-${record.type}`

const saveRecord = async (collection, key, record) => {
  await firebase.set({ collection, key, record })
}

const getCurrentVersion = async () => {
  const versionData = await firebase.get({
    collection: 'meta',
    document: 'version',
  })

  return versionData.version
}

const saveData = async (collectionName, data) => {
  return Promise.all(
    data.map((entry) => {
      return saveRecord(collectionName, getRecordId(entry), entry)
    }),
  )
}

const updateVersion = (version) => {
  const versionData = createVersionData(version, new Date().getTime())

  return saveRecord('meta', 'version', versionData)
}

const createNewVersion = async (data) => {
  const version = await getCurrentVersion()
  const nextVersion = version + 1

  const collectionName = getCollectionName(nextVersion)

  try {
    await saveData(collectionName, data)
    await updateVersion(nextVersion)

    console.info('New data has been saved')
  } catch (e) {
    console.error('Error during saving data', e)
  }
}

;(async () => {
  const data = await fetchData()

  // const documents = {}
  //
  // data.forEach((entry) => {
  //   const { type } = entry
  //
  //   if (!documents[type]) {
  //     documents[type] = []
  //   }
  //
  //   documents[type].push(entry)
  // })

  await createNewVersion(data)
})()
