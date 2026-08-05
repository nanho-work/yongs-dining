import Menu from '@/components/Menu'
import type { Metadata } from 'next'
import { SITE_URL } from '@/constants/store'

export const metadata: Metadata = {
  title: '용스다이닝포차 메뉴 | 따뜻한 소울푸드',
  description: '한우두부전골, 수제 두부보쌈과 다양한 안주·주류까지 용스다이닝포차의 전체 메뉴를 확인해보세요.',
  keywords: ['용스메뉴', '모두부', '황태탕', '분위기 좋은 맛집', '감성포차메뉴'],
  alternates: {
    canonical: `${SITE_URL}/menu/`,
  },
  openGraph: {
    title: '용스다이닝포차 메뉴',
    description: '감성과 맛이 살아있는 요리들. 용스다이닝포차의 메뉴를 소개합니다.',
    url: `${SITE_URL}/menu/`,
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

export default function MenuPage() {
  return (
    <section className="pb-20 pt-5 sm:pb-24 sm:pt-8">
      <Menu />
    </section>
  )
}
