import React, { useContext, useState } from 'react'

import { PL, EN, TRANSLATIONS, LANGS } from '../translations'

const LANGUAGE_NAMESPACE = 'salario::lang'

const saveLanguage = (lang) => {
  localStorage.setItem(LANGUAGE_NAMESPACE, lang)
}

const loadLanguage = () => {
  const browserPreferredLanguage =
    window.navigator.language === 'pl-PL' ? PL : EN

  const localStorageLanguage = localStorage.getItem(LANGUAGE_NAMESPACE)

  if (localStorageLanguage) {
    return localStorageLanguage
  }

  if (browserPreferredLanguage) {
    return browserPreferredLanguage
  }

  return PL
}

const sendTracking = (lang) => {
  window.dataLayer.push({ event: 'language-changed', lang })
}

const LanguageContext = React.createContext({
  lang: loadLanguage(),
  toggle: () => {},
})

let translationsCache = {}

export const useTranslation = () => {
  const { lang, changeLanguage } = useContext(LanguageContext)

  return {
    changeLanguage,
    activeLang: lang,
    translations: TRANSLATIONS[lang],
    LANGS,
    t: (string) => {
      if (!translationsCache[string]) {
        translationsCache[string] = Object.keys(TRANSLATIONS[lang])
          .filter((key) => string.includes(key))
          .reduce(
            (finalString, key) =>
              finalString.replace(key, TRANSLATIONS[lang][key]),
            string,
          )
      }

      return translationsCache[string]
    },
  }
}

export const withTranslation = (Component) => {
  return (...props) => {
    const loadedLang = loadLanguage()
    const [lang, setLang] = useState(loadedLang)

    return (
      <LanguageContext.Provider
        value={{
          lang,
          changeLanguage: (lang) => {
            const newLang = lang

            saveLanguage(newLang)
            setLang(newLang)

            sendTracking(newLang)

            translationsCache = {}
          },
        }}>
        <Component {...props} />
      </LanguageContext.Provider>
    )
  }
}
