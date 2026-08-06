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

export default function DrinkMenu() {
  return (
    <div className="space-y-12">
      {DRINK_CATEGORY_ORDER.map((category) => {
        const items = DRINK_ITEMS.filter((drink) => drink.category === category)
        if (items.length === 0) return null

        return (
          <section key={category}>
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-red-300 mb-4 pb-2">
              {renderCategory(category)}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {items.map((drink) => {
                const isPlaceholder = drink.image === 'coming-soon.png'

                return (
                  <article
                    key={drink.id}
                    className="rounded-xl border border-amber-100 bg-gradient-to-b from-amber-50 to-orange-100/80 shadow-sm overflow-hidden"
                  >
                    <div className="relative aspect-[4/5] w-full flex items-center justify-center bg-white/30">
                      <Image
                        src={`/${drink.image}`}
                        alt={drink.title}
                        width={220}
                        height={320}
                        className={isPlaceholder ? 'h-40 w-auto object-contain opacity-70' : 'h-[88%] w-auto object-contain'}
                      />

                      {isPlaceholder && (
                        <span className="absolute top-3 right-3 rounded-full bg-neutral-800/80 px-2.5 py-1 text-[11px] font-medium text-white">
                          사진 준비중
                        </span>
                      )}

                      {drink.badge && (
                        <span className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                          {drink.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-3 sm:p-4 bg-black/30 text-white min-h-[112px]">
                      <h3 className="text-sm sm:text-base font-bold">{drink.title}</h3>
                      {drink.description && <p className="text-xs sm:text-sm mt-1 leading-relaxed">{drink.description}</p>}
                      <p className="text-sm font-semibold mt-1.5">{drink.price}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
