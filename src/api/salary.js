const {
  createFirebaseService,
  initializeFirestore,
} = require('../services/FirebaseService')

const firebaseService = createFirebaseService(initializeFirestore())

const document = '1000-uop-0'

module.exports = async (req, res) => {
  const { from, to, types } = req.query
  const filters = []

  from && filters.push(['brutto', '>=', from])
  to && filters.push(['brutto', '<=', to])
  types && filters.push(['type', 'in', types])

  const { version } = await firebaseService.get({
    collection: 'meta',
    document: 'version',
  })

  const collection = `salary-data-${version}`

  if (filters.length) {
    const data = await firebaseService.getWithFilters({
      collection,
      document,
      filters,
    })

    return res.json({
      ...data,
      filters,
    })
  }

  const data = await firebaseService.get({ collection, document })

  res.json({
    ...data,
  })
}
