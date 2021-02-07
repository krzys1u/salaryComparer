import React from 'react'
import { useIsFetching } from 'react-query'
import { LoaderIcon } from './LoaderIcon'
import { withDebug } from '../../utils/withDebug'

export const Loader = withDebug(function Loader() {
  const isFetching = useIsFetching()

  if (!isFetching) {
    return null
  }

  return (
    <div className="loader">
      <LoaderIcon />
    </div>
  )
})
