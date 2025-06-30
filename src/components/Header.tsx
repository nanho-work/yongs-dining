'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const prefix = ''

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 flex items-center justify-between relative">

        {/* 좌측 문구 (모바일에선 숨김) */}
        <div className="hidden sm:block text-sm sm:text-base text-red-400 font-bold">
          쉐프가 요리하고, 분위기가 완성됩니다.
        </div>

        {/* 로고 */}
        <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={`${prefix}/logo.png`}
              alt="용스다이닝포차 로고"
              width={160}
              height={48}
              priority
            />
          </Link>
        </div>
        {/* 데스크탑 메뉴 (sm 이상에서만 보임) */}
        <div className="hidden sm:flex space-x-6 text-base font-bold text-red-500">
          <Link href="/menu" className="hover:text-red-600">메뉴</Link>
          <Link href="/location" className="hover:text-red-600">매장안내</Link>
        </div>

        {/* 햄버거 버튼 (모바일) */}
        <div className="sm:hidden flex justify-end ml-auto">
          <button
            className="text-red-400 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* 클릭 시 나타나는 메뉴 */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 text-center py-4">
              <Link
                href="/menu"
                className="block py-2 text-red-500 font-bold hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                메뉴
              </Link>
              <Link
                href="/location"
                className="block py-2 text-red-500 font-bold hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                매장안내
              </Link>
            </div>
          )}
        </div>

      </div>
    </header>
  )
}