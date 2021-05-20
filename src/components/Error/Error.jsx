import React from 'react'
import { Button } from '@material-ui/core'
import { withDebug } from '../../utils/withDebug'
import { ErrorIcon } from './ErrorIcon'
import { MessageCard } from '../MessageCard/MessageCard'
import { useTranslation } from '../../contexts/LanguageContext'

export const Error = withDebug(function Error(props) {
  const { error, onClick } = props
  const { translations } = useTranslation()

  return (
    <MessageCard
      label={translations.errorLabel}
      code={error.message}
      icon={<ErrorIcon />}
      button={
        <Button variant="outlined" color="primary" onClick={onClick}>
          {translations.tryAgainLabel}
        </Button>
      }
    />
  )
})
