// 📄 src/components/Menu.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

const menus = [
  {
    title: '목살갈비샐러드',
    description: '스타셰프 신효섭셰프의 특제소스에 목살을 재워구워, 새콤달콤 참나물 샐러드와...',
    price: '20,000원',
    image: ['목살갈비샐러드1.jpeg', '목살갈비샐러드2.jpeg']
  },
  {
    title: '수제수육보쌈',
    description: '직접삶아 부드러운 수육을 수제두부와 무생채, 방풍나물장아찌와 곁들여먹는...',
    price: '30,000원',
    image: '수제수육보쌈.jpeg',
  },
  {
    title: '홍콩눈꽃교자',
    description: '비비고교자만두 겉바속촉촉, 그라다파다치즈의 풍미',
    price: '15,000원',
    image: '홍콩눈꽃교자.jpeg',
  },
  {
    title: '대포항오징어누룽지순대',
    description: '속초의 명물 오징어 누룽지순대를 바삭하게 눌러 고소해서 과일맥주 또는 막걸리와 좋음',
    price: '25,000원',
    image: ['대포항오징어누룽지순대1.jpeg', '대포항오징어누룽지순대2.jpeg', '대포항오징어누룽지순대3.jpeg']
  },
  {
    title: '강원도빠삭먹태구이',
    description: '애주가라면 무조건 필수안주! 고성먹태를 빼삭하게 구워 용스의 매콤특제소스에...',
    price: '16,000원',
    image: ['강원도빠삭먹태구이1.jpeg', '강원도빠삭먹태구이2.jpeg']
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