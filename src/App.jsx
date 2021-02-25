import React, { useCallback, useEffect, useState } from 'react'

import debounce from 'lodash.debounce'

import './App.scss'

import { Filters } from './components/Filters/Filters'
import { Header } from './components/Header/Header'
import { Loader } from './components/Loader/Loader'
import { Workspace } from './components/Workspace/Workspace'

import { SALARY_MAX, SALARY_MIN } from './config'
import { withDebug } from './utils/withDebug'

import { WorkspaceSizeContext } from './contexts/WorkspaceSizeContext'

const getWorkspaceSize = () => {
  const workspace = document.getElementById('Workspace')

  return {
    width: workspace.offsetWidth - 50,
    height: workspace.offsetHeight,
  }
}

export const App = withDebug(function App() {
  const [filters, setFilters] = useState({
    types: { 'uop-0': true },
    measures: { nettoMin: true },
    from: SALARY_MIN,
    to: SALARY_MAX,
  })

  const [isMobile, setMobile] = useState(window.innerWidth <= 640)
  const [size, setSize] = useState({})
  const [isSidebarVisible, setSidebarVisible] = useState(true)

  const hideSidebarOnMobileAfterSubmit = useCallback(() => {
    if (isMobile) {
      setSidebarVisible(false)
    }
  }, [isMobile])

  const filtersSubmitted = useCallback(
    (filters) => {
      hideSidebarOnMobileAfterSubmit()

      setFilters(filters)
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
    <div className="App">
      <Loader />
      <Header toogleSidebar={toogleSidebar} />
      <section className={'content'}>
        {isSidebarVisible && (
          <aside className={'sidebar'}>
            <Filters submitAction={filtersSubmitted} values={filters} />
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
