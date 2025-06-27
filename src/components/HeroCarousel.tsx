'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : ''

const images = [
  `${prefix}/리얼한우두부전골.png`,
  `${prefix}/맨하탄카나페.png`,
  `${prefix}/수제수육보쌈.jpeg`,
  `${prefix}/호떡아이스크림.jpeg`,
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
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
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

      {/* 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-red-500 scale-110' : 'bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}