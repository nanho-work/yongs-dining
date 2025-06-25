// src/app/page.tsx
import Image from 'next/image'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <section className="bg-white">
      {/* Hero */}
      <Hero />
      {/* 소개 섹션 */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">왜 용스다이닝포차인가요?</h2>
        <p className="text-gray-700 text-center text-lg mb-12">
          추억이 담긴 음악, 따뜻한 분위기, 그리고 정성 가득한 요리로 가득한 공간.<br />
          친구, 연인, 동료와 함께하기 딱 좋은 감성 포차입니다.
        </p>

        {/* 이미지 3장 소개 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image src="/party.jpg" alt="단체 술자리" width={400} height={300} className="rounded-lg" />
          <Image src="/tofu.jpg" alt="구운 두부 요리" width={400} height={300} className="rounded-lg" />
          <Image src="/menu-budae.jpg" alt="부대찌개" width={400} height={300} className="rounded-lg" />
        </div>
      </div>
    </section>
  )
}