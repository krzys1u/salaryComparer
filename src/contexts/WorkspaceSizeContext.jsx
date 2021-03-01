import React, { useContext } from 'react'

export const WorkspaceSizeContext = React.createContext({ width: 0, height: 0 })

export const useWorkspaceSize = () => {
  return useContext(WorkspaceSizeContext)
}
