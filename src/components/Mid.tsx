

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const imageData = [
  { src: '/목살갈비샐러드.jpeg', alt: '목살갈비샐러드' },
  { src: '/수제수육보쌈.jpeg', alt: '수제수육보쌈' },
  { src: '/얼큰두부짜글이.jpeg', alt: '얼큰두부짜글이' },
  { src: '/폭탄두부두르치기.jpeg', alt: '폭탄두부두르치기' },
  { src: '/한우두부전골.jpeg', alt: '한우두부전골' },
];

const MidSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-8 bg-white">
      <div className="relative w-[300px] h-[300px]">
        <Image
          src={imageData[index].src}
          alt={imageData[index].alt}
          fill
          className="rounded-xl object-cover transition-all duration-700"
          sizes="300px"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded-full animate-bounce shadow-md">
          BEST
        </div>
      </div>
    </div>
  );
};

export default MidSection;