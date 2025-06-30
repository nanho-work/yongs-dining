import Menu from '@/components/Menu'; // 선택사항


export const metadata = {
  title: '용스다이닝포차 메뉴 | 따뜻한 소울푸드',
  description: '모두부, 황태탕, 알배기 등 용스다이닝포차만의 정성 가득한 메뉴를 확인해보세요.',
  keywords: ['용스메뉴', '모두부', '황태탕', '분위기 좋은 맛집', '감성포차메뉴'],
  openGraph: {
    title: '용스다이닝포차 메뉴',
    description: '감성과 맛이 살아있는 요리들. 용스다이닝포차의 메뉴를 소개합니다.',
    url: 'https://yongsdining.com/menu',
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/og-menu.jpg',
        width: 1200,
        height: 630,
        alt: '용스다이닝포차 인기 메뉴',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function MenuPage() {

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <Menu />
    </main>
  );
}