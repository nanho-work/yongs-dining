// src/app/page.tsx
import Hero from '@/components/Hero'
import Mid from '@/components/Mid'

export default function Home() {
  return (
    <section className="bg-white">
      {/* Hero */}
      <Hero />
      {/* 소개 섹션 */}
      <div className="max-w-5xl mx-auto px-4 py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          용스다이닝
        </h2>
        <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed mb-12 whitespace-pre-line">
          {`세계 최초의 두부 요리 술집입니다.

            두부를 좋아하지 않는 분들도 
            반할 만큼 특별한 맛을 선사합니다.

            소주, 맥주는 기본!

            크래프트비어, 수입맥주, 전통주, 하이볼 등 
            다양한 주류 완비

            스타 셰프와의 콜라보 메뉴 & 
            달라지는 데일리 메뉴, 계절메뉴

            모란 최고의 안주 맛집!

            어디에서도 맛볼 수 없는 
            독창적인 메뉴를 경험하세요.

            1인 셰프가 운영하는 아늑한 공간에서 
            따뜻한 요리, 좋은 음악, 그리고 
            술 한잔이 위안을 선사합니다.

            좌석이 협소하므로 방문 시 
            4인 이상은 미리 문의 부탁드립니다.

            낮 모임 및 대관 가능!
            간술, 혼술 모두 환영!

            우연히 들렀다가 단골이 되는 곳, 
            모란 유일의 빈티지 
            한식 다이닝 포차에서 특별한 시간을 보내세요.`}
        </p>
      </div>
      <Mid />
    </section>
  )
}