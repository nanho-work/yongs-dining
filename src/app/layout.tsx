// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import FloatingButton from '@/components/FloatingButton'
import Footer from '@/components/Footer'
import { SITE_URL, STORE_INFO, STORE_LINKS } from '@/constants/store'

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: STORE_INFO.name,
  description: STORE_INFO.description,
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: STORE_INFO.phone,
  priceRange: '₩₩',
  servesCuisine: ['한식', '두부요리', '포차'],
  acceptsReservations: STORE_LINKS.reservation,
  menu: `${SITE_URL}/menu/`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '중원구 제일로63번길 29 102호',
    addressLocality: '성남시',
    addressRegion: '경기도',
    addressCountry: 'KR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '18:00',
      closes: '01:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '17:00',
      closes: '02:00',
    },
  ],
  sameAs: [STORE_LINKS.instagram],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '용스다이닝포차 | 분위기 좋은 감성포차',
  description: '모란역에서 가장 따뜻한 감성 술집, 용스다이닝포차에서 특별한 하루를 즐겨보세요.',
  keywords: ['용스', '두부맛집', '두부카세', '용스다이닝포차', '용스다이닝', '감성포차', '모란역맛집', '다이닝', '술집', '포차', '분위기좋은포차', '소울푸드', '데이트맛집', '분위기좋은술집'],

  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
      { url: '/favicon.ico', sizes: '64x64' },
    ],
    shortcut: '/favicon.ico',
  },

  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: '용스다이닝포차 | 따뜻한 감성 술집',
    description: '빈티지 인테리어와 소울푸드, 그리고 좋은 사람들과 함께하는 공간',
    url: SITE_URL,
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '용스다이닝포차의 대표 메뉴 리얼 한우두부전골',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '용스다이닝포차 | 따뜻한 감성 술집',
    description: '빈티지 인테리어와 소울푸드, 그리고 좋은 사람들과 함께하는 공간',
    images: ['/og-image.jpg'],
  },

  authors: [{ name: 'YongsDining', url: SITE_URL }],
  creator: 'YongsDining',
  publisher: 'YongsDining',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-neutral-900"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        <main
          id="content"
          tabIndex={-1}
          className="flex-grow scroll-mt-[var(--site-header-height)] pt-2 outline-none sm:pt-3"
        >
          {children}
        </main>
        <FloatingButton />
        <Footer />
      </body>
    </html>
  )
}
