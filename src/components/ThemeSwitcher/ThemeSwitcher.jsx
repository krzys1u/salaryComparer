import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

export const ThemeSwitcher = () => {
  const { isLight, toggle } = useTheme()

  const classNames = ['themeSwitcher__container']

  !isLight && classNames.push('active')

  return (
    <div className={classNames.join(' ')} onClick={toggle}>
      <span></span>
    </div>
  )
}
