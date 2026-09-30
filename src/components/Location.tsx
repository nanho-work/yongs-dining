import Image from 'next/image'
import {
  Car,
  ChefHat,
  Clock,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Sparkles,
  Users,
  Utensils,
  Wine,
} from 'lucide-react'
import { PARKING_OPTIONS, STORE_HOURS, STORE_INFO, STORE_LINKS } from '@/constants/store'

const RECOMMENDATIONS = [
  '두부요리를 제대로 먹고 싶을 때',
  '한식 안주에 반주하고 싶을 때',
  '혼술·간술',
  '2~4인 술자리',
  '데이트',
  '소모임',
  '단체 대관',
  '청첩장 모임',
] as const

const SIGNATURE_MENUS = [
  '한우두부전골',
  '300g 폭탄 두부두루치기',
  '수제두부완자',
  '편백두부보쌈 5합',
] as const

const SIDE_MENUS = [
  '누룽지오징어순대',
  '맨하탄 카나페',
  '꿀호떡 아이스크림',
] as const

export default function Location() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 py-4 sm:space-y-14 sm:py-6">
      <header className="overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-white/95 via-white/90 to-amber-50/90 p-5 shadow-sm sm:p-8">
        <p className="text-xs font-bold tracking-[0.16em] text-red-500 sm:text-sm">
          VISIT YONGS DINING
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 sm:text-5xl">
          용스다이닝
        </h1>
        <p className="mt-4 break-keep text-xl font-bold leading-8 text-neutral-900 sm:text-3xl sm:leading-10">
          <span className="block">두부요리에 반주 한 잔,</span>
          <span className="block">모란의 작은 감성포차</span>
        </p>
        <p className="mt-3 break-keep text-sm font-medium text-neutral-600 sm:text-base">
          9평 규모의 한식 다이닝포차 · 1인 운영
        </p>

        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <a
            href={`tel:${STORE_INFO.phoneHref}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
          >
            <Phone size={17} aria-hidden />
            전화하기
          </a>
          <a
            href={STORE_LINKS.map}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
          >
            <MapPin size={17} aria-hidden />
            길찾기
          </a>
          <a
            href={STORE_LINKS.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-100 px-4 py-3 text-sm font-semibold text-amber-950 transition-colors hover:bg-amber-200"
          >
            <MessageCircle size={17} aria-hidden />
            카카오 예약
          </a>
        </div>
      </header>

      <section aria-labelledby="visit-information-title" className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
        <h2 id="visit-information-title" className="sr-only">방문 정보</h2>
        <div className="relative overflow-hidden rounded-3xl border border-amber-100 bg-neutral-100 shadow-sm lg:sticky lg:top-28">
          <Image
            src="/location.webp"
            alt="용스다이닝 매장 입구"
            width={1600}
            height={1426}
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="aspect-[4/3] h-auto w-full object-cover lg:aspect-auto"
          />
        </div>

        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <section className="border-b border-neutral-100 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                <MapPin size={19} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-neutral-950">위치</h3>
                <p className="mt-2 break-keep text-sm leading-6 text-neutral-700 sm:text-base">
                  {STORE_INFO.address}
                </p>
                <p className="mt-1 text-sm font-semibold text-red-600">{STORE_INFO.neighborhood}</p>
              </div>
            </div>
          </section>

          <section className="border-b border-neutral-100 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-800">
                <Clock size={19} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-neutral-950">영업시간</h3>
                <dl className="mt-3 space-y-2">
                  {STORE_HOURS.business.map((item) => (
                    <div key={item.day} className="flex items-center justify-between gap-4 rounded-xl bg-neutral-50 px-3 py-2.5">
                      <dt className="font-semibold text-neutral-700">{item.day}</dt>
                      <dd className="font-semibold tabular-nums text-neutral-950">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section className="border-b border-neutral-100 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                <Phone size={19} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-neutral-950">연락처</h3>
                <a
                  href={`tel:${STORE_INFO.phoneHref}`}
                  className="mt-2 inline-block text-base font-bold text-red-600 hover:underline"
                >
                  {STORE_INFO.phone}
                </a>
              </div>
            </div>
          </section>

          <section className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-800">
                <Car size={19} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-neutral-950">주차</h3>
                <p className="mt-2 break-keep text-sm leading-6 text-neutral-700 sm:text-base">
                  {PARKING_OPTIONS.join(' / ')}
                </p>
                <p className="mt-2 break-keep text-xs leading-5 text-neutral-500 sm:text-sm">
                  50분 1,000원 / 추가 10분당 200원 / 최대 10,000원
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section aria-labelledby="recommend-title" className="rounded-3xl border border-red-100 bg-white/75 p-5 shadow-sm sm:p-7">
        <div className="flex items-center gap-2 text-red-600">
          <Sparkles size={19} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.16em]">RECOMMENDED FOR</p>
        </div>
        <h2 id="recommend-title" className="mt-2 break-keep text-2xl font-bold text-neutral-950 sm:text-3xl">
          이런 자리에 잘 어울려요
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {RECOMMENDATIONS.map((item) => (
            <span key={item} className="rounded-full border border-red-100 bg-red-50 px-3.5 py-2 text-sm font-semibold text-red-800">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="menu-guide-title">
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">FOOD GUIDE</p>
          <h2 id="menu-guide-title" className="mt-2 text-2xl font-bold text-neutral-950 sm:text-3xl">
            용스다이닝의 음식
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="rounded-3xl bg-gradient-to-br from-neutral-950 to-red-950 p-6 text-white shadow-sm sm:p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-red-200">
                <Utensils size={21} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-red-200">SIGNATURE</p>
                <h3 className="mt-1 text-xl font-bold">대표 메뉴</h3>
              </div>
            </div>
            <ul className="mt-6 divide-y divide-white/10">
              {SIGNATURE_MENUS.map((menu) => (
                <li key={menu} className="break-keep py-3 text-sm font-semibold sm:text-base">{menu}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-200 bg-gradient-to-br from-white to-amber-50 p-6 shadow-sm sm:p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                <Sparkles size={21} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-amber-800">SIDE MENU</p>
                <h3 className="mt-1 text-xl font-bold text-neutral-950">다양한 술안주</h3>
              </div>
            </div>
            <ul className="mt-6 divide-y divide-amber-200/70">
              {SIDE_MENUS.map((menu) => (
                <li key={menu} className="break-keep py-3 text-sm font-semibold text-neutral-800 sm:text-base">{menu}</li>
              ))}
            </ul>
            <p className="mt-5 break-keep text-sm leading-6 text-neutral-600">
              든든한 술안주부터 맥주와 가볍게 즐길 수 있는 사이드 메뉴까지 준비되어 있습니다.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="craft-title">
        <div className="mb-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">OUR STANDARD</p>
          <h2 id="craft-title" className="mt-2 text-2xl font-bold text-neutral-950 sm:text-3xl">
            맛을 만드는 기준
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
              <Users size={21} aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-bold text-neutral-950">두부</h3>
            <p className="mt-2 break-keep text-sm leading-6 text-neutral-600">
              20년 경력 두부 장인이 만든 수제두부
            </p>
          </article>

          <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
              <ChefHat size={21} aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-bold text-neutral-950">조리</h3>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-neutral-600">
              <li className="break-keep">수제 다대기 72시간 숙성</li>
              <li className="break-keep">한우를 85분간 푹 삶아 육수와 고명으로 사용</li>
              <li>주문 후 조리</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
              <Wine size={21} aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-bold text-neutral-950">주류</h3>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-neutral-600">
              <li>소주 7℃</li>
              <li>와인 13℃ 별도 온도 관리</li>
              <li className="break-keep">메뉴와 취향에 맞는 주류 추천</li>
            </ul>
          </article>
        </div>
      </section>

      <section aria-labelledby="space-title" className="overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950 p-6 text-white shadow-sm sm:p-8">
        <div className="flex items-center gap-2 text-red-200">
          <Music2 size={19} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.16em]">SPACE & MUSIC</p>
        </div>
        <h2 id="space-title" className="mt-3 break-keep text-2xl font-bold sm:text-3xl">
          음악이 흐르는 작은 다이닝포차
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 text-red-200">
              <Music2 size={18} aria-hidden />
              <h3 className="font-bold text-white">음악</h3>
            </div>
            <p className="mt-3 break-keep text-sm leading-7 text-white/75 sm:text-base">
              LP · CD · TAPE · 멜론 신청곡 가능
              <br />
              테이블당 3곡
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-red-200">
              <Users size={18} aria-hidden />
              <h3 className="font-bold text-white">좌석</h3>
            </div>
            <p className="mt-3 break-keep text-sm leading-7 text-white/75 sm:text-base">
              4인 테이블 2개 · 2인 테이블 3개
              <br />
              1인 바 좌석 3석
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
