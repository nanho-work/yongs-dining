// src/app/layout.tsx
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import FloatingButton from '@/components/FloatingButton'
import Footer from '@/components/Footer'
import { CORE_SEARCH_KEYWORDS, SITE_URL } from '@/constants/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '용스다이닝 | 모란역 술집·두부요리·혼술',
  description: '성남 모란역 인근에서 수제두부 전골과 두루치기, 한식 안주를 즐기는 9평 규모의 작은 감성포차입니다. 혼술과 데이트, 소모임이 가능합니다.',
  keywords: [...CORE_SEARCH_KEYWORDS],

  // favicon
  icons: {
    icon: '/favicon.ico',
  },

  // SEO 기본
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',

  // canonical URL 설정 (중복 방지)
  alternates: {
    canonical: `${SITE_URL}/`,
  },

  verification: {
    other: {
      'naver-site-verification': '832364f2f86e8cc286734633188cfd9f79eb38f6',
    },
  },

  // Open Graph (카카오톡/페북 공유 시)
  openGraph: {
    title: '용스다이닝포차 | 따뜻한 감성 술집',
    description: '빈티지 인테리어와 소울푸드, 그리고 좋은 사람들과 함께하는 공간',
    url: `${SITE_URL}/`,
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/social.png',
        width: 512,
        height: 512,
        alt: '용스다이닝포차 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '용스다이닝포차 | 따뜻한 감성 술집',
    description: '빈티지 인테리어와 소울푸드, 그리고 좋은 사람들과 함께하는 공간',
    images: ['/social.png'],
  },

  // 작성자 정보 (선택)
  authors: [{ name: 'YongsDining', url: 'https://yongs-dining.com' }],
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
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-neutral-900"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="content" tabIndex={-1} className="flex-grow pt-2 sm:pt-3">{children}</main>
        <FloatingButton />
        <Footer />
      </body>
    </html>
  )
}
