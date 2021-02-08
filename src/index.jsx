import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { App } from './App'

const queryClient = new QueryClient()

export default function ApplicationWithQueryProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

ReactDOM.render(
  <ApplicationWithQueryProvider />,
  document.getElementById('root'),
)
