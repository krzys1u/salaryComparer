import React from 'react'
import { withDebug } from '../../utils/withDebug'
import { EmptyFiltersIcon } from './EmptyFiltersIcon'
import { MessageCard } from '../MessageCard/MessageCard'

export const EmptyFilters = withDebug(function EmptyFilters() {
  //return <MessageCard label="No filters selected" icon={<EmptyFiltersIcon />} />
  return <MessageCard label="Nie wybrano filtrów" icon={<EmptyFiltersIcon />} />
})
