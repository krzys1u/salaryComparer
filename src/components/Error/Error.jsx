import React from 'react'
import { Button } from '@material-ui/core'
import { withDebug } from '../../utils/withDebug'
import { ErrorIcon } from './ErrorIcon'
import { MessageCard } from '../MessageCard/MessageCard'

export const Error = withDebug(function Error(props) {
  const { error, onClick } = props

  return (
    <MessageCard
      // label="Something went wrong..."
      label="Coś poszło nie tak..."
      code={error.message}
      icon={<ErrorIcon />}
      button={
        <Button variant="outlined" color="primary" onClick={onClick}>
          {/*Try again*/}
          Ponów
        </Button>
      }
    />
  )
})
