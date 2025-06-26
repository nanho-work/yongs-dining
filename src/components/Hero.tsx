'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

const images = [
  `${prefix}/home1.png`,
  `${prefix}/home2.png`,
  `${prefix}/home3.png`,
  `${prefix}/home4.png`,
  `${prefix}/home5.png`
];

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000) // 5초마다 전환

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden -mt-16">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`배경 ${i + 1}`}
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
          priority={i === 0}
        />
      ))}

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* text overlay */}
    </div>
  )
}
