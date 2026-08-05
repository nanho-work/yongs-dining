'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { STORE_LINKS } from '@/constants/store'
import { useDisclosure } from '@/hooks/useDisclosure'

const navigation = [
  { href: '/lunch', label: '점심특선', order: '01' },
  { href: '/menu', label: '메뉴', order: '02' },
  { href: '/location', label: '매장안내', order: '03' },
] as const

export default function Header() {
  const pathname = usePathname()
  const currentPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  const { isOpen: isMenuOpen, close: closeMenu, toggle: toggleMenu } = useDisclosure(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const closeAtDesktop = () => {
      if (desktopQuery.matches) closeMenu()
    }

    closeAtDesktop()
    desktopQuery.addEventListener('change', closeAtDesktop)

    return () => desktopQuery.removeEventListener('change', closeAtDesktop)
  }, [closeMenu])

  useEffect(() => {
    if (!isMenuOpen) return

    firstMenuLinkRef.current?.focus()

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeMenu()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen, closeMenu])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-[#c69752]/40 bg-[#181411]/[0.97] text-[#f3e5cf] shadow-[0_8px_24px_rgba(24,20,17,0.16)] backdrop-blur-md"
    >
      <div
        aria-hidden
        className="h-[3px] w-full bg-[linear-gradient(90deg,#8f211c_0%,#b9372c_48%,#d2a15c_50%,#b9372c_52%,#8f211c_100%)]"
      />
      <div className="relative mx-auto flex h-[70px] max-w-7xl items-center gap-4 px-4 py-2 sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            href="/"
            aria-current={currentPath === '/' ? 'page' : undefined}
            className="flex shrink-0 items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a45c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181411]"
          >
            <Image
              src="/logo.png"
              alt="용스다이닝포차 로고"
              width={998}
              height={542}
              sizes="100px"
              className="h-[54px] w-auto"
              priority
            />
          </Link>

          <div className="hidden border-l border-dashed border-[#d7a45c]/45 pl-4 xl:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d7a45c]">
              Moran · Dining Pocha
            </p>
            <p className="mt-1 whitespace-nowrap text-xs font-medium tracking-[0.04em] text-[#f3e5cf]/70">
              셰프의 두부요리와 오래 머무는 밤
            </p>
          </div>
        </div>

        <nav
          aria-label="주요 메뉴"
          className="ml-auto hidden items-center justify-end gap-1 whitespace-nowrap text-sm font-semibold lg:flex"
        >
          {navigation.map((item) => {
            const isCurrent = currentPath === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={`relative rounded-sm px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a45c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181411] ${
                  isCurrent
                    ? 'bg-[#f1e2ca] text-[#201813]'
                    : 'text-[#f3e5cf]/82 hover:bg-[#f3e5cf]/10 hover:text-[#fff8ec]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href={STORE_LINKS.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex min-h-10 items-center border border-[#d8a75e]/40 bg-[#a92e26] px-4 py-2 text-[#fff8eb] shadow-[3px_3px_0_rgba(214,164,91,0.24)] transition-colors hover:bg-[#bd382e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a45c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181411]"
          >
            <span>예약하기</span>
            <span aria-hidden className="ml-2 text-[#e2b46c]">↗</span>
          </a>
        </nav>

        <div className="ml-auto flex justify-end lg:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#d7a45c]/55 bg-[#f1e2ca] text-xl text-[#8f251f] shadow-[3px_3px_0_rgba(169,46,38,0.45)] transition-colors hover:bg-[#fff3df] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a45c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181411]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="모바일 주요 메뉴"
            className="absolute left-4 right-4 top-[calc(100%+0.5rem)] z-40 overflow-hidden rounded-sm border border-[#d7a45c]/55 bg-[#1d1713]/[0.98] px-3 pb-3 pt-2 text-[#f3e5cf] shadow-[8px_10px_0_rgba(91,31,25,0.25)] backdrop-blur sm:left-auto sm:w-80 lg:hidden"
          >
            <div className="mb-2 flex items-center justify-between border-b border-dashed border-[#d7a45c]/35 px-2 py-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d7a45c]">
                YONG&apos;S MENU
              </span>
              <span className="text-[10px] tracking-[0.16em] text-[#f3e5cf]/60">
                MORAN
              </span>
            </div>
            <div className="flex flex-col gap-1 text-center">
              {navigation.map((item, index) => {
                const isCurrent = currentPath === item.href

                return (
                  <Link
                    key={item.href}
                    ref={index === 0 ? firstMenuLinkRef : undefined}
                    href={item.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`grid grid-cols-[2.25rem_1fr_2.25rem] items-center rounded-sm px-2 py-2.5 text-left font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d7a45c] ${
                      isCurrent
                        ? 'bg-[#f1e2ca] text-[#201813]'
                        : 'text-[#f3e5cf]/88 hover:bg-[#f3e5cf]/10 hover:text-white'
                    }`}
                    onClick={closeMenu}
                  >
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#bd7f43]">
                      {item.order}
                    </span>
                    <span className="text-center">{item.label}</span>
                    <span aria-hidden className="text-right text-[#bd7f43]">→</span>
                  </Link>
                )
              })}
              <a
                href={STORE_LINKS.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-between rounded-sm border border-[#d7a45c]/35 bg-[#a92e26] px-4 py-3 font-semibold text-[#fff8eb] transition-colors hover:bg-[#bd382e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#f4d39a]"
                onClick={closeMenu}
              >
                <span>카카오 예약하기</span>
                <span aria-hidden className="text-[#e8bd78]">↗</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
