// src/app/page.tsx
import Hero from '@/components/Hero'
import Mid from '@/components/Mid'

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
      </div>
      <Mid />
    </section>
  )
}