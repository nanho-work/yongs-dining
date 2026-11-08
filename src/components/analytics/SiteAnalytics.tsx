'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { GOOGLE_ANALYTICS_ID, NAVER_ANALYTICS_ID } from '@/constants/analytics'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    wcs?: unknown
    wcs_add?: Record<string, string>
    wcs_do?: () => void
  }
}

const getAnalyticsEventName = (href: string) => {
  if (href.startsWith('tel:')) return 'phone_click'
  if (href.includes('open.kakao.com')) return 'reservation_click'
  if (href.includes('google.com/maps')) return 'directions_click'
  if (href.includes('instagram.com')) return 'instagram_click'
  if (href.includes('blog.naver.com')) return 'review_click'

  try {
    const url = new URL(href, window.location.origin)
    if (url.origin === window.location.origin && url.pathname.startsWith('/menu')) {
      return 'menu_click'
    }
  } catch {
    return null
  }

  return null
}

export default function SiteAnalytics() {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const lastNaverPathname = useRef<string | null>(null)

  const trackNaverPageView = useCallback(() => {
    window.wcs_add = window.wcs_add ?? {}
    window.wcs_add.wa = NAVER_ANALYTICS_ID

    if (window.wcs && window.wcs_do && lastNaverPathname.current !== pathname) {
      window.wcs_do()
      lastNaverPathname.current = pathname
    }
  }, [pathname])

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      window.gtag?.('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      })
      previousPathname.current = pathname
    }

    trackNaverPageView()
  }, [pathname, trackNaverPageView])

  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest('a')
      if (!link) return

      const eventName = getAnalyticsEventName(link.href)
      if (!eventName) return

      window.gtag?.('event', eventName, {
        link_url: link.href,
        link_text: link.textContent?.trim().slice(0, 100) ?? '',
        page_path: window.location.pathname,
      })
    }

    document.addEventListener('click', trackClick, true)
    return () => document.removeEventListener('click', trackClick, true)
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <Script
        src="https://wcs.naver.net/wcslog.js"
        strategy="afterInteractive"
        onReady={trackNaverPageView}
      />
    </>
  )
}
