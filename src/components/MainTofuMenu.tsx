// 📄 src/components/Menu.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

const menus = [
  {
    title: '리얼한우두부전골',
    description: '리얼한우, 수제손두부, 모두부, <br/> 민물새우, 꽃게 고추기름의 풍미로 얼큰한맛',
    price: '28,000원',
    image: ['리얼한우두부전골1.jpeg', '리얼한우두부전골2.jpeg'] // 중복 주의; 같은 이미지 두개 가능
  },
  {
    title: '300g폭탄두부두루치기',
    description: '들기름으로 구운 모두부에 우삼겹 수제양념장을 넣어 조린 중독적인맛',
    price: '28,000원',
    image: '폭탄두부두루치기.jpeg',
  },
  {
    title: '얼큰두부짜글이',
    description: '수제두부, 스팸, 감자, 물만두, 야채에 특제소스를 넣고 짜글짜글 지져내어 매콤함',
    price: '25,000원',
    image: ['얼큰두부짜글이1.jpeg', '얼큰두부짜글이2.jpeg']
  },
  {
    title: '두부스팸프라이',
    description: '들기름두부구이, 스팸튀김, 계란후라이의 삼합',
    price: '20,000원',
    image: '두부스팸프라이.jpeg',
  },
  {
    title: '해장두부전골',
    description: '수제모두부, 통태, 알배기, 민물새우, 꽃게, 각종야채가 들어있어 해장하기좋고 시원함',
    price: '28,000원',
    image: ['해장두부전골1.jpeg', '해장두부전골2.jpeg']
  },
  {
    title: '통두부김치',
    description: '신김치와 돼지고기 앞다리살을 볶아 치즈보다 고소운 따끈한 수제모두부와 곁들임',
    price: '18,000원',
    image: ['통두부김치1.jpeg', '통두부김치2.jpeg']
  },
  {
    title: '통두부어묵탕',
    description: '얼린두부, 부산어묵, 묵은김, 삶은계란, 꽃게 시원하고 칼칼한맛',
    price: '23,000원',
    image: ['통두부어묵탕1.jpeg', '통두부어묵탕2.jpeg']
  },
  {
    title: '들기름두부구이',
    description: '수제모두부를 들기름으로 구워낸 고소한 맛',
    price: '8,000원',
    image: ['들기름두부구이1.jpeg', '들기름두부구이2.jpeg']
  },
];


export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 단 하나라도 여러 장의 이미지가 있는 메뉴가 있을 경우만 슬라이드 동작
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menus.map((menu, index) => {
          const images = Array.isArray(menu.image) ? menu.image : [menu.image];
          const currentImage = images[activeIndex % images.length];

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white font-nanum-myeongjo"
            >
              <div className="relative w-[220px] h-[220px] overflow-hidden rounded-lg">
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
              <p className="text-black font-semibold mt-2">{menu.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}