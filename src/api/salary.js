const { firebaseService } = require('../services/FirebaseService')

const document = '1000-uop-0'

module.exports = async (req, res) => {
  const { version } = await firebaseService.get({collection: 'meta', document: 'version'});

  const collection = `salary-data-${version}`;

  const data = await firebaseService.get({ collection, document })

  res.json({
    ...data,
  })
}
