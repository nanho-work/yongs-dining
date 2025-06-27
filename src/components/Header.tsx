'use client'

import Link from 'next/link'
import Image from 'next/image'

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

export default function Header() {
  return (
    <header className="w-full bg-white absolute top-0 left-0 z-50 ">
      <div className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-between">
        
        {/* 좌측 문구 */}
        <div className="text-sm sm:text-base text-red-400 font-bold whitespace-nowrap">
          쉐프가 요리하고, 분위기가 완성됩니다.
        </div>

        {/* 중앙 로고 */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <Image
              src={`${prefix}/logo.png`} // public/logo.png 파일 필요
              alt="용스다이닝포차 로고"
              width={160}
              height={48}
              priority
            />
          </Link>
        </div>

        {/* 우측 메뉴 */}
        <nav className="flex gap-6 text-lg font-bold text-red-400">
          <Link href={`/menu`} className="hover:text-red-500">메뉴</Link>
          <Link href={`/location`} className="hover:text-red-500">매장안내</Link>
        </nav>
      </div>
    </header>
  )
}