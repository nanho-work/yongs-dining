'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = ['/home1.png', '/home2.png', '/home3.png', '/home4.png', '/home5.png']
const directions = ['translate-x-full', '-translate-x-full', 'translate-y-full', '-translate-y-full', 'scale-125']

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
          className={`object-cover absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === index
              ? 'opacity-100 z-20 translate-x-0 scale-100'
              : `opacity-0 z-10 ${directions[i % directions.length]}`
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
