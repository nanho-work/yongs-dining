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
    category: 'BEER',
  },
  {
    title: '테라',
    description: '',
    price: '5,000원',
    image: '주류-테라.png',
    category: 'BEER',
  },
  {
    title: '호가든',
    description: '수제맥주입문자, 부드러운 맛',
    price: '6,000원',
    image: '주류-호가든.png',
    category: 'BEER',
  },
  {
    title: '파울라너 헤페',
    description: '독일맥주 중 밀과 과일의 깔끔함과 적당히 청량한 맛',
    price: '7,000원',
    image: '주류-파울라너헤페.png',
    category: 'BEER',
  },
  {
    title: '스텔라',
    description: '청량한 산미, 깔끔한 맛',
    price: '7,000원',
    image: '주류-스텔라.png',
    category: 'BEER',
  },
  {
    title: '코젤다크',
    description: '체코식 필스너, 부드럽고 균형 잡힌 맛',
    price: '8,000원',
    image: '주류-코젤다크.png',
    category: 'BEER',
    badge: 'BEST',
  },
  {
    title: '인디카 IPA',
    description: '미국식 하이 홉 찐한 IPA 스타일',
    price: '9,000원',
    image: '주류-인디카IPA.png',
    category: 'BEER',
    badge: 'BEST',
  },
  {
    title: '워터멜론 위트에일',
    description: '상큼한 수박향이 느껴지는 수제맥주',
    price: '9,000원',
    image: '주류-워터멜론위트에일.png',
    category: 'BEER',
    badge: 'HIT',
  },
  {
    title: '듀체스 드 브르고뉴',
    description: '벨기에 와인맥주, 산미와 풍부한 체리 향미',
    price: '33,000원 (750ml)',
    image: '주류-듀체스드브르고뉴.png',
    category: 'BEER',
    badge: '강추',
  },
  {
    title: '델리리움 레드',
    description: '벨기에 프룻비어, 새콤달콤한 체리향과 쌉싸름함',
    price: '10,000원 (330ml)',
    image: '주류-델리리움레드.png',
    category: 'BEER',
    badge: '여름 강추',
  },
  {
    title: '뭉스카페',
    description: '수도원 맥주, 상큼한 산미와 달콤함',
    price: '30,000원 (750ml)',
    image: '주류-뭉스카페.png',
    category: 'BEER',
    badge: '',
  },
  {
    title: '라트라페 쿼드루펠',
    description: '풍부하고 화려한 풍미, 높은 도수에도 부드러움',
    price: '10,000원 (330ml)',
    image: '주류-라트라페쿼드루펠.png',
    category: 'BEER',
    badge: 'HIT',
  },
  {
    title: '라트라페 쿼드루펠',
    description: '풍부하고 화려한 풍미, 높은 도수에도 부드러움',
    price: '30,000원 (750ml)',
    image: '주류-라트라페쿼드루펠.png',
    category: 'BEER',
    badge: '',
  },
  {
    title: '델리리움 크리스마스 맥주',
    description: '캐러멜, 체리, 감초의 복합적인 풍미',
    price: '10,000원 (330ml)',
    image: '주류-델리리움크리스마스.png',
    category: 'BEER',
    badge: '인기',
  },
  {
    title: '델리리움 크리스마스 맥주',
    description: '캐러멜, 체리, 감초의 복합적인 풍미',
    price: '30,000원 (750ml)',
    image: '주류-델리리움크리스마스.png',
    category: 'BEER',
    badge: '',
  },
  {
    title: '옛날 동동주',
    description: '나주 전통 막걸리, 쌀알이 동동, 자연스러운 천연탄산',
    price: '6,000원 (750ml)',
    image: '막걸리-옛날동동주.png',
    category: '전통주',
    badge: '',
  },
  {
    title: '허니버터아몬드주',
    description: '고소한 아몬드와 허니버터의 달콤함',
    price: '6,000원 (750ml)',
    image: '막걸리-허니버터아몬드주.png',
    category: '전통주',
    badge: '',
  },
  {
    title: '부자 프리미엄 막걸리',
    description: '식이섬유가 다량 함유된 건강 막걸리, 외국인에게 인기',
    price: '8,000원 (375ml)',
    image: '막걸리-부자프리미엄막걸리.png',
    category: '전통주',
    badge: '',
  },
  {
    title: '우곡생주 프리미엄 막걸리',
    description: '쌀고유의 맛과 바디감, 적은 양조미',
    price: '15,000원 (750ml)',
    image: '막걸리-우곡생주프리미엄막걸리.png',
    category: '전통주',
    badge: 'BEST',
  },
  {
    title: '세번빛은 살맛나네 막걸리',
    description: '딥한 맛과 요거트 같은 부드러움, 목넘김 좋음',
    price: '9,000원 (750ml)',
    image: '막걸리-살맛나네 막걸리.png',
    category: '전통주',
    badge: 'HIT',
  },
  {
    title: '너도바질 스파클링 막걸리',
    description: '향긋한 바질 향, 탄산 있는 찐막 스파클링 막걸리',
    price: '13,000원 (375ml)',
    image: '막걸리-너도바질스파클링막걸리.png',
    category: '전통주',
    badge: 'HIT',
  },
  {
    title: '화비',
    description: '창쌀 / 누룩제이 / 구죽향',
    price: '11,000원 (6.5도)',
    image: '막걸리-화비.png',
    category: '전통주',
    badge: 'NEW',
  },
  {
    title: '인더베럴',
    description: '해피보이',
    price: '13,000원 (10도) / 18,000원 (12도)',
    image: '막걸리-인더베럴.png',
    category: '전통주',
    badge: 'NEW',
  }
];

export default function DrinkMenu() {
  const categories = ['DRINK', 'HIGHBAILL', 'BEER','전통주'];

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
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {filtered.map((drink, index) => (
                <div
                  key={index}
                  className="w-full h-[400px] rounded-md shadow-md flex items-center justify-center relative overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${prefix}/background1.png)`, // 여기에 백그라운드 이미지 경로 넣기
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
                  <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white p-4 h-[140px] overflow-y-auto">
                    <h3 className="text-base font-bold">{drink.title}</h3>
                    <p className="text-sm mt-1">{drink.description}</p>
                    <p className="text-sm font-semibold mt-1">{drink.price}</p>
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