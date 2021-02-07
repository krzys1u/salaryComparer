import React, { useEffect } from 'react'

const isDebugEnabled = false

export const withDebug = (Component) => {
  return (props) => {
    const componentName = Component.displayName || Component.name

    isDebugEnabled && console.info(`Rendering component: ${componentName} with props `, props || {})

    useEffect(() => {
      isDebugEnabled && console.info(`Component mounted: ${componentName}`)

      return () => {
        isDebugEnabled && console.info(`Component unmounted: ${componentName}`)
      }
    }, [])

    if (!isDebugEnabled) {
      return <Component {...props} />
    }

    return <Component {...props} />
  }
}
