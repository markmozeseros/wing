import { NextRequest, NextResponse } from 'next/server'

const VALID_LOCALES = ['HU-hu', 'HU-en', 'AT-de', 'AT-en', 'DE-de', 'DE-en']
const DEFAULT_LOCALE = 'HU-hu'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip static files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already starts with a valid locale
  const pathnameLocale = VALID_LOCALES.find(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (pathnameLocale) {
    const response = NextResponse.next()
    response.headers.set('x-locale', pathnameLocale)
    return response
  }

  // Redirect to default locale
  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|assets).*)'],
}
