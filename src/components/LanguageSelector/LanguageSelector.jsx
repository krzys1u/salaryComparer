import React from 'react'
import { useTranslation } from '../../contexts/LanguageContext'

export const LanguageSelector = () => {
  const { activeLang, changeLanguage, LANGS } = useTranslation()

  return (
    <div className="languageSelector__container">
      {Object.keys(LANGS).map((lang) => {
        const isActive = activeLang === lang

        const classNames = ['languageSelector__item']

        if (isActive) {
          classNames.push('active')
        }

        return (
          <span
            key={`lang-${lang}`}
            className={classNames.join(' ')}
            onClick={() => {
              changeLanguage(lang)
            }}>
            <span>{LANGS[lang]}</span>
          </span>
        )
      })}
    </div>
  )
}
