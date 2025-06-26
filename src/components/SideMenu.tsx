// 📄 src/components/Menu.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

const menus = [
  {
    title: '호떡아이스크림',
    description: '호떡위에 아이스크림, 견과류, 시나몬파우더를 뿌려 달콤한맛!!',
    price: '9,000원',
    image: ['호떡아이스크림1.jpeg', '호떡아이스크림2.jpeg']
  },
  {
    title: '참치크래커',
    description: '참치크래커',
    price: '12,000원',
    image: '참치크래커.jpeg',
  },
  {
    title: '해장김치수제비',
    description: '고추장베이스에 신김치, 감자수제비, 계란을 풀어먹으면 해장되고 술을 다시 부르게 함',
    price: '10,000원',
    image: ['해장김치수제비1.jpeg', '해장김치수제비2.jpeg']
  },
  {
    title: '해장묵사발',
    description: '매콤한 동치미육수 후루룩 후루룩 도토리묵 속의 뻥 뚫려서 해장되는 메뉴',
    price: '9,000원',
    image: ['해장묵사발1.jpeg', '해장묵사발2.jpeg']
  },
  {
    title: '강원도빠삭먹태구이',
    description: '애주가라면 무조건 필수안주! 고성먹태를 빼삭하게 구워 용스의 매콤특제소스에...',
    price: '16,000원',
    image: ['강원도빠삭먹태구이1.jpeg', '강원도빠삭먹태구이2.jpeg']
  },
  {
    title: '멜론샤베트',
    description: '멜론과 코코아밀크 달콤하고 시원한맛',
    price: '9,000원',
    image: '멜론샤베트.jpeg',
  },
  {
    title: '맨하탄카나페',
    description: '크래커위에 크림치즈, 냉동블루베리, 꿀을 얹어 고소하고 상큼한맛',
    price: '10,000원',
    image: ['맨하탄카나페1.jpeg', '맨하탄카나페2.jpeg']
  },
  {
    title: '들기름두부구이',
    description: '수제모두부를 들기름으로 구워낸 고소한 맛',
    price: '8,000원',
    image: ['들기름두부구이1.jpeg', '들기름두부구이2.jpeg']
  },
  {
    title: '해장고사리라면',
    description: '한우육수에 고사리를 넣어 칼칼하고 얼큰해서 해장되는 라면',
    price: '7,000원',
    image: ['해장고사리라면1.jpeg', '해장고사리라면2.jpeg']
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