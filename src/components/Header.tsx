'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { STORE_LINKS } from '@/constants/store'
import { useDisclosure } from '@/hooks/useDisclosure'

export default function Header() {
  const { isOpen: isMenuOpen, close: closeMenu, toggle: toggleMenu } = useDisclosure(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 relative">
        <div className="hidden md:block text-sm text-red-500 font-bold tracking-wide">
          셰프가 요리하고, 분위기가 완성됩니다.
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="용스다이닝포차 로고"
              width={160}
              height={48}
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold text-red-600">
          <Link href="/lunch" className="rounded-full px-4 py-2 transition-colors hover:bg-red-50">
            점심특선
          </Link>
          <Link href="/menu" className="rounded-full px-4 py-2 transition-colors hover:bg-red-50">
            메뉴
          </Link>
          <Link href="/location" className="rounded-full px-4 py-2 transition-colors hover:bg-red-50">
            매장안내
          </Link>
          <a
            href={STORE_LINKS.reservation}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-full bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
          >
            예약하기
          </a>
        </nav>

        <div className="md:hidden flex justify-end ml-auto">
          <button
            type="button"
            aria-label="메뉴 열기"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-red-200 bg-white text-red-500 text-xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="absolute top-[100%] left-4 right-4 rounded-2xl border border-red-100 bg-white/95 shadow-lg z-40 py-3 px-3 md:hidden"
          >
            <div className="flex flex-col gap-1 text-center">
              <Link
                href="/lunch"
                className="block rounded-lg py-2 text-red-600 font-semibold hover:bg-red-50"
                onClick={closeMenu}
              >
                점심특선
              </Link>
              <Link
                href="/menu"
                className="block rounded-lg py-2 text-red-600 font-semibold hover:bg-red-50"
                onClick={closeMenu}
              >
                메뉴
              </Link>
              <Link
                href="/location"
                className="block rounded-lg py-2 text-red-600 font-semibold hover:bg-red-50"
                onClick={closeMenu}
              >
                매장안내
              </Link>
              <a
                href={STORE_LINKS.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600"
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
