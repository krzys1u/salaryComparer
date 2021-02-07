import React from 'react'
import { Button } from '@material-ui/core'
import { withDebug } from '../../utils/withDebug'
import { ErrorIcon } from './ErrorIcon'
import Typography from '@material-ui/core/Typography'

export const Error = withDebug(function Error(props) {
  const { error, onClick } = props

  return (
    <div className="info__wrapper">
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Something went wrong...
        </Typography>

        <ErrorIcon />
        <code>{error.message}</code>
        <Button variant="outlined" color="primary" onClick={onClick}>
          Try again
        </Button>
      </div>
    </div>
  )
})
