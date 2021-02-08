const admin = require('firebase-admin')
const { FIREBASE_URL } = require('../src/config')

const initializeFirestore = () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: process.env.FIREBASE_URL,
  })

  return admin.firestore().db
}

module.exports = async (req, res) => {
  const firestore = initializeFirestore()

  const versionDocument = await firestore
    .collection('meta')
    .doc('version')
    .get()

  const version = versionDocument.data()

  res.json({
    ...version,
  })
}
