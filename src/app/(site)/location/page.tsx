import Location from '@/components/Location';
import type { Metadata } from 'next';
import RestaurantStructuredData from '@/components/seo/RestaurantStructuredData';
import { CORE_SEARCH_KEYWORDS, SITE_URL } from '@/constants/seo';

export const metadata: Metadata = {
  title: '모란역 술집 용스다이닝 | 영업시간·주차·예약',
  description: '성남 모란역 도보 5~10분 용스다이닝의 위치, 저녁 영업시간, 주차, 혼술 좌석, 단체 대관과 예약 정보를 확인하세요.',
  keywords: [...CORE_SEARCH_KEYWORDS, '모란역 술집 영업시간', '모란 술집 주차', '모란 단체 대관', '모란 청첩장 모임'],
  alternates: {
    canonical: `${SITE_URL}/location/`,
  },
  openGraph: {
    title: '용스다이닝 매장안내',
    description: '두부요리에 반주 한 잔, 모란의 작은 감성포차 용스다이닝을 소개합니다.',
    url: `${SITE_URL}/location/`,
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/location.webp',
        width: 1600,
        height: 1427,
        alt: '용스다이닝포차 지도 안내',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function LocationPage() {
  return (
    <>
      <RestaurantStructuredData />
      <section className="pt-6 sm:pt-8 pb-14 sm:pb-16">
        <Location />
      </section>
    </>
  );
}
