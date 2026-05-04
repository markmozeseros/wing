'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import en from './translations/en'
import hu from './translations/hu'
import { TranslationKeys } from './translations/hu'
import de from './translations/de'

export type Language = 'en' | 'hu' | 'de'
export type Country = 'hu' | 'at' | 'de'

export interface LangOption {
  code: Language
  label: string
}

export interface CountryConfig {
  code: Country
  name: string
  flag: string
  currency: string
  companyName: string
  defaultLang: Language
  availableLangs: LangOption[]
  urlPrefix: string // e.g. 'HU', 'AT', 'DE'
}

export const COUNTRIES: Record<Country, CountryConfig> = {
  hu: {
    code: 'hu',
    name: 'Hungary',
    flag: '🇭🇺',
    currency: 'HUF',
    companyName: 'VING Magyarország',
    defaultLang: 'hu',
    urlPrefix: 'HU',
    availableLangs: [
      { code: 'hu', label: 'Magyar' },
      { code: 'en', label: 'English' },
    ],
  },
  at: {
    code: 'at',
    name: 'Austria',
    flag: '🇦🇹',
    currency: 'EUR',
    companyName: 'VING Austria',
    defaultLang: 'de',
    urlPrefix: 'AT',
    availableLangs: [
      { code: 'de', label: 'Deutsch' },
      { code: 'en', label: 'English' },
    ],
  },
  de: {
    code: 'de',
    name: 'Germany',
    flag: '🇩🇪',
    currency: 'EUR',
    companyName: 'VING Deutschland',
    defaultLang: 'de',
    urlPrefix: 'DE',
    availableLangs: [
      { code: 'de', label: 'Deutsch' },
      { code: 'en', label: 'English' },
    ],
  },
}

// Parse locale string like 'HU-hu' → { country: 'hu', lang: 'hu' }
function parseLocale(locale: string): { country: Country; lang: Language } {
  const [countryPrefix, langCode] = locale.split('-')
  const country = (Object.values(COUNTRIES).find(
    (c) => c.urlPrefix === countryPrefix
  )?.code ?? 'hu') as Country
  const lang = (langCode ?? COUNTRIES[country].defaultLang) as Language
  return { country, lang }
}

// Build locale string like 'HU-hu' from country + lang
export function buildLocale(country: Country, lang: Language): string {
  return `${COUNTRIES[country].urlPrefix}-${lang}`
}

const translations: Record<Language, TranslationKeys> = { en, hu, de }

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
  country: Country
  setCountry: (country: Country) => void
  countryConfig: CountryConfig
  locale: string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'hu',
  setLang: () => {},
  t: (key) => key,
  country: 'hu',
  setCountry: () => {},
  countryConfig: COUNTRIES.hu,
  locale: 'HU-hu',
})

interface LanguageProviderProps {
  children: React.ReactNode
  initialLocale?: string
}

export function LanguageProvider({ children, initialLocale = 'HU-hu' }: LanguageProviderProps) {
  const router = useRouter()
  const pathname = usePathname()

  const getLocaleFromPath = (): string => {
    const segments = pathname.split('/')
    const localeSegment = segments[1] // e.g. 'HU-hu'
    const isValid = /^(HU|AT|DE)-(hu|de|en)$/.test(localeSegment)
    return isValid ? localeSegment : initialLocale
  }

  const parsed = parseLocale(getLocaleFromPath())
  const [country, setCountryState] = useState<Country>(parsed.country)
  const [lang, setLangState] = useState<Language>(parsed.lang)

  // Sync state if URL changes (browser back/forward)
  useEffect(() => {
    const p = parseLocale(getLocaleFromPath())
    setCountryState(p.country)
    setLangState(p.lang)
  }, [pathname])

  const navigateToLocale = (newCountry: Country, newLang: Language) => {
    const newLocale = buildLocale(newCountry, newLang)
    // Replace locale segment in current path
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/') || `/${newLocale}`
    router.push(newPath)
  }

  const setCountry = (newCountry: Country) => {
    const newLang = COUNTRIES[newCountry].defaultLang
    navigateToLocale(newCountry, newLang)
  }

  const setLang = (newLang: Language) => {
    navigateToLocale(country, newLang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = translations[lang]
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k]
    }
    if (typeof value === 'string') return value
    let fallback: unknown = translations.en
    for (const k of keys) {
      fallback = (fallback as Record<string, unknown>)?.[k]
    }
    return typeof fallback === 'string' ? fallback : key
  }

  const locale = buildLocale(country, lang)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, country, setCountry, countryConfig: COUNTRIES[country], locale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
