import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { STORE_HOURS, STORE_INFO, STORE_LINKS } from '@/constants/store'

const footerActionClass =
  'inline-flex min-h-11 items-center justify-between gap-3 rounded-sm border px-3.5 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a75f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181411]'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#d09a50]/45 bg-[#181411] px-5 pt-14 pb-[calc(8.5rem+env(safe-area-inset-bottom))] text-[#f1e1c9] sm:px-6 lg:pb-10">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#7f1f1a_0%,#b3352b_36%,#d8a75f_50%,#b3352b_64%,#7f1f1a_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #f1e1c9 0.8px, transparent 0.8px)',
          backgroundSize: '5px 5px',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d5a158]">
          <span aria-hidden className="h-px flex-1 border-t border-dashed border-[#d5a158]/35" />
          <span>Good food · Good music · Good night</span>
          <span aria-hidden className="h-px flex-1 border-t border-dashed border-[#d5a158]/35" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_1fr] lg:gap-12">
          <section aria-labelledby="footer-brand-title">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#d5a158]">
              Moran · Dining Pocha
            </p>
            <h2 id="footer-brand-title" className="sr-only">
              {STORE_INFO.name}
            </h2>
            <Link
              href="/"
              className="mt-4 inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a75f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181411]"
              aria-label={`${STORE_INFO.name} 홈으로 이동`}
            >
              <Image
                src="/logo.png"
                alt=""
                width={998}
                height={542}
                sizes="168px"
                className="h-auto w-[168px]"
              />
            </Link>
            <p className="mt-5 max-w-sm break-keep text-lg font-bold leading-8 text-[#fff6e8]">
              {STORE_INFO.tagline},
              <br />
              모란에서 오래 머물고 싶은 한 끼.
            </p>
            <p className="mt-4 max-w-md break-keep text-sm leading-6 text-[#f1e1c9]/68">
              {STORE_INFO.description}
            </p>

            <address className="mt-6 space-y-3 border-l-2 border-[#a92e26] pl-4 text-sm not-italic">
              <a
                href={STORE_LINKS.map}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-start gap-2.5 text-[#f1e1c9]/82 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a75f]"
                aria-label={`${STORE_INFO.address}, 지도에서 길찾기`}
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#d5a158]" aria-hidden />
                <span>{STORE_INFO.address}</span>
              </a>
              <a
                href={`tel:${STORE_INFO.phoneHref}`}
                className="flex w-fit items-center gap-2.5 text-[#f1e1c9]/82 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a75f]"
                aria-label={`${STORE_INFO.phone}로 전화하기`}
              >
                <Phone size={16} className="text-[#d5a158]" aria-hidden />
                {STORE_INFO.phone}
              </a>
            </address>
          </section>

          <section aria-labelledby="footer-hours-title">
            <div className="flex items-center justify-between border-b border-dashed border-[#d5a158]/35 pb-3">
              <h2
                id="footer-hours-title"
                className="text-xs font-black uppercase tracking-[0.2em] text-[#fff4e2]"
              >
                Opening hours
              </h2>
              <span aria-hidden className="text-[10px] tracking-[0.16em] text-[#d5a158]">
                夜
              </span>
            </div>

            <dl className="divide-y divide-dashed divide-[#f1e1c9]/15">
              {STORE_HOURS.business.map((item) => (
                <div key={item.day} className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-sm font-semibold text-[#f1e1c9]/68">{item.day}</dt>
                  <dd className="text-sm font-bold tabular-nums text-[#fff8eb]">{item.hours}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 border border-[#d5a158]/30 bg-[#d5a158]/[0.08] p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d5a158]">
                Lunch special
              </p>
              {STORE_HOURS.lunch.map((item) => (
                <div key={item.day} className="mt-2 flex flex-wrap justify-between gap-2 text-sm">
                  <span className="font-semibold text-[#f1e1c9]/72">{item.day}</span>
                  <span className="font-bold tabular-nums text-[#fff8eb]">{item.hours}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 break-keep text-xs leading-5 text-[#f1e1c9]/62">
              ※ {STORE_HOURS.note}
            </p>
          </section>

          <section aria-labelledby="footer-plan-title">
            <div className="border-b border-dashed border-[#d5a158]/35 pb-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5a158]">
                Plan your night
              </p>
              <h2 id="footer-plan-title" className="font-display mt-2 text-xl font-black text-[#fff7e9]">
                오늘 밤, 용스에서 만나요.
              </h2>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <a
                href={STORE_LINKS.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerActionClass} col-span-2 border-[#d9a75f]/35 bg-[#a92e26] text-[#fff9ed] shadow-[3px_3px_0_rgba(216,167,95,0.22)] hover:bg-[#bd382e]`}
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle size={17} aria-hidden />
                  카카오 예약
                </span>
                <ArrowUpRight size={16} aria-hidden />
              </a>
              <a
                href={STORE_LINKS.map}
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerActionClass} border-[#f1e1c9]/25 bg-[#f1e1c9]/[0.06] text-[#f8ead4] hover:bg-[#f1e1c9]/[0.12]`}
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} aria-hidden />
                  길찾기
                </span>
                <ArrowUpRight size={15} aria-hidden />
              </a>
              <a
                href={STORE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerActionClass} border-[#f1e1c9]/25 bg-[#f1e1c9]/[0.06] text-[#f8ead4] hover:bg-[#f1e1c9]/[0.12]`}
              >
                <span className="inline-flex items-center gap-2">
                  <Instagram size={16} aria-hidden />
                  소식
                </span>
                <ArrowUpRight size={15} aria-hidden />
              </a>
            </div>

            <a
              href={STORE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#dcb26f] transition-colors hover:text-[#ffe1ae] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a75f]"
              aria-label="용스다이닝포차 인스타그램 열기"
            >
              <Instagram size={15} aria-hidden />
              @yongs_dining_official
            </a>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-dashed border-[#d5a158]/30 pt-5 text-[11px] tracking-[0.06em] text-[#f1e1c9]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} YONG&apos;S DINING POCHA</p>
          <p>
            Website by{' '}
            <a
              href="https://laoncode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f1e1c9]/65 underline decoration-[#d5a158]/50 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a75f]"
            >
              LaonCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
