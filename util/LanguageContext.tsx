'use client'
import React, { createContext, useContext, useState } from 'react'
import en, { TranslationKeys } from './translations/en'
import hu from './translations/hu'
import de from './translations/de'
import fr from './translations/fr'
import it from './translations/it'
import es from './translations/es'

type Language = 'en' | 'hu' | 'de' | 'fr' | 'it' | 'es'

const translations: Record<Language, TranslationKeys> = { en, hu, de, fr, it, es }

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = translations[lang]
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k]
    }
    if (typeof value === 'string') return value
    // fallback to English
    let fallback: unknown = translations.en
    for (const k of keys) {
      fallback = (fallback as Record<string, unknown>)?.[k]
    }
    return typeof fallback === 'string' ? fallback : key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
