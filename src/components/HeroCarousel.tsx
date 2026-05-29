'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAutoCarousel } from '@/hooks/useAutoCarousel'

const images = [
  '/main_doofu-리얼한우두부전골.png',
  '/side-manhattan-canape.png',
  '/main_doofu-수제두부보쌈.jpeg',
  '/side-hotteok-icecream.png',
]

export default function HeroCarousel() {
  const { index } = useAutoCarousel({ length: images.length, interval: 4000 })

  return (
    <div className="relative max-w-6xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mx-auto">
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

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/55 via-black/25 to-black/5" />

      <div className="absolute inset-0 z-30 flex items-start justify-start px-6 sm:px-10 pt-10 sm:pt-16">
        <div className="max-w-md text-white drop-shadow-lg">
          <p className="text-xl sm:text-2xl md:text-3xl text-red-300 font-extrabold mb-2">
            용스 다이닝 포차
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-white font-extrabold mb-4 leading-snug">
            신선한 재료,<br />
            전문 셰프의 요리로<br />
            잊지 못할 경험을 선사합니다.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/menu"
              className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
            >
              메뉴 보기
            </Link>
            <Link
              href="/location"
              className="rounded-full border border-white/70 bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/25"
            >
              오시는 길
            </Link>
          </div>
        </div>
      </div>

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
