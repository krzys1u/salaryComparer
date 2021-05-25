import { UOP_EMPLOYER_COST } from '../const'

const prepareParam = (param) => {
  if (!param) {
    return []
  }

  if (Array.isArray(param)) {
    return param
  }

  return [param]
}

module.exports = (db) => {
  return async (req, res) => {
    const { from, to, types, additionalFilters } = req.query

    const versionData = await db
      .select()
      .table('metadata')
      .where('key', 'version')

    if (!Array.isArray(versionData) || !versionData.length) {
      return res.json({ err: 'No version specified' })
    }

    const version = versionData[0].value

    const typesToFetch = [
      ...prepareParam(types),
      ...((prepareParam(additionalFilters) || []).includes('showEmployerCost')
        ? [UOP_EMPLOYER_COST]
        : []),
    ]

    const data = await db
      .select()
      .table('salaries')
      .where('gross', '>', parseInt(from) - 1)
      .andWhere('gross', '<', parseInt(to) + 1)
      .andWhere((builder) => builder.whereIn('type', typesToFetch))
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
          taxMin,
          taxMax,
          taxAvg,
          taxSum,
          type,
        }) => ({
          gross,
          nettoMin,
          nettoMax,
          nettoAvg,
          nettoSum,
          taxMin,
          taxMax,
          taxAvg,
          taxSum,
          type,
        }),
      ),
    })
  }
}
