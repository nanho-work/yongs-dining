import Location from '@/components/Location';

export const metadata = {
  title: '용스다이닝포차 오시는 길 | 모란역 위치 안내',
  description: '용스다이닝포차는 모란역 도보 5분 거리에 위치해 있습니다. 지도와 함께 방문 경로를 확인해보세요.',
  keywords: ['용스다이닝 위치', '모란역 포차', '맛집 위치', '용스 포차 주소'],
  openGraph: {
    title: '용스다이닝포차 오시는 길',
    description: '모란역 인근, 분위기 좋은 용스다이닝포차를 찾아오시는 방법.',
    url: 'https://yongsdining.com/locations',
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/og-location.jpg',
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
    <main className="max-w-6xl mx-auto px-4 py-30">
      <Location />
    </main>
  );
}