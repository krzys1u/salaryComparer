const admin = require('firebase-admin')
const { FIREBASE_URL } = require('../src/config')

const initializeFirestore = () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: 'service_account',
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      private_key_id: process.env.PROJECT_KEY_ID,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: process.env.CLIENT_x509,
    }),
    databaseURL: FIREBASE_URL,
  })

  console.log('admin.firestore()', admin.firestore())
  console.log('admin.firestore().db', admin.firestore().db)

  console.log('KEYS', Object.keys(admin.firestore()).join('\n'))

  return admin.firestore().db
}

module.exports = async (req, res) => {
  const db = initializeFirestore()

  console.log('db', db)

  const metaCollection = db.collection('meta')

  console.log('metaCollection', metaCollection)

  const versionDocument = await metaCollection.doc('version').get()

  console.log('versionDocument', versionDocument)

  const version = versionDocument.data()

  res.json({
    ...version,
  })
}
