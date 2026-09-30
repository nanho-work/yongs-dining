import Menu from '@/components/Menu'; // 선택사항
import type { Metadata } from 'next';
import { CORE_SEARCH_KEYWORDS, SITE_URL } from '@/constants/seo';


export const metadata: Metadata = {
  title: '모란 두부요리 맛집 | 한우두부전골·폭탄 두부두루치기',
  description: '모란역 용스다이닝의 한우두부전골, 300g 폭탄 두부두루치기, 수제두부완자와 다양한 한식 술안주 메뉴를 확인하세요.',
  keywords: [...CORE_SEARCH_KEYWORDS, '한우두부전골', '폭탄 두부두루치기', '수제두부완자', '모란 술안주'],
  alternates: {
    canonical: `${SITE_URL}/menu/`,
  },
  openGraph: {
    title: '모란 두부요리 맛집 | 용스다이닝 메뉴',
    description: '한우두부전골과 폭탄 두부두루치기 등 용스다이닝의 대표 메뉴를 소개합니다.',
    url: `${SITE_URL}/menu/`,
    siteName: '용스다이닝포차',
    images: [
      {
        url: '/social.png',
        width: 512,
        height: 512,
        alt: '용스다이닝포차 인기 메뉴',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function MenuPage() {
  return (
    <section className="pt-6 sm:pt-8 pb-14 sm:pb-16">
      <Menu />
    </section>
  );
}
