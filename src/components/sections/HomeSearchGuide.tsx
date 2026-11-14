import Link from 'next/link'
import { Headphones, Soup, UsersRound } from 'lucide-react'

const guides = [
  {
    icon: Soup,
    title: '수제두부가 중심인 모란 술집',
    description:
      '20년 경력 두부 장인이 만든 수제두부를 한우두부전골, 두부두루치기, 두부완자와 두부김치 등 다양한 한식 술안주로 선보입니다.',
  },
  {
    icon: Headphones,
    title: '모란역 혼술과 간술',
    description:
      '1인 바 좌석 3석과 혼술용 전골·두루치기 메뉴가 있어 혼자 방문해 음식과 술, 신청곡을 편하게 즐길 수 있습니다.',
  },
  {
    icon: UsersRound,
    title: '데이트와 2~4인 술자리',
    description:
      '모란역에서 도보 5~10분 거리의 9평 규모 다이닝포차로, 데이트와 소모임, 청첩장 모임, 단체 대관을 예약할 수 있습니다.',
  },
] as const

export default function HomeSearchGuide() {
  return (
    <section aria-labelledby="home-guide-title" className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">YONGS DINING GUIDE</p>
        <h2 id="home-guide-title" className="mt-2 break-keep text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
          모란역에서 두부요리에 반주 한 잔
        </h2>
        <p className="mt-4 break-keep text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
          용스다이닝은 성남 모란의 수제두부 요리 전문 한식 다이닝포차입니다. 든든한 저녁 식사부터 혼술,
          데이트, 2~4인 술자리까지 메뉴와 취향에 맞는 한 잔을 함께 추천합니다.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {guides.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-3xl border border-neutral-200 bg-white/85 p-6 shadow-sm">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
              <Icon size={21} aria-hidden />
            </span>
            <h3 className="mt-4 break-keep text-lg font-bold text-neutral-950">{title}</h3>
            <p className="mt-3 break-keep text-sm leading-7 text-neutral-600">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/menu/" className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700">
          두부요리 메뉴 보기
        </Link>
        <Link href="/location/" className="rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-700 transition-colors hover:bg-red-50">
          영업시간·주차 확인
        </Link>
      </div>
    </section>
  )
}
