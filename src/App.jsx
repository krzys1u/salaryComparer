import React, { useCallback, useEffect, useState } from 'react'

import debounce from 'lodash.debounce'

import './App.scss'

import { Filters } from './components/Filters/Filters'
import { Header } from './components/Header/Header'
import { Loader } from './components/Loader/Loader'
import { Workspace } from './components/Workspace/Workspace'

import { SALARY_MAX, SALARY_MIN } from './config'
import { EMPLOYMENT_TYPES, MEASURES, ADDITIONAL_FILTERS } from './const'
import { withDebug } from './utils/withDebug'

import { WorkspaceSizeContext } from './contexts/WorkspaceSizeContext'
import { useTheme } from './contexts/ThemeContext'
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'

const getWorkspaceSize = () => {
  const workspace = document.getElementById('Workspace')

  return {
    width: workspace.offsetWidth - 25,
    height: workspace.offsetHeight,
  }
}

const sendTracking = (filters) => {
  window.dataLayer.push({ event: 'formSubmit', ...filters })
}

const updateQueryString = (filters) => {
  const url = [
    [
      'types',
      Object.keys(filters.types)
        .filter((key) => !!filters.types[key])
        .join(','),
    ],
    [
      'measures',
      Object.keys(filters.measures)
        .filter((key) => !!filters.measures[key])
        .join(','),
    ],
    ['from', filters.from],
    ['to', filters.to],
  ].reduce((url, [k, v]) => {
    url.searchParams.set(k, v)

    return url
  }, new URL(window.location))

  window.history.pushState({}, '', url)
}

const getInitialState = () => {
  const search = window.location.search
  const params = new URLSearchParams(search)

  const employmentTypes = Object.fromEntries(
    EMPLOYMENT_TYPES.map((type) => [type.name, 1]),
  )
  const measureTypes = Object.fromEntries(
    MEASURES.map((measure) => [measure.name, 1]),
  )
  const additionalFiltersTypes = Object.fromEntries(
    ADDITIONAL_FILTERS.map((filter) => [filter.name, 1]),
  )

  const types = (params.get('types') || 'uop-0')
    .split(',')
    .filter((type) => employmentTypes[type])
  const measures = (params.get('measures') || 'nettoMin')
    .split(',')
    .filter((type) => measureTypes[type])
  const additionalFilters = (params.get('additionalFilters') || '')
    .split(',')
    .filter((type) => additionalFiltersTypes[type])
  const from = parseInt(params.get('from')) || SALARY_MIN
  const to = parseInt(params.get('to')) || SALARY_MAX

  return {
    types: Object.fromEntries(types.map((key) => [key, true])),
    measures: Object.fromEntries(measures.map((key) => [key, true])),
    additionalFilters: Object.fromEntries(
      additionalFilters.map((key) => [key, true]),
    ),
    from: from < to ? from : to,
    to: from > to ? from : to,
  }
}

export const App = withDebug(function App() {
  const [filters, setFilters] = useState(getInitialState())

  const [isMobile, setMobile] = useState(window.innerWidth <= 640)
  const [size, setSize] = useState({})
  const [isSidebarVisible, setSidebarVisible] = useState(true)

  const { theme } = useTheme()

  const hideSidebarOnMobileAfterSubmit = useCallback(() => {
    if (isMobile) {
      setSidebarVisible(false)
    }
  }, [isMobile])

  useEffect(() => {
    updateQueryString(filters)
  }, [filters])

  const filtersSubmitted = useCallback(
    (filters) => {
      hideSidebarOnMobileAfterSubmit()

      setFilters(filters)

      sendTracking(filters)
    },
    [setFilters, hideSidebarOnMobileAfterSubmit],
  )

  const toogleSidebar = useCallback(() => {
    setSidebarVisible(!isSidebarVisible)
  }, [isSidebarVisible])

  useEffect(() => {
    setSize(getWorkspaceSize())
  }, [isSidebarVisible, isMobile])

  useEffect(() => {
    const resizeHandler = debounce(() => {
      const isMobileWidth = window.innerWidth <= 640

      if (isMobile !== isMobileWidth) {
        setMobile(isMobileWidth)
      }

      setSize(getWorkspaceSize())
    }, 400)

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return (
    <div className="App" data-theme={theme}>
      <Loader />
      <Header toogleSidebar={toogleSidebar} />
      <section className={'content'}>
        {isSidebarVisible && (
          <aside className={'sidebar'}>
            <Filters submitAction={filtersSubmitted} values={filters} />
            <LanguageSelector />
          </aside>
        )}
        <section
          className={`workspace ${isSidebarVisible ? '' : 'nosidebar'}`}
          id="Workspace">
          <WorkspaceSizeContext.Provider value={size}>
            <Workspace filters={filters} />
          </WorkspaceSizeContext.Provider>
        </section>
      </section>
    </div>
  )
})
