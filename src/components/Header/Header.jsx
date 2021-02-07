import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { GitHubRibbon } from '../GitHubRibbon/GitHubRibbon'
import { withDebug } from '../../utils/withDebug'

const fetchMetaData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => ({
          version: 1,
          updated: dateToString(new Date(new Date().getTime())),
        }),
      })
    }, 2000)
  })
}

const dateToString = (date) => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

const fetchMetadata = async () => (await fetchMetaData()).json()

export const Header = withDebug(function Header(props) {
  const { toogleSidebar } = props

  const [skip, setSkip] = React.useState(false)

  const { loading, data } = useQuery(['metadata'], fetchMetadata, {
    skip,
    retry: false,
  })

  useEffect(() => {
    if (!loading && !!data) {
      setSkip(true)
    }
  }, [data, loading])

  return (
    <header className={'appHeader'}>
      <button className={'sidebarToggle'} onClick={() => toogleSidebar()}>
        <svg className="sidebarToggleIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <div>
        <div>
          <h6 className={'appName'}>Salario</h6>
        </div>
        <div className={'dataGeneratedTime'}>Data generated at {data && data.updated ? data.updated : ''}</div>
      </div>
      <GitHubRibbon repository={'https://github.com/krzys1u/salaryComparer'} />
    </header>
  )
})
