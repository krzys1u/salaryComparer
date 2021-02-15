import React, { useCallback } from 'react'
import { useQuery } from 'react-query'
import { Error as ErrorComponent } from '../Error/Error'
import { Diagram } from '../Diagram/Diagram'
import { EmptyFilters } from '../EmptyFilters/EmptyFilters'
import { withDebug } from '../../utils/withDebug'

const fetch = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('xyz'))
      //resolve({data: true});
    }, 2000)
  })
}

const areFiltersEmpty = ({ types, measures }) =>
  !Object.keys(types).filter((key) => !!types[key]).length ||
  !Object.keys(measures).filter((key) => !!measures[key]).length

const fetchData = async (queryKey) => {
  const {
    queryKey: [, { filters }],
  } = queryKey

  return await fetch(filters)
}

export const Workspace = withDebug(function Workspace({ filters }) {
  const filtersEmpty = areFiltersEmpty(filters)

  const { isError, error, refetch, data } = useQuery(
    ['data', filters.types, filters.from, filters.to],
    fetchData,
    {
      enabled: !filtersEmpty,
    },
  )

  const errorClick = useCallback(() => {
    refetch({ throwOnError: false })
  }, [refetch])

  if (filtersEmpty) {
    return <EmptyFilters />
  }

  if (isError && error) {
    return <ErrorComponent error={error} onClick={errorClick} />
  }

  return <Diagram data={data} />
})
