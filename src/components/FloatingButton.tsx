'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, CalendarCheck, Instagram, MapPin, Phone } from 'lucide-react'
import { STORE_INFO, STORE_LINKS } from '@/constants/store'

const FloatingButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 480)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      <nav
        aria-label="빠른 메뉴"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 lg:hidden"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <div className="pointer-events-auto relative mx-auto max-w-md rounded-sm border border-[#d9a75f]/55 bg-[#181411] p-1 shadow-[5px_7px_0_rgba(91,31,25,0.28),0_16px_40px_rgba(24,20,17,0.34)]">
          <div
            aria-hidden
            className="absolute inset-x-2 top-1 border-t border-dashed border-[#d9a75f]/25"
          />
          <div className="grid h-[58px] grid-cols-3 divide-x divide-dashed divide-[#d9a75f]/30">
            <a
              href={`tel:${STORE_INFO.phoneHref}`}
              aria-label={`${STORE_INFO.phone}로 전화하기`}
              className="flex min-w-0 flex-col items-center justify-center gap-1 text-[11px] font-bold tracking-[0.04em] text-[#f4e4ca] transition-colors hover:bg-[#f4e4ca]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d9a75f]"
            >
              <Phone size={18} strokeWidth={1.8} className="text-[#d9a75f]" aria-hidden />
              <span>전화</span>
            </a>
            <a
              href={STORE_LINKS.reservation}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오 예약 페이지 열기"
              className="relative -my-1 flex min-w-0 flex-col items-center justify-center gap-1 bg-[#a92e26] text-[11px] font-black tracking-[0.04em] text-[#fff8eb] transition-colors hover:bg-[#bd382e] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#f4d39a]"
            >
              <CalendarCheck size={19} strokeWidth={1.9} aria-hidden />
              <span>예약</span>
            </a>
            <a
              href={STORE_LINKS.map}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="지도에서 용스다이닝포차 길찾기"
              className="flex min-w-0 flex-col items-center justify-center gap-1 text-[11px] font-bold tracking-[0.04em] text-[#f4e4ca] transition-colors hover:bg-[#f4e4ca]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d9a75f]"
            >
              <MapPin size={18} strokeWidth={1.8} className="text-[#d9a75f]" aria-hidden />
              <span>길찾기</span>
            </a>
          </div>
        </div>
      </nav>

      <aside
        aria-label="빠른 링크"
        className="fixed bottom-7 right-2 z-50 hidden w-28 overflow-hidden rounded-sm border border-[#d9a75f]/50 bg-[#181411]/[0.97] text-[#f4e4ca] shadow-[5px_7px_0_rgba(91,31,25,0.24),0_16px_36px_rgba(24,20,17,0.24)] backdrop-blur-md 2xl:block"
      >
        <div className="flex items-center justify-between border-b border-dashed border-[#d9a75f]/30 px-3 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#d9a75f]">
          <span>Quick</span>
          <span aria-hidden>夜</span>
        </div>
        <a
          href={STORE_LINKS.reservation}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오 예약 페이지 열기"
          className="group flex min-h-[54px] items-center gap-2.5 bg-[#a92e26] px-3 py-2 text-[#fff8eb] transition-colors hover:bg-[#bd382e] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#f4d39a]"
        >
          <CalendarCheck size={18} className="shrink-0" aria-hidden />
          <span className="min-w-0">
            <span className="block text-xs font-black">예약하기</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#f4d39a]">
              Kakao
            </span>
          </span>
        </a>

        <a
          href={STORE_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="용스다이닝포차 인스타그램 열기"
          className="flex min-h-[52px] items-center gap-2.5 border-t border-dashed border-[#d9a75f]/25 px-3 py-2 transition-colors hover:bg-[#f4e4ca]/10 hover:text-white focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d9a75f]"
        >
          <Instagram size={18} className="shrink-0 text-[#d9a75f]" aria-hidden />
          <span className="min-w-0">
            <span className="block text-xs font-bold">소식보기</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.1em] text-[#f4e4ca]/65">
              Instagram
            </span>
          </span>
        </a>

        {showScrollTop && (
          <button
            type="button"
            aria-label="페이지 맨 위로 이동"
            onClick={handleScrollTop}
            className="flex min-h-[42px] w-full items-center justify-between border-t border-dashed border-[#d9a75f]/25 bg-[#f4e4ca] px-3 py-2 text-xs font-black text-[#211914] transition-colors hover:bg-[#fff4df] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#a92e26]"
          >
            <span>맨 위로</span>
            <ArrowUp size={16} aria-hidden />
          </button>
        )}
      </aside>
    </>
  )
}

export default FloatingButton
