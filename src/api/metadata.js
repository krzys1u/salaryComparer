// const {
//   createFirebaseService,
//   initializeFirestore,
// } = require('../services/FirebaseService')
//
// const firebaseService = createFirebaseService(initializeFirestore())
//
// const collection = 'meta'
// const document = 'version'

module.exports = (db, DB) => {
  return async (req, res) => {
    const versionData = await db
      .select()
      .table('metadata')
      .where('key', 'version')
      .orWhere('key', 'created')

    if (!Array.isArray(versionData) || !versionData.length) {
      return res.json({ err: 'No version specified' })
    }

    Object.fromEntries(versionData.map(({ key, value }) => [key, value]))

    // const version = await firebaseService.get({ collection, document })

    res.json({
      ...Object.fromEntries(versionData.map(({ key, value }) => [key, value])),
    })
  }
}
