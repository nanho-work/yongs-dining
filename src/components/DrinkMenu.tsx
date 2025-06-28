'use client';

import Image from 'next/image';

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

type DrinkMenu = {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  badge?: string; // ← optional로 선언
};

const drinkMenus: DrinkMenu[] = [
  {
    title: '참이슬',
    description: '',
    price: '5,000원',
    image: '주류-참이슬.png',
    category: 'DRINK',
  },
  {
    title: '처음처럼',
    description: '',
    price: '5,000원',
    image: '주류-처음처럼.png',
    category: 'DRINK',
  },
  {
    title: '진로',
    description: '',
    price: '5,000원',
    image: '주류-진로.png',
    category: 'DRINK',
  },
  {
    title: '새로',
    description: '',
    price: '5,000원',
    image: '주류-새로.png',
    category: 'DRINK',
  },
  {
    title: '청하',
    description: '',
    price: '6,000원',
    image: '주류-청하.png',
    category: 'DRINK',
  },
  {
    title: '토닉워터',
    description: '',
    price: '2,000원',
    image: '주류-토닉워터.png',
    category: 'DRINK',
  },
  {
    title: '레몬 슬라이스',
    description: '',
    price: '2,000원',
    image: '주류-레몬슬라이스.png',
    category: 'DRINK',
  },
  {
    title: '음료',
    description: '',
    price: '2,000원',
    image: '주류-음료.png',
    category: 'DRINK',
  },
  {
    title: '위스키 하이볼',
    description: '(진저, 토닉 택 가능)',
    price: '8,000원',
    image: '주류-위스키하이볼.jpeg',
    category: 'HIGHBAILL',
  },
  {
    title: '카시스 하이볼',
    description: '블루베리가 들어있어 상큼한 하이볼',
    price: '8,500원',
    image: '주류-카시스하이볼.jpeg',
    category: 'HIGHBAILL',
  },
  {
    title: '매실 하이볼',
    description: '한식요리에 잘 어울리는 하이볼',
    price: '8,500원',
    image: '주류-매실하이볼.jpeg',
    category: 'HIGHBAILL',
  },
  {
    title: '파우스트',
    description: '칵테일 중 도수가 높은 악마 소환술',
    price: '10,000원',
    image: '주류-파우스트.png',
    category: 'HIGHBAILL',
  },
  {
    title: '카스',
    description: '',
    price: '5,000원',
    image: '주류-카스.png',
    category: 'BERR',
  },
  {
    title: '테라',
    description: '',
    price: '5,000원',
    image: '주류-테라.png',
    category: 'BERR',
  },
  {
    title: '호가든',
    description: '수제맥주입문자, 부드러운 맛',
    price: '6,000원',
    image: '주류-호가든.png',
    category: 'BERR',
  },
  {
    title: '파울라너 헤페',
    description: '독일맥주 중 밀과 과일의 깔끔함과 적당히 청량한 맛',
    price: '7,000원',
    image: '주류-파울라너헤페.png',
    category: 'BERR',
  },
  {
    title: '스텔라',
    description: '청량한 산미, 깔끔한 맛',
    price: '7,000원',
    image: '주류-스텔라.png',
    category: 'BERR',
  },
  {
    title: '코젤다크',
    description: '체코식 필스너, 부드럽고 균형 잡힌 맛',
    price: '8,000원',
    image: '주류-코젤다크.png',
    category: 'BERR',
    badge: 'BEST',
  },
  {
    title: '인디카 IPA',
    description: '미국식 하이 홉 찐한 IPA 스타일',
    price: '9,000원',
    image: '주류-인디카IPA.png',
    category: 'BERR',
    badge: 'BEST',
  },
  {
    title: '워터멜론 위트에일',
    description: '상큼한 수박향이 느껴지는 수제맥주',
    price: '9,000원',
    image: '주류-워터멜론위트에일.png',
    category: 'BERR',
    badge: 'HIT',
  },
  {
    title: '듀체스 드 브르고뉴',
    description: '벨기에 와인맥주, 산미와 풍부한 체리 향미',
    price: '33,000원 (750ml)',
    image: '주류-듀체스드브르고뉴.png',
    category: 'BERR',
    badge: '강추',
  },
];

export default function DrinkMenu() {
  const categories = ['DRINK', 'HIGHBAILL', 'BERR'];

  return (
    <div className="space-y-12">
      {categories.map((cat) => {
        const filtered = drinkMenus.filter((drink) => drink.category === cat);

        if (filtered.length === 0) return null;

        return (
          <div key={cat}>
            <h2 className="text-xl font-bold text-gray-700 border-b-2 border-red-300 mb-4 pb-1">
              {cat}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {filtered.map((drink, index) => (
                <div
                  key={index}
                  className="w-full h-[400px] rounded-md shadow-md flex items-center justify-center relative overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${prefix}/your-background.png)`, // 여기에 백그라운드 이미지 경로 넣기
                  }}
                >
                  <Image
                    src={`${prefix}/${drink.image}`}
                    alt={drink.title}
                    height={500} // ✅ 세로만 고정
                    width={0}
                    className="h-350 w-auto object-contain"
                  />

                  {/* 뱃지 */}
                  {typeof drink.badge === 'string' && drink.badge.trim() !== '' && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 z-30 shadow-md rounded">
                      {drink.badge}
                    </span>
                  )}

                  {/* 하단 설명 */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                    <h3 className="text-lg font-bold">{drink.title}</h3>
                    <p className="text-sm mt-1">{drink.description}</p>
                    <p className="text-base font-semibold mt-2">{drink.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}