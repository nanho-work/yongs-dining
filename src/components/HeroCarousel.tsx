'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const prefix = ''

const images = [
  `${prefix}/main_doofu-리얼한우두부전골.png`,
  `${prefix}/side-맨하탄카나페.png`,
  `${prefix}/main_doofu-수제두부보쌈.jpeg`,
  `${prefix}/side-호떡아이스크림.png`,
]



export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative max-w-6xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mx-auto">
      {/* 이미지들 */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <Image
            src={src}
            alt={`hero ${i + 1}`}
            fill
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* 👇 이미지 위에 표시될 문구 영역 */}
      <div className="absolute inset-0 z-20 flex items-start justify-start px-6 sm:px-10 pt-10 sm:pt-16">
        <div className="text-white drop-shadow-lg">
          <p className="text-2xl sm:text-xl md:text-2xl text-red-600 font-extrabold mb-2 drop-shadow-[0_0_4px_white]">
            용스 다이닝 포차
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white-600 font-extrabold mb-2 drop-shadow-[0_0_4px_red]">
            신선한 재료,<br />
            전문 쉐프의 요리로<br />
            잊지 못할 경험을 선사합니다.
          </p>
        </div>
      </div>

      {/* 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-red-500 scale-110' : 'bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  )
}