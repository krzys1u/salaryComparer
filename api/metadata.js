const admin = require('firebase-admin')
const { FIREBASE_URL } = require('../src/config')

const initializeFirestore = () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: FIREBASE_URL,
  })

  console.log('admin.firestore()', admin.firestore())

  return admin.firestore().db
}

module.exports = async (req, res) => {
  const firestore = initializeFirestore()

  console.log('firestore', firestore)

  const metaCollection = await firestore.collection('meta')

  console.log('metaCollection', metaCollection)

  const versionDocument = metaCollection.doc('version').get()

  console.log('versionDocument', versionDocument)

  const version = versionDocument.data()

  res.json({
    ...version,
  })
}
