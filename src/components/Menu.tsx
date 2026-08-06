'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import DrinkMenu from './DrinkMenu'
import MenuTabs, { type MenuTabId } from './MenuTabs'
import { MENU_ITEMS } from '@/data/menuData'
import { getPrimaryMenuImage, isMenuImagePlaceholder } from '@/lib/menu'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<MenuTabId>('all')
  const [flippedId, setFlippedId] = useState<string | null>(null)

  useEffect(() => {
    setFlippedId(null)
  }, [selectedCategory])

  const filteredMenus = useMemo(
    () =>
      selectedCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter((menu) => menu.category === selectedCategory),
    [selectedCategory]
  )

  return (
    <section className="py-2">
      <MenuTabs selected={selectedCategory} onSelect={setSelectedCategory} />

      {selectedCategory === 'drink' ? (
        <div id="menu-panel" role="tabpanel" aria-labelledby="tab-drink" className="mt-8">
          <DrinkMenu />
        </div>
      ) : (
        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${selectedCategory}`}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
        >
          {filteredMenus.map((menu, index) => {
            const image = getPrimaryMenuImage(menu.images)
            const isFlipped = flippedId === menu.id
            const isPlaceholder = isMenuImagePlaceholder(image)

            return (
              <article
                key={menu.id}
                className="relative w-full aspect-[16/9] group overflow-hidden rounded-2xl border border-white/60 shadow-sm bg-neutral-900/10"
              >
                {menu.badge && (
                  <span className="absolute z-30 top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm pointer-events-none">
                    {menu.badge}
                  </span>
                )}

                <div className="sm:hidden relative h-full [perspective:1000px]">
                  <div
                    className={`relative w-full h-full duration-500 [transform-style:preserve-3d] ${
                      isFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    <div className="absolute inset-0 backface-hidden">
                      <Image
                        src={`/${image}`}
                        alt={menu.title}
                        fill
                        sizes="100vw"
                        quality={75}
                        priority={index === 0}
                        className={isPlaceholder ? 'object-contain bg-neutral-100 p-6' : 'object-cover'}
                      />
                      {isPlaceholder && (
                        <span className="absolute top-3 right-3 rounded-full bg-neutral-800/80 px-2.5 py-1 text-[11px] font-medium text-white">
                          사진 준비중
                        </span>
                      )}

                      <div className="absolute inset-x-0 bottom-0 bg-black/65 text-white p-3">
                        <h3 className="text-sm font-semibold">{menu.title}</h3>
                        <p className="text-xs mt-1">{menu.price}</p>
                        <button
                          type="button"
                          onClick={() => setFlippedId(menu.id)}
                          className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-2 py-1.5 text-xs font-medium"
                        >
                          상세 설명 보기
                        </button>
                      </div>
                    </div>

                    <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col bg-neutral-900/90 text-white p-4">
                      <h3 className="text-base font-bold">{menu.title}</h3>
                      <p className="text-sm mt-2 whitespace-pre-line leading-relaxed">{menu.description}</p>
                      {menu.limited && (
                        <p className="text-xs text-red-200 mt-3">※ 예약 및 한정판매 메뉴입니다</p>
                      )}
                      <p className="mt-auto pt-3 text-sm font-semibold">{menu.price}</p>
                      <button
                        type="button"
                        onClick={() => setFlippedId(null)}
                        className="mt-2 rounded-md border border-white/30 bg-white/10 px-2 py-1.5 text-xs font-medium"
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-full">
                  <Image
                    src={`/${image}`}
                    alt={menu.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={75}
                    priority={index === 0}
                    className={isPlaceholder ? 'object-contain bg-neutral-100 p-8' : 'object-cover'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/85 via-neutral-900/45 to-transparent" />

                  {isPlaceholder && (
                    <span className="absolute top-3 right-3 rounded-full bg-neutral-800/80 px-2.5 py-1 text-[11px] font-medium text-white">
                      사진 준비중
                    </span>
                  )}

                  <div className="absolute inset-y-0 left-0 w-[54%] p-4 text-white flex flex-col">
                    <h3 className="text-lg font-bold">{menu.title}</h3>
                    <p className="text-sm mt-2 whitespace-pre-line leading-relaxed">{menu.description}</p>
                    {menu.limited && (
                      <p className="text-xs text-red-200 mt-2">※ 예약 및 한정판매 메뉴입니다</p>
                    )}
                    <p className="text-base font-semibold mt-auto pt-3">{menu.price}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
