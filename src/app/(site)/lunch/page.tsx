import Lunch from '@/components/lunch/Lunch'
import type { Metadata } from 'next'
import { SITE_URL } from '@/constants/store'

export const metadata: Metadata = {
  title: '용스다이닝포차 점심특선 | 목-일 12:00-15:00',
  description: '용스다이닝포차 점심특선 메뉴와 세트 구성을 확인해보세요.',
  alternates: {
    canonical: `${SITE_URL}/lunch/`,
  },
  openGraph: {
    title: '용스다이닝포차 점심특선',
    description: '점심 한정 메뉴와 세트 구성을 만나보세요.',
    url: `${SITE_URL}/lunch/`,
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

export default function LunchPage() {
  return (
    <section className="pb-20 pt-5 sm:pb-24 sm:pt-8">
      <Lunch />
    </section>
  )
}
