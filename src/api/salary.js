// const {
//   createFirebaseService,
//   initializeFirestore,
// } = require('../services/FirebaseService')
//
// const firebaseService = createFirebaseService(initializeFirestore())

//
// const getVersionFromFirebase = async () => {
//   const { version } = await firebaseService.get({
//     collection: 'meta',
//     document: 'version',
//   })
//
//   return version
// }
//
// const getFromFirebase = async (version, filters) => {
//   const collection = `salary-data-${version}`
//
//   const data = await firebaseService.getWithFilters({
//     collection,
//     filters,
//   })
//
//   return data
// }

const prepareTypes = (types) => {
  if (Array.isArray(types)) {
    return types
  }

  return [types]
}

module.exports = (db) => {
  return async (req, res) => {
    const { from, to, types } = req.query
    const filters = []

    from && filters.push(['brutto', '>=', parseInt(from)])
    to && filters.push(['brutto', '<=', parseInt(to)])
    types && filters.push(['type', 'in', prepareTypes(types)])

    const versionData = await db
      .select()
      .table('metadata')
      .where('key', 'version')

    if (!Array.isArray(versionData) || !versionData.length) {
      return res.json({ err: 'No version specified' })
    }

    const version = versionData[0].value

    const data = await db
      .select()
      .table('salaries')
      .where('gross', '>', parseInt(from) - 1)
      .andWhere('gross', '<', parseInt(to) + 1)
      .andWhere((builder) => builder.whereIn('type', prepareTypes(types)))
      .andWhere('version', version)

    // const version = await getVersionFromFirebase()
    // const data = await getFromFirebase(version, filters)

    return res.json({
      data: data.map(({ gross, nettoMin, nettoMax, nettoAvg, type }) => ({
        brutto: gross,
        nettoMin,
        nettoMax,
        nettoAvg,
        type,
      })),
    })
  }
}
