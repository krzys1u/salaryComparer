import React, { useCallback, useEffect, useState } from 'react'

import './App.scss'

import { Filters } from './components/Filters/Filters'
import { Header } from './components/Header/Header'
import { Loader } from './components/Loader/Loader'
import { Workspace } from './components/Workspace/Workspace'

import { SALARY_MAX, SALARY_MIN } from './config'
import { withDebug } from './utils/withDebug'

export const App = withDebug(function App() {
  const [filters, setFilters] = useState({
    types: { 'uop-0': true },
    from: SALARY_MIN,
    to: SALARY_MAX,
  })

  const [isMobile, setMobile] = useState(window.innerWidth <= 640)
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
    const resizeHandler = () => {
      const isMobileWidth = window.innerWidth <= 640
      if (isMobile !== isMobileWidth) {
        setMobile(isMobileWidth)
      }
    }

    document.addEventListener('resize', resizeHandler)

    return () => document.removeEventListener('click', resizeHandler)
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
        <section className={`workspace ${isSidebarVisible ? '' : 'nosidebar'}`}>
          <Workspace filters={filters} />
        </section>
      </section>
    </div>
  )
})
