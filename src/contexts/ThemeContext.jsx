import React, { useContext, useState } from 'react'

const THEME_NAMESPACE = 'salario::theme'
const DARK = 'dark'
const LIGHT = 'light'

const saveTheme = (theme) => {
  localStorage.setItem(THEME_NAMESPACE, theme)
}

export const loadTheme = () => {
  const browserPreferredTheme = !!(
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const localStorageTheme = localStorage.getItem(THEME_NAMESPACE)

  if (localStorageTheme) {
    return localStorageTheme
  }

  if (browserPreferredTheme) {
    return browserPreferredTheme
  }

  return LIGHT
}

export const ThemeContext = React.createContext({
  light: loadTheme(),
  toggle: () => {},
})

export const useTheme = () => {
  const { light, toggle } = useContext(ThemeContext)

  return {
    toggle,
    isLight: light,
    isDark: !light,
    theme: light ? LIGHT : DARK,
  }
}

export const withTheme = (Component) => {
  return (...props) => {
    const theme = loadTheme()
    const [light, setLight] = useState(theme === LIGHT)

    return (
      <ThemeContext.Provider
        value={{
          light,
          toggle: () => {
            saveTheme(light ? DARK : LIGHT)
            setLight(!light)
          },
        }}>
        <Component {...props} />
      </ThemeContext.Provider>
    )
  }
}
