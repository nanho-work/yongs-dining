'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : ''

const images = [
  `${prefix}/home1.png`,
  `${prefix}/home2.png`,
  `${prefix}/home3.png`,
  `${prefix}/home4.png`,
  `${prefix}/home5.png`,
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden -mt-16">
      {/* 배경 이미지들 */}
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`배경 ${i + 1}`}
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          priority={i === 0}
        />
      ))}

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* 스크롤 유도 애니메이션 */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center relative">
          <div className="w-1 h-1 bg-white rounded-full absolute animate-scrollDot" />
        </div>
        <div className="flex flex-col items-center text-white text-2xl leading-tight animate-bounce">
          <Image
            src={`${prefix}/arrow-white.png`}
            alt="스크롤 유도 화살표"
            width={24}
            height={24}
            className="animate-bounce"
          />
        </div>
      </div>

      {/* 인디케이터 점 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index ? 'bg-red-500 scale-110' : 'bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  )
}