const admin = require('firebase-admin')

const { createFirebaseService } = require('../src/services/FirebaseService')
const { FIREBASE_URL } = require('../src/config')

admin.initializeApp({
  credential: admin.credential.cert(require('../authKey.json')),
  databaseURL: FIREBASE_URL,
})

const db = admin.firestore()

const firebase = createFirebaseService(db)

const collection = 'salary-data-2'

const filters = [
  ['brutto', '>=', 11000],
  ['brutto', '<=', 12000],
  ['type', 'in', ['uop-0', 'uop-20']],
]

firebase
  .getWithFilters({
    collection,
    filters,
  })
  .then((data) => {
    console.log('data', data)
  })
