import React from 'react'
import { withDebug } from '../../utils/withDebug'
import { EmptyFiltersIcon } from './EmptyFiltersIcon'
import { MessageCard } from '../MessageCard/MessageCard'
import { useTranslation } from '../../contexts/LanguageContext'

export const EmptyFilters = withDebug(function EmptyFilters() {
  const { translations } = useTranslation()

  return (
    <MessageCard
      label={translations.noFiltersLabel}
      icon={<EmptyFiltersIcon />}
    />
  )
})
