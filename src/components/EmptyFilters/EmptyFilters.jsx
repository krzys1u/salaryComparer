import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withDebug } from '../../utils/withDebug'
import { EmptyFiltersIcon } from './EmptyFiltersIcon'

export const EmptyFilters = withDebug(function EmptyFilters() {
  return (
    <div className="info__wrapper">
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          No filters selected
        </Typography>
        <EmptyFiltersIcon />
      </div>
    </div>
  )
})
