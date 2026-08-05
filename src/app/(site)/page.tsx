// src/app/page.tsx
import Hero from '@/components/Hero'
import Mid from '@/components/Mid'
import type { Metadata } from 'next'
import { SITE_URL } from '@/constants/store'

export const metadata: Metadata = {
  title: '용스다이닝포차 | 모란역 감성포차의 시작',
  description: '분위기 좋은 감성포차, 용스다이닝포차에서 추억과 요리를 함께하세요. 따뜻한 인테리어와 소울푸드가 기다립니다.',
  keywords: ['용스다이닝포차', '모란역맛집', '감성포차', '데이트장소', '분위기좋은술집'],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: '용스다이닝포차 | 분위기 좋은 감성포차',
    description: '따뜻한 조명과 요리가 함께하는 용스다이닝포차에서 하루를 마무리해보세요.',
    url: `${SITE_URL}/`,
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
}

export default function Home() {
  return (
    <section className="pb-20 sm:pb-24">
      <Hero />
      <Mid />
    </section>
  )
}
