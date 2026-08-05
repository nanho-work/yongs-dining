'use client'

import Image from 'next/image'
import {
  DRINK_CATEGORY_LABEL,
  DRINK_CATEGORY_ORDER,
  DRINK_ITEMS,
  type DrinkCategory,
} from '@/data/drinkData'

function renderCategory(category: DrinkCategory) {
  return DRINK_CATEGORY_LABEL[category] ?? category
}

const DRINK_CATEGORY_ANCHOR: Record<DrinkCategory, string> = {
  DRINK: 'drink-soju',
  HIGHBALL: 'drink-highball',
  BEER: 'drink-beer',
  전통주: 'drink-traditional',
}

export default function DrinkMenu() {
  return (
    <div>
      <header className="mb-10 border-y border-[#6d3a2d]/25 py-6 sm:mb-12 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8 sm:py-7">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#9b241d]">
            Drinks for the table
          </p>
          <h2 className="font-display mt-2 break-keep text-2xl font-black tracking-[-0.03em] text-[#2b211d] sm:text-3xl">
            음식 곁에 좋은 한 잔
          </h2>
          <p className="mt-2 break-keep text-sm leading-6 text-[#66574f]">
            익숙한 한 잔부터 개성 있는 맥주와 전통주까지 준비했습니다.
          </p>
        </div>

        <nav
          aria-label="주류 종류 바로가기"
          className="mt-5 flex max-w-full gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-0"
        >
          {DRINK_CATEGORY_ORDER.map((category) => (
            <a
              key={category}
              href={`#${DRINK_CATEGORY_ANCHOR[category]}`}
              className="shrink-0 rounded-sm border border-[#6d3a2d]/25 bg-[#fff9ed]/65 px-3 py-2 text-xs font-bold text-[#5d4d45] transition-colors hover:border-[#8f211b]/45 hover:text-[#8f211b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f211b] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {renderCategory(category)}
            </a>
          ))}
        </nav>
      </header>

      <div className="space-y-11 sm:space-y-14">
        {DRINK_CATEGORY_ORDER.map((category) => {
          const items = DRINK_ITEMS.filter((drink) => drink.category === category)
          if (items.length === 0) return null

          return (
            <section
              key={category}
              id={DRINK_CATEGORY_ANCHOR[category]}
              aria-labelledby={`${DRINK_CATEGORY_ANCHOR[category]}-title`}
              className="scroll-mt-[var(--menu-sticky-offset)]"
            >
              <div className="mb-3 flex items-end justify-between gap-4 border-b border-[#6d3a2d]/35 pb-3 sm:mb-5">
                <h3
                  id={`${DRINK_CATEGORY_ANCHOR[category]}-title`}
                  className="font-display text-xl font-black tracking-[-0.02em] text-[#2b211d] sm:text-2xl"
                >
                  {renderCategory(category)}
                </h3>
                <p className="shrink-0 text-xs font-bold text-[var(--ink-soft)]">
                  {items.length}가지
                </p>
              </div>

              <div className="border-b border-[#6d3a2d]/25 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-7 md:border-b-0 xl:grid-cols-4">
                {items.map((drink) => {
                  const isPlaceholder = drink.image === 'coming-soon.png'

                  return (
                    <article
                      key={drink.id}
                      className="grid min-w-0 grid-cols-[72px_minmax(0,1fr)] gap-3 border-t border-[#6d3a2d]/20 py-3.5 first:border-t-0 md:flex md:flex-col md:border-t md:pt-4 md:first:border-t"
                    >
                      <div className="relative h-[76px] w-[72px] shrink-0 overflow-hidden rounded-sm border border-[#6d3a2d]/15 bg-[#fff9ed]/75 md:aspect-[4/3] md:h-auto md:w-full">
                        <Image
                          src={`/${drink.image}`}
                          alt=""
                          fill
                          sizes="(max-width: 767px) 72px, (max-width: 1279px) 30vw, 22vw"
                          className={
                            isPlaceholder
                              ? 'object-contain p-2 opacity-65 md:p-6'
                              : 'object-contain p-1.5 md:p-4'
                          }
                        />
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col justify-center md:pt-3">
                        <div className="flex min-w-0 items-start justify-between gap-2 md:block">
                          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                            <h4 className="break-keep text-sm font-extrabold leading-snug text-[#2b211d] sm:text-[15px]">
                              {drink.title}
                            </h4>
                            {drink.badge && (
                              <span className="rounded-sm bg-[#8f211b] px-1.5 py-0.5 text-[11px] font-extrabold text-[#fff9ed]">
                                {drink.badge}
                              </span>
                            )}
                          </div>
                          <p className="shrink-0 break-keep text-sm font-black text-[#8f211b] md:mt-2 md:text-[15px]">
                            {drink.price}
                          </p>
                        </div>
                        {drink.description && (
                          <p className="mt-1 break-keep text-xs leading-5 text-[#6c5d55] md:mt-2 md:text-[13px]">
                            {drink.description}
                          </p>
                        )}
                        {isPlaceholder && (
                          <p className="mt-1 text-[11px] font-semibold text-[var(--ink-soft)] md:mt-2">
                            사진 준비중
                          </p>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
