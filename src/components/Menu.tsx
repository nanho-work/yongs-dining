'use client'

import Image from 'next/image'
import { useMemo, useRef, useState } from 'react'
import DrinkMenu from './DrinkMenu'
import MenuTabs, { type MenuTabId } from './MenuTabs'
import { MENU_ITEMS } from '@/data/menuData'
import { getPrimaryMenuImage, isMenuImagePlaceholder } from '@/lib/menu'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<MenuTabId>('all')
  const panelRef = useRef<HTMLDivElement | null>(null)

  const filteredMenus = useMemo(
    () =>
      selectedCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter((menu) => menu.category === selectedCategory),
    [selectedCategory]
  )
  const signatureMenu = filteredMenus.find((menu) => menu.badge === 'SIGNATURE')
  const regularMenus = filteredMenus.filter((menu) => menu.id !== signatureMenu?.id)
  const signatureImage = signatureMenu ? getPrimaryMenuImage(signatureMenu.images) : null

  const selectCategory = (category: MenuTabId) => {
    setSelectedCategory(category)

    window.requestAnimationFrame(() => {
      const panel = panelRef.current
      if (!panel) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      panel.scrollIntoView({
        block: 'start',
        behavior: reduceMotion ? 'auto' : 'smooth',
      })
    })
  }

  return (
    <section className="py-2" aria-labelledby="menu-title">
      <header className="mx-auto mb-7 max-w-5xl border-y border-[#6d3a2d]/30 py-7 sm:mb-9 sm:py-9">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:items-end md:gap-10">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#9b241d] sm:text-xs">
              Yong&apos;s Dining · Moran
            </p>
            <h1
              id="menu-title"
              className="font-display mt-3 break-keep text-3xl font-black tracking-[-0.04em] text-[#2b211d] sm:text-5xl"
            >
              정성을 담은
              <span className="block text-[#8f211b]">용스의 차림표</span>
            </h1>
          </div>
          <p className="max-w-xl break-keep border-l-2 border-[#9b241d] pl-4 text-sm leading-6 text-[#62534b] sm:text-base sm:leading-7">
            직접 만든 두부요리부터 든든한 안주와 주류까지. 좋은 재료와 손맛을 담아
            천천히, 따뜻하게 내어드립니다.
          </p>
        </div>
      </header>

      <MenuTabs selected={selectedCategory} onSelect={selectCategory} />

      {selectedCategory === 'drink' ? (
        <div
          ref={panelRef}
          id="menu-panel"
          role="tabpanel"
          aria-labelledby="tab-drink"
          tabIndex={0}
          className="mt-8 scroll-mt-[var(--menu-sticky-offset)] rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#8f211b] focus-visible:ring-offset-4 sm:mt-10"
        >
          <DrinkMenu />
        </div>
      ) : (
        <div
          ref={panelRef}
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${selectedCategory}`}
          tabIndex={0}
          className="mt-8 scroll-mt-[var(--menu-sticky-offset)] rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#8f211b] focus-visible:ring-offset-4 sm:mt-10"
        >
          {signatureMenu && signatureImage && (
            <article className="mb-9 grid overflow-hidden border border-[#4b1714] bg-[#651c18] text-[#fff8ec] shadow-[8px_8px_0_rgba(143,33,27,0.18)] md:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] sm:mb-11">
              <div className="relative aspect-[16/10] min-h-0 bg-[#e7d8c8] md:aspect-auto md:min-h-[390px]">
                <Image
                  src={`/${signatureImage}`}
                  alt={signatureMenu.title}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 55vw, 680px"
                  quality={80}
                  priority
                  className={
                    isMenuImagePlaceholder(signatureImage)
                      ? 'object-contain p-8'
                      : 'object-cover'
                  }
                />
                {isMenuImagePlaceholder(signatureImage) && (
                  <span className="absolute left-4 top-4 rounded-full bg-[#2b211d]/85 px-3 py-1 text-[11px] font-semibold text-white">
                    사진 준비중
                  </span>
                )}
              </div>

              <div className="flex min-w-0 flex-col p-6 sm:p-8 md:p-9">
                <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f4c776]">
                  <span className="h-px w-8 bg-[#f4c776]" aria-hidden />
                  Signature
                </p>
                <h2 className="font-display mt-5 break-keep text-2xl font-black leading-tight tracking-[-0.03em] sm:text-3xl">
                  {signatureMenu.title}
                </h2>
                <p className="mt-4 whitespace-pre-line break-keep text-sm leading-6 text-[#f7e9d8] sm:text-base sm:leading-7">
                  {signatureMenu.description}
                </p>
                {signatureMenu.limited && (
                  <p className="mt-4 break-keep text-xs font-semibold leading-5 text-[#ffd3b2]">
                    ※ 예약 및 한정판매 메뉴입니다
                  </p>
                )}
                <p className="mt-auto border-t border-[#f7e9d8]/25 pt-6 text-lg font-black text-white">
                  {signatureMenu.price}
                </p>
              </div>
            </article>
          )}

          <div className="grid grid-cols-1 border-b border-[#6d3a2d]/25 lg:grid-cols-2 lg:gap-x-10">
            {regularMenus.map((menu, index) => {
              const image = getPrimaryMenuImage(menu.images)
              const isPlaceholder = isMenuImagePlaceholder(image)

              return (
                <article
                  key={menu.id}
                  className={`grid min-w-0 grid-cols-[104px_minmax(0,1fr)] gap-4 border-t border-[#6d3a2d]/25 py-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-5 sm:py-6 lg:grid-cols-[168px_minmax(0,1fr)] xl:grid-cols-[190px_minmax(0,1fr)] ${
                    regularMenus.length % 2 === 1 && index === regularMenus.length - 1
                      ? 'lg:col-span-2'
                      : ''
                  }`}
                >
                  <div className="relative min-h-[148px] self-stretch overflow-hidden rounded-sm border border-[#6d3a2d]/15 bg-[#eadfd3] sm:min-h-[188px]">
                    <Image
                      src={`/${image}`}
                      alt=""
                      fill
                      sizes="(max-width: 639px) 104px, (max-width: 1023px) 180px, (max-width: 1279px) 168px, 190px"
                      quality={75}
                      priority={!signatureMenu && index === 0}
                      className={isPlaceholder ? 'object-contain p-4' : 'object-cover'}
                    />

                    {isPlaceholder && (
                      <span className="absolute left-2 top-2 rounded-full bg-[#2b211d]/85 px-2 py-1 text-[10px] font-semibold text-white sm:left-3 sm:top-3 sm:text-[11px]">
                        사진 준비중
                      </span>
                    )}
                  </div>

                  <div className="flex min-w-0 flex-col py-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display break-keep text-[17px] font-extrabold leading-snug tracking-[-0.02em] text-[#2b211d] sm:text-xl">
                        {menu.title}
                      </h2>
                      {menu.badge && (
                        <span className="rounded-full border border-[#9b241d]/30 bg-[#9b241d]/10 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-[#8f211b]">
                          {menu.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2.5 whitespace-pre-line break-keep text-[13px] leading-5 text-[#66574f] sm:text-sm sm:leading-6">
                      {menu.description}
                    </p>
                    {menu.limited && (
                      <p className="mt-3 break-keep text-[11px] font-bold leading-5 text-[#9b241d] sm:text-xs">
                        ※ 예약 및 한정판매 메뉴입니다
                      </p>
                    )}
                    <p className="mt-auto break-keep pt-4 text-[15px] font-black text-[#2b211d] sm:text-base">
                      {menu.price}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
