import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { GitHubRibbon } from '../GitHubRibbon/GitHubRibbon'
import { withDebug } from '../../utils/withDebug'
import { API_URL } from '../../config'

const dateToString = (timestamp) => {
  const date = new Date(timestamp)

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

const fetchMetaData = async () => {
  const url = `${API_URL}/api/metadata`

  const response = await fetch(url)

  const { created } = await response.json()

  return dateToString(created)
}

export const Header = withDebug(function Header(props) {
  const { toogleSidebar } = props

  const [enabled, setEnabled] = React.useState(true)

  const { loading, data } = useQuery(['metadata'], fetchMetaData, {
    enabled,
  })

  useEffect(() => {
    if (!loading && !!data) {
      setEnabled(false)
    }
  }, [data, loading])

  return (
    <header className={'appHeader'}>
      <button className={'sidebarToggle'} onClick={() => toogleSidebar()}>
        <svg
          className="sidebarToggleIcon"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <div>
        <div>
          <h6 className={'appName'}>Salario</h6>
        </div>
        <div className={'dataGeneratedTime'}>
          Data generated at {data ?? ''}
        </div>
      </div>
      <GitHubRibbon repository={'https://github.com/krzys1u/salaryComparer'} />
    </header>
  )
})
