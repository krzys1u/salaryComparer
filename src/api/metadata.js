const {
  createFirebaseService,
  initializeFirestore,
} = require('../services/FirebaseService')

const firebaseService = createFirebaseService(initializeFirestore())

const collection = 'meta'
const document = 'version'

module.exports = async (req, res) => {
  const version = await firebaseService.get({ collection, document })

  res.json({
    ...version,
  })
}
