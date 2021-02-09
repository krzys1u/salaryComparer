const { firebaseService } = require('../services/FirebaseService')

const collection = 'meta'
const document = 'version'

module.exports = async (req, res) => {
  const version = await firebaseService.get({ collection, document })

  res.json({
    ...version,
  })
}
