'use client'


import HeroCarousel from '@/components/HeroCarousel'

export default function Hero() {
  return (
    <section className="bg-white mt-10 sm:mt-16 py-12 sm:py-20 hero-font">
      <div className="max-w-6xl mx-auto text-left px-4">
        <p className="text-base sm:text-lg md:text-xl text-red-400 font-bold mb-3 sm:mb-6">
          용스 다이닝 포차
        </p>
        <p className="text-sm sm:text-base md:text-2xl text-gray-700 font-light pb-10 leading-relaxed">
          신선한 재료,<br />
          전문 쉐프의 요리로<br />
          잊지 못할 경험을 선사합니다.
        </p>
      </div>

      <HeroCarousel />
    </section>
  )
}