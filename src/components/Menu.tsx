import Image from 'next/image';
import { useState, useEffect } from 'react';
import MenuTabs from './MenuTabs';
import DrinkMenu from './DrinkMenu';

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMenus = selectedCategory === 'all'
    ? menus.filter((menu) => menu.category !== 'drink') // 드링크는 전체에서 제외
    : menus.filter((menu) => menu.category === selectedCategory);

  useEffect(() => {
    const hasSlider = menus.some(menu => Array.isArray(menu.image));
    if (!hasSlider) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-m text-gray-800 bg-blue-50 border-l-4 border-blue-400 p-3 rounded mb-6">
        <p>
          전메뉴 <span className="font-semibold">수제 양념장</span>으로<br />
          <span className="text-red-600 font-bold">주문과 동시에 조리되어</span> 다소 시간이 걸리더라도<br />
          <span className="text-blue-600 font-bold">인내를 갖고 기다려주세요~</span>
        </p>
      </div>

      {/* ✅ 탭바 */}
      <MenuTabs selected={selectedCategory} onSelect={setSelectedCategory} />
      {selectedCategory === 'side' && (
        <div className="text-sm text-gray-700 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded mb-4">
          <ul className="list-disc list-inside leading-relaxed">
            <li><span className="font-bold text-black">사이드메뉴는 본메뉴 주문시 가능</span></li>
            <li><span className="font-bold text-black">수입맥주, 크래프트비어, 하이볼, 프리미엄 막걸리 주문시 가능</span></li>
            <li><span className="font-bold text-black">평일 두가지 메뉴 이상 주문시 가능</span></li>
          </ul>
        </div>
      )}

      {/* ✅ 드링크는 별도 렌더링 */}
      {selectedCategory === 'drink' ? (
        <div className="mt-8">
          <DrinkMenu />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
          {filteredMenus.map((menu, index) => {
            const images = Array.isArray(menu.image) ? menu.image : [menu.image];
            const currentImage = images[activeIndex % images.length];

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white font-nanum-myeongjo"
              >
                <div className="relative w-[300px] h-[240px] overflow-hidden rounded-lg">
                  {/* ✅ 뱃지 */}
                  {menu.badge && (
                    <div className="absolute top-3 right-[-30px] bg-red-500 text-white text-xs font-bold px-10 py-1 rotate-45 shadow-md z-30 animate-blink">
                      {menu.badge}
                    </div>
                  )}

                  {images.map((src, i) => (
                    <Image
                      key={src}
                      src={`${prefix}/${src}`}
                      alt={`${menu.title}-${i}`}
                      fill
                      className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === activeIndex % images.length ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
                    />
                  ))}
                </div>

                <h3 className="text-base mt-4 font-bold">{menu.title}</h3>
                <p
                  className="text-sm text-gray-700 mt-2"
                  dangerouslySetInnerHTML={{ __html: menu.description }}
                />

                {menu.limited && (
                  <p className="text-xs text-gray-400 mt-1">※ 예약 및 한정판매 메뉴입니다</p>
                )}

                <p className="text-black font-semibold mt-2">{menu.price}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const menus = [
  // 메인 두부 요리 
  {
    title: '리얼 한우두부전골',
    description: '<strong>“최고의요리비결”</strong> 김인숙 셰프와 용스 콜라보 메뉴!<br/>직접 삶은 한우, 고소한 순두부, 모두부, 민물새우, 꽃게, <span class="text-red-600 font-bold">진하고 얼큰한맛!</span>',
    price: '28,000원 / 혼술 15,000원',
    image: ['리얼한우두부전골1.jpeg', '리얼한우두부전골2.jpeg'], // 중복 주의; 같은 이미지 두개 가능
    badge: ' Signature',
    category: 'main-tofu',
  },
  {
    title: '해장 두부전골',
    description: '황태,알배기,민물새우,꽃게 해장이 되는 <span style="color: #dc2626; font-weight: bold;">칼칼하고 시원한 맛!</span>',
    price: '28,000원 / 혼술 15,000원',
    image: ['해장두부전골1.jpeg', '해장두부전골2.jpeg'],
    category: 'main-tofu',
  },
  {
    title: '수제 두부보쌈',
    description: '<span style="color: #dc2626; font-weight: bold;">직접 삶은 오삼겹</span>, 수제짱아치, 무생채에 곁들여 먹는 메뉴, <span style="color: #dc2626; font-weight: bold;">반주할ㄷ때 딱!</span>',
    price: '30,000원',
    image: 'coming-soon.png',
    limited: true,
    category: 'main-tofu',
  },
  {
    title: '300g 폭탄 두부두루치기',
    description: '들기름으로 구운 두부, 우삼겹, 법과 술을 부르는 메뉴, <span style="color: #dc2626; font-weight: bold;">중독적인 맛!</span>',
    price: '28,000원 / 혼술 15,000원',
    image: '폭탄두부두루치기.jpeg',
    badge: 'BEST',
    category: 'main-tofu',
  },
  {
    title: '얼큰두부짜글이',
    description: '모두부, 스팸, 물만두, 감자를 짜글짜글 지져내어 <span style="color: #dc2626; font-weight: bold;">칼칼한 맛!</span>',
    price: '25,000원 / 혼술 15,000원',
    image: ['얼큰두부짜글이1.jpeg', '얼큰두부짜글이2.jpeg'],
    badge: 'HIT',
    category: 'main-tofu',
  },
  {
    title: '두부 스팸 프라이',
    description: '들기름 두부구이, 계란반숙, 스팸튀김의 <span style="color: #dc2626; font-weight: bold;">다양하게 먹는 삼합!</span>',
    price: '20,000원',
    image: '두부스팸프라이.jpeg',
    category: 'main-tofu',
  },
  {
    title: '수제 두부김치',
    description: '<span style="color: #dc2626; font-weight: bold;">두툼한 수제 모두부</span>, 우삼겹과 신김치를 볶아 곁들여 먹는 메뉴',
    price: '18,000원',
    image: ['통두부김치1.jpeg', '통두부김치2.jpeg'],
    category: 'main-tofu',
  },
  // 그외 메인 요리 -----------------------------------------------------------------------------
  {
    title: '부산 어묵탕',
    description: '다양한 어묵, 우동, 물떡, 꽃게를 넣어 <span style="color: #dc2626; font-weight: bold;">칼칼하고 시원한맛!</span>',
    price: '23,000원 / 혼술 15,000원',
    image: ['통두부어묵탕1.jpeg', '통두부어묵탕2.jpeg'],
    category: 'main-etc',
  },
  {
    title: '목살 갈비 샐러드(270g)',
    description: '"최고의요리비결" <span style="color: #dc2626; font-weight: bold;">신효섭셰프의 특제소스에</span> 불향, 새콤달콤 참나물 무침',
    price: '20,000원',
    image: ['목살갈비샐러드1.jpeg', '목살갈비샐러드2.jpeg'],
    category: 'main-etc',
  },
  {
    title: '목살갈비샐러드',
    description: '목살 380g+또띠아+소스',
    price: '20,000원',
    image: ['목살갈비샐러드1.jpeg', '목살갈비샐러드2.jpeg'],
    badge: 'BEST',
    category: 'main-etc',
  },
  {
    title: '홍콩눈꽃교자',
    description: '비비고 교자만두의 <span style="color: #dc2626; font-weight: bold;">겉바속촉촉, 그라다 파다뇨 치즈의 풍미</span> ',
    price: '15,000원',
    image: '홍콩눈꽃교자.jpeg',
    badge: 'HIT',
    category: 'main-etc',
  },
  {
    title: '대포항 누룽지 오징어순대',
    description: '오징어 순대를 바삭하게 구워 양배추 초무침에 곁들여 먹는 메뉴',
    price: '25,000원',
    image: ['대포항오징어누룽지순대1.jpeg', '대포항오징어누룽지순대2.jpeg', '대포항오징어누룽지순대3.jpeg'],
    category: 'main-etc',
  },
  {
    title: '강원도빠삭먹태구이',
    description: '애주가라면 무조건 필수안주! 고성먹태를 빼삭하게 구워 용스의 매콤특제소스에...',
    price: '16,000원',
    image: ['강원도빠삭먹태구이1.jpeg', '강원도빠삭먹태구이2.jpeg'],
    category: 'main-etc',
  },

  // 사이드 요리 -----------------------------------------------------------------------------

  {
    title: '꿀호떡 아이스크림',
    description: '호떡 바닐라아이스크림,시나몬파우더를 뿌려 달콤한맛!!(2 piece)',
    price: '9,000원',
    image: ['호떡아이스크림1.jpeg', '호떡아이스크림2.jpeg'],
    badge: 'BEST',
    category: 'side',
  }, 
  {
    title: '맨하탄카나페',
    description: '크래커위에 크림치즈, 냉동블루베리, 꿀을 얹어 고소하고 상큼한맛',
    price: '10,000원',
    image: ['맨하탄카나페1.jpeg', '맨하탄카나페2.jpeg'],
    category: 'side',
  },
  {
    title: '해장묵사발',
    description: '수제도토리묵에 살얼음 동동 육수',
    price: '9,000원',
    image: ['해장묵사발1.jpeg', '해장묵사발2.jpeg'],
    category: 'side',
  },
  
  {
    title: '들기름두부구이',
    description: '두부매니아라면 들기름에 구운 꼬수운 두부',
    price: '8,000원',
    image: ['들기름두부구이1.jpeg', '들기름두부구이2.jpeg'],
    category: 'side',
  },
];
