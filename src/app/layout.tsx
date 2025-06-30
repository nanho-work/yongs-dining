// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import FloatingButton from '@/components/FloatingButton'

export const metadata: Metadata = {
  title: '용스다이닝포차 | 분위기 좋은 감성포차',
  description: '모란역에서 가장 따뜻한 감성 술집, 용스다이닝포차에서 특별한 하루를 즐겨보세요.',
  keywords: ['용스','두부맛집','두부카세','용스다이닝포차','용스다이닝', '감성포차', '모란역맛집', '다이닝', '술집', '포차', '분위기좋은포차', '소울푸드', '데이트맛집', '분위기좋은술집'],

  // favicon
  icons: {
    icon: '/favicon.ico',
  },

  // SEO 기본
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',

  // canonical URL 설정 (중복 방지)
  alternates: {
    canonical: 'https://yongsdining.com',
  },

  // Open Graph (카카오톡/페북 공유 시)
  openGraph: {
    title: '용스다이닝포차 | 따뜻한 감성 술집',
    description: '빈티지 인테리어와 소울푸드, 그리고 좋은 사람들과 함께하는 공간',
    url: 'https://yongsdining.com',
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/맨하탄카나페.png',
        width: 1200,
        height: 630,
        alt: '용스다이닝포차 매장 내부',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },

  // 작성자 정보 (선택)
  authors: [{ name: 'YongsDining', url: 'https://yongsdining.com' }],
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <FloatingButton />
      </body>
    </html>
  )
}