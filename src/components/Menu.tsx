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
    title: '호떡아이스크림',
    description: '호떡위에 아이스크림, 견과류, 시나몬파우더를 뿌려 달콤한맛!!',
    price: '9,000원',
    image: ['호떡아이스크림1.jpeg', '호떡아이스크림2.jpeg']
  },
  {
    title: '대포항오징어누룽지순대',
    description: '속초의 명물 오징어 누룽지순대를 바삭하게 눌러 고소해서 과일맥주 또는 막걸리와 좋음',
    price: '25,000원',
    image: ['대포항오징어누룽지순대1.jpeg', '대포항오징어누룽지순대2.jpeg', '대포항오징어누룽지순대3.jpeg']
  },
  {
    title: '두부스팸프라이',
    description: '들기름두부구이, 스팸튀김, 계란후라이의 삼합',
    price: '20,000원',
    image: '두부스팸프라이.jpeg',
  },
  {
    title: '참치크래커',
    description: '참치크래커',
    price: '12,000원',
    image: '참치크래커.jpeg',
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