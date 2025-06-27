// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import FloatingButton from '@/components/FloatingButton'

export const metadata: Metadata = {
  title: '용스다이닝포차 | 분위기 좋은 감성포차',
  description: '모란역에서 가장 따뜻한 감성 술집, 용스다이닝포차에서 특별한 하루를 즐겨보세요.',
  keywords: ['용스다이닝포차', '감성포차', '모란역맛집', '술집', '포차', '분위기좋은포차'],
  openGraph: {
    title: '용스다이닝포차 | 따뜻한 감성 술집',
    description: '빈티지 인테리어와 소울푸드, 그리고 좋은 사람들과 함께하는 공간',
    url: 'https://yongsdining.com',
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/main1.jpeg', // 대표 이미지로 첫 번째 이미지 추천
        width: 1200,
        height: 630,
        alt: '용스다이닝포차 매장 내부',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: 'index, follow',
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