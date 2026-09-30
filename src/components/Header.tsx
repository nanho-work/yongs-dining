'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useEffect } from 'react'
import { SITE_NAV_ITEMS } from '@/constants/navigation'
import { STORE_LINKS } from '@/constants/store'
import { useDisclosure } from '@/hooks/useDisclosure'

export default function Header() {
  const { isOpen: isMenuOpen, close: closeMenu, toggle: toggleMenu } = useDisclosure(false)
  const pathname = usePathname()

  useEffect(() => {
    closeMenu()
  }, [closeMenu, pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [closeMenu, isMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 relative">
        <div className="hidden lg:block text-sm text-red-500 font-bold tracking-wide">
          셰프가 요리하고, 분위기가 완성됩니다.
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="용스다이닝포차 로고"
              width={160}
              height={87}
              className="h-12 w-auto lg:h-auto lg:w-40"
              priority
            />
          </Link>
        </div>

        <nav aria-label="주요 메뉴" className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-red-600">
          {SITE_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className="rounded-full px-3 py-2 transition-colors hover:bg-red-50 xl:px-4"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={STORE_LINKS.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-full bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
          >
            예약하기
          </a>
        </nav>

        <div className="lg:hidden flex justify-end ml-auto">
          <button
            type="button"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-red-200 bg-white text-red-500 text-xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="모바일 메뉴"
            className="absolute top-[100%] left-4 right-4 rounded-2xl border border-red-100 bg-white/95 shadow-lg z-40 py-3 px-3 lg:hidden"
          >
            <div className="flex flex-col gap-1 text-center">
              {SITE_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className="block rounded-lg py-2.5 text-red-600 font-semibold hover:bg-red-50"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={STORE_LINKS.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-lg bg-red-500 py-2.5 text-white font-semibold hover:bg-red-600"
                onClick={closeMenu}
              >
                카카오 예약하기
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
