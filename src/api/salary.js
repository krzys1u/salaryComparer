const {
  createFirebaseService,
  initializeFirestore,
} = require('../services/FirebaseService')

const firebaseService = createFirebaseService(initializeFirestore())

module.exports = async (req, res) => {
  const { from, to, types } = req.query
  const filters = []

  from && filters.push(['brutto', '>=', parseInt(from)])
  to && filters.push(['brutto', '<=', parseInt(to)])
  types && filters.push(['type', 'in', types])

  const { version } = await firebaseService.get({
    collection: 'meta',
    document: 'version',
  })

  const collection = `salary-data-${version}`

  if (filters.length) {
    const data = await firebaseService.getWithFilters({
      collection,
      filters,
    })

    return res.json({
      data,
      filters,
      query: req.query,
    })
  }

  //const data = await firebaseService.get({ collection })

  res.json({
    data: [],
  })
}
