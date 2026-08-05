import Image from 'next/image'
import {
  Armchair,
  CarFront,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import { PARKING_OPTIONS, STORE_HOURS, STORE_INFO, STORE_LINKS } from '@/constants/store'

export default function Location() {
  return (
    <div className="mx-auto max-w-6xl py-2 sm:py-4">
      <header className="ink-panel relative mb-10 overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-2 top-2 h-36 w-36 rounded-full border border-white/10"
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div>
            <p className="editorial-kicker !text-red-300">Visit Yongs Dining</p>
            <h1 className="font-display mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              모란의 밤,
              <br />
              용스에서 만나요
            </h1>
            <p className="mt-5 max-w-xl break-keep text-sm leading-7 text-stone-300 sm:text-base">
              모란역에서 천천히 걸어 5분. 붉은 간판과 따뜻한 불빛을 따라오시면
              셰프의 두부요리와 술 한잔이 기다리고 있습니다.
            </p>
          </div>

          <div className="hidden gap-2 lg:grid">
            <a
              href={STORE_LINKS.map}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--lacquer)] px-4 text-sm font-bold text-white transition-colors hover:bg-[var(--lacquer-dark)]"
            >
              <Navigation size={17} aria-hidden />
              지도에서 길찾기
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${STORE_INFO.phoneHref}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/20 bg-white/5 px-3 text-xs font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone size={15} aria-hidden />
                전화 문의
              </a>
              <a
                href={STORE_LINKS.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-amber-300/50 bg-amber-300/10 px-3 text-xs font-bold text-amber-100 transition-colors hover:bg-amber-300/20"
              >
                <MessageCircle size={15} aria-hidden />
                카카오 예약
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)] lg:items-start">
        <div className="lg:sticky lg:top-[calc(var(--site-header-height)+2rem)]">
          <figure className="image-ink-frame relative overflow-hidden bg-[var(--ink)]">
            <Image
              src="/location.jpeg"
              alt="붉은 간판이 보이는 용스다이닝포차 매장 외관"
              width={3574}
              height={3186}
              priority
              sizes="(min-width: 1280px) 610px, (min-width: 1024px) 52vw, calc(100vw - 32px)"
              className="aspect-[5/4] h-auto w-full object-cover md:aspect-[16/9] lg:aspect-[5/4]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pb-5 pt-14 text-white">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-200">
                  Moran · Seongnam
                </p>
                <p className="font-display mt-1 text-xl font-black">붉은 용스 간판을 찾아주세요</p>
              </div>
              <span className="stamp-badge !border-white/70 !text-white">도보 5분</span>
            </figcaption>
          </figure>

          <a
            href={STORE_LINKS.map}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-14 items-center justify-between border-y border-[var(--ink)] px-1 text-sm font-bold text-[var(--ink)] transition-colors hover:text-[var(--lacquer)]"
          >
            <span className="flex items-center gap-2">
              <MapPin size={18} aria-hidden />
              {STORE_INFO.address}
            </span>
            <Navigation size={18} aria-hidden />
          </a>
        </div>

        <div className="space-y-6">
          <section className="paper-panel p-5 sm:p-7" aria-labelledby="location-hours-title">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-5">
              <div>
                <p className="editorial-kicker">Opening hours</p>
                <h2
                  id="location-hours-title"
                  className="font-display mt-2 text-3xl font-black text-[var(--ink)]"
                >
                  영업시간
                </h2>
              </div>
              <Clock3 className="text-[var(--lacquer)]" size={25} aria-hidden />
            </div>

            <dl className="mt-5 divide-y divide-[var(--line)]">
              {STORE_HOURS.business.map((item) => (
                <div key={item.day} className="flex items-center justify-between py-3.5">
                  <dt className="font-bold text-[var(--ink-soft)]">{item.day}</dt>
                  <dd className="font-mono text-base font-black text-[var(--ink)]">{item.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 break-keep text-xs leading-5 text-[var(--ink-soft)]">
              ※ {STORE_HOURS.note}
            </p>

            <div className="mt-6 border-l-4 border-[var(--lacquer)] bg-[#f3dfcf] px-4 py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--lacquer)]">
                Lunch special
              </p>
              {STORE_HOURS.lunch.map((item) => (
                <div key={item.day} className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-display text-lg font-black">{item.day}</span>
                  <span className="font-mono font-black">{item.hours}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="border-y border-[var(--ink)] py-1" aria-labelledby="location-info-title">
            <h2 id="location-info-title" className="sr-only">
              방문 편의 정보
            </h2>

            <div className="grid gap-0 sm:grid-cols-2">
              <article className="border-b border-[var(--line)] px-1 py-5 sm:border-b-0 sm:border-r sm:pr-5">
                <CarFront size={21} className="text-[var(--lacquer)]" aria-hidden />
                <h3 className="font-display mt-3 text-xl font-black">주차 안내</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--ink-soft)]">
                  {PARKING_OPTIONS.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] leading-5 text-[var(--ink-soft)]">
                  50분 1,000원 · 추가 10분당 200원 · 최대 10,000원
                </p>
              </article>

              <article className="px-1 py-5 sm:pl-5">
                <Armchair size={21} className="text-[var(--lacquer)]" aria-hidden />
                <h3 className="font-display mt-3 text-xl font-black">좌석과 문의</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{STORE_INFO.seats}</p>
                <a
                  href={`tel:${STORE_INFO.phoneHref}`}
                  className="mt-4 inline-flex items-center gap-2 text-base font-black text-[var(--lacquer)] hover:underline"
                >
                  <Phone size={16} aria-hidden />
                  {STORE_INFO.phone}
                </a>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
