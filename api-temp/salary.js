const { firebaseService } = require('../services/FirebaseService')

const collection = 'salary-data-1'
const document = '1000-uop-0'

module.exports = async (req, res) => {
  const version = await firebaseService.get({ collection, document })

  res.json({
    ...version,
  })
}
