// src/app/page.tsx
import Hero from '@/components/Hero'
import Mid from '@/components/Mid'
import type { Metadata } from 'next'
import { SEASONAL_NOTICE } from '@/constants/seasonal'
import { CORE_SEARCH_KEYWORDS, SITE_URL } from '@/constants/seo'

export const metadata: Metadata = {
  title: '용스다이닝 | 모란역 술집·두부요리·혼술',
  description: '성남 모란역 도보 5~10분, 20년 경력 장인의 수제두부로 만든 전골과 두루치기를 술과 함께 즐기는 작은 한식 다이닝포차입니다.',
  keywords: [
    ...CORE_SEARCH_KEYWORDS,
    ...(SEASONAL_NOTICE.enabled ? SEASONAL_NOTICE.keywords : []),
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: '용스다이닝 | 모란역 술집·두부요리·혼술',
    description: '두부요리에 반주 한 잔, 모란의 작은 감성포차 용스다이닝입니다.',
    url: `${SITE_URL}/`,
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/social.png',
        width: 512,
        height: 512,
        alt: '용스다이닝포차 외부 전경',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function Home() {
  return (
    <section className="pb-32 sm:pb-40">
      {/* Hero */}
      <Hero />
      <Mid />
    </section>
  )
}
