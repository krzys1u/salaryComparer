import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { App } from './App'
import { withTheme } from './contexts/ThemeContext'
import { withTranslation } from './contexts/LanguageContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const ThemedTranslatedApp = withTheme(withTranslation(App))

function ApplicationWithQueryProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemedTranslatedApp />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

const appRootElement = document.getElementById('root')

ReactDOM.render(<ApplicationWithQueryProvider />, appRootElement)
