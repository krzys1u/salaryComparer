const admin = require('firebase-admin')

const { FIREBASE_URL } = require('../config')

const initializeFirestore = () => {
  if (!admin.apps.length) {
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
        auth_provider_x509_cert_url:
          'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: process.env.CLIENT_x509,
      }),
      databaseURL: FIREBASE_URL,
    })
  }

  return admin.firestore()
}

const firestore = initializeFirestore()

const createFirebaseService = (db) => {
  return {
    get: async ({ collection, document }) => {
      const documentHandler = db.collection(collection).doc(document)

      const documentData = await documentHandler.get()

      return documentData.data()
    },
    set: async ({ collection, key, record }) => {
      const documentHandler = db.collection(collection).doc(key)

      await documentHandler.set(record)
    },
  }
}

module.exports = {
  firebaseService: createFirebaseService(firestore),
  createFirebaseService,
}
