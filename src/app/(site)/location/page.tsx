import Location from '@/components/Location';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '용스다이닝 매장안내 | 모란역 한식 다이닝포차',
  description: '모란역 인근 작은 한식 다이닝포차 용스다이닝의 위치, 영업시간, 주차, 대표 메뉴와 공간 정보를 확인하세요.',
  keywords: ['용스다이닝 위치', '모란역 포차', '맛집 위치', '용스 포차 주소'],
  alternates: {
    canonical: 'https://yongs-dining.com/location',
  },
  openGraph: {
    title: '용스다이닝 매장안내',
    description: '두부요리에 반주 한 잔, 모란의 작은 감성포차 용스다이닝을 소개합니다.',
    url: 'https://yongs-dining.com/location',
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/location.webp',
        width: 1200,
        height: 630,
        alt: '용스다이닝포차 지도 안내',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function LocationPage() {
  return (
    <section className="pt-6 sm:pt-8 pb-14 sm:pb-16">
      <Location />
    </section>
  );
}
