'use client';

import Image from 'next/image';

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

const imageData = [
  { src: `${prefix}/목살갈비샐러드1.jpeg`, alt: '목살갈비샐러드' },
  { src: `${prefix}/수제수육보쌈.jpeg`, alt: '수제수육보쌈' },
  { src: `${prefix}/얼큰두부짜글이1.jpeg`, alt: '얼큰두부짜글이' },
  { src: `${prefix}/폭탄두부두루치기.jpeg`, alt: '폭탄두부두르치기' },
  { src: `${prefix}/리얼한우두부전골1.jpeg`, alt: '한우두부전골' },
  { src: `${prefix}/홍콩눈꽃교자.jpeg`, alt: '홍콩눈꽃교자' },
  { src: `${prefix}/대포항오징어누룽지순대1.jpeg`, alt: '대포항오징어누룽지순대' },
];

const MidSection = () => {
  const duplicatedImages = [...imageData, ...imageData]; // For seamless infinite scroll

  return (
    <div className="max-w-7xl overflow-hidden bg-white py-8 mx-auto">
      <div className="flex animate-slide-loop w-max">
        {duplicatedImages.map((item, i) => (
          <div key={i} className="relative w-[200px] h-[200px] m-2 flex-shrink-0">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="rounded-xl object-cover"
              sizes="200px"
            />
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded-full animate-bounce shadow-md">
              BEST
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;