'use client'
import Link from 'next/link'
import { useLanguage } from '@/util/LanguageContext'
import { ComponentProps } from 'react'

type LocaleLinkProps = ComponentProps<typeof Link>

/**
 * Drop-in replacement for Next.js <Link> that automatically
 * prepends the current locale prefix to internal hrefs.
 * e.g. href="/cars-list-1" → href="/HU-hu/cars-list-1"
 * External URLs (http/https) and anchor links (#) are passed through unchanged.
 */
export default function LocaleLink({ href, children, ...props }: LocaleLinkProps) {
  const { locale } = useLanguage()

  const hrefStr = typeof href === 'string' ? href : String(href)
  const isExternal = hrefStr.startsWith('http') || hrefStr.startsWith('//')
  const isAnchor = hrefStr.startsWith('#')
  const isAlreadyLocalized = /^\/(HU|AT|DE)-/.test(hrefStr)

  const localizedHref =
    isExternal || isAnchor || isAlreadyLocalized
      ? href
      : hrefStr === '/'
      ? `/${locale}`
      : `/${locale}${hrefStr}`

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  )
}
