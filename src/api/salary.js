const prepareTypes = (types) => {
  if (Array.isArray(types)) {
    return types
  }

  return [types]
}

module.exports = (db) => {
  return async (req, res) => {
    const { from, to, types } = req.query

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
      .orderBy('gross')

    return res.json({
      data: data.map(
        ({
          gross,
          nettoMin,
          nettoMax,
          nettoAvg,
          nettoSum,
          costMin,
          costMax,
          costAvg,
          costSum,
          type,
        }) => ({
          gross,
          nettoMin,
          nettoMax,
          nettoAvg,
          nettoSum,
          costMin,
          costMax,
          costAvg,
          costSum,
          type,
        }),
      ),
    })
  }
}
