import React, { useCallback } from 'react'
import { useQuery } from 'react-query'
import { Error as ErrorComponent } from '../Error/Error'
import { Diagram } from '../Diagram/Diagram'
import { EmptyFilters } from '../EmptyFilters/EmptyFilters'
import { withDebug } from '../../utils/withDebug'
import { API_URL } from '../../config'
import { EMPLOYMENT_TYPES, UOP_EMPLOYER_COST } from '../../const'

const prepareParam = (name, value) => {
  if (!Array.isArray(value)) {
    return [name, value]
  }

  return [value.map((entry) => [name, entry].join('=')).join('&')]
}

const prepareQueryParams = (params) => {
  return Object.keys(params)
    .map((param) => prepareParam(param, params[param]).join('='))
    .join('&')
}

const fetchSalaryData = async (params) => {
  const url = `${API_URL}/api/salary?${prepareQueryParams(params)}`

  const response = await fetch(url, params)

  const { data } = await response.json()

  return data
}

const areFiltersEmpty = ({ types, measures, additionalFilters }) =>
  !Object.keys(types).filter((key) => !!types[key].checked).length ||
  !Object.keys(measures).filter((key) => !!measures[key].checked).length

const fetchData = async (queryKey) => {
  const {
    queryKey: [, types, from, to, additionalFilters],
  } = queryKey

  return await fetchSalaryData({
    types: Object.keys(types).filter((key) => !!types[key].checked),
    additionalFilters: Object.keys(additionalFilters).filter(
      (key) => !!additionalFilters[key].checked,
    ),
    from,
    to,
  })
}

const prepareData = ({ types, measures, additionalFilters }, data) => {
  const dataSeries = {}
  const dataPoints = {}

  const getLabel = (entries, key) =>
    entries.find((entry) => entry.name === key).label

  const getDataPointLabel = (label, type) =>
    `${label} (${getLabel(
      [
        ...EMPLOYMENT_TYPES,
        {
          label: 'contractOfEmploymentEmployerCostLabel',
          name: UOP_EMPLOYER_COST,
        },
      ],
      type,
    )})`

  const range = []

  data.forEach((dataPoint) => {
    Object.values(measures)
      .filter((measure) => !!measure.checked)
      .forEach((measure) => {
        const { name, label, additionalFields } = measure.data

        const { type, gross } = dataPoint
        const dataPointLabel = getDataPointLabel(label, type)

        if (!range[0] || gross < range[0]) {
          range[0] = gross
        }

        if (!range[1] || gross > range[1]) {
          range[1] = gross
        }

        if (!dataPoints[gross]) {
          dataPoints[gross] = []
        }

        const dataSeriesToShow = [
          ...(!additionalFilters.showOnlyEmployerCost.checked
            ? { name, label: dataPointLabel }
            : {}),
          ...additionalFields
            .filter(({ enabler }) => !!additionalFilters[enabler].checked)
            .map(({ name, labelSuffix }) => ({
              name,
              label: `${dataPointLabel} - ${labelSuffix}`,
            })),
        ]

        dataSeriesToShow.forEach((field) => {
          const { name, label } = field

          if (!dataPoint[name]) {
            return
          }

          dataPoints[gross].push([label, dataPoint[name]])

          if (!dataSeries[label]) {
            dataSeries[label] = []
          }

          dataSeries[label].push({
            x: gross,
            y: dataPoint[name],
            label,
          })
        })
      })
  })

  return {
    dataSeries: Object.keys(dataSeries).map((key) => ({
      label: key,
      data: dataSeries[key],
    })),
    dataPoints,
    range,
  }
}

export const Workspace = withDebug(function Workspace({ filters }) {
  const filtersEmpty = areFiltersEmpty(filters)

  const { isError, error, refetch, data } = useQuery(
    [
      'data',
      filters.types,
      filters.from,
      filters.to,
      filters.additionalFilters,
    ],
    fetchData,
    {
      enabled: !filtersEmpty,
    },
  )

  const errorClick = useCallback(() => {
    refetch({ throwOnError: false })
  }, [refetch])

  if (!data || filtersEmpty) {
    return <EmptyFilters />
  }

  if (isError && error) {
    return <ErrorComponent error={error} onClick={errorClick} />
  }

  const { dataSeries, dataPoints, range } = prepareData(filters, data)

  return (
    <Diagram
      filters={filters}
      dataSeries={dataSeries}
      dataPoints={dataPoints}
      dataRange={range}
    />
  )
})
