import Image from 'next/image'
import Link from 'next/link'
import { FEATURED_MENU_IDS } from '@/constants/home'
import { getMenuItemsByIds, getPrimaryMenuImage, isMenuImagePlaceholder } from '@/lib/menu'
import { SectionHeader } from '@/components/ui/SectionHeader'

const featuredMenus = getMenuItemsByIds(FEATURED_MENU_IDS)

export default function FeaturedMenus() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="signature menu"
          title="처음 온다면 이 메뉴부터"
          description="대표 두부전골과 직접 만든 두부요리 중심으로, 술과 식사가 모두 자연스럽게 이어지는 메뉴입니다."
        />
        <Link
          href="/menu"
          className="inline-flex min-h-10 items-center justify-center rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50"
        >
          전체 메뉴 보기
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {featuredMenus.map((menu) => {
          const image = getPrimaryMenuImage(menu.images)
          const isPlaceholder = isMenuImagePlaceholder(image)

          return (
            <article
              key={menu.id}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-neutral-100">
                <Image
                  src={`/${image}`}
                  alt={menu.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={isPlaceholder ? 'object-contain p-8' : 'object-cover'}
                />
                {menu.badge ? (
                  <span className="absolute left-3 top-3 bg-red-600 px-2.5 py-1 text-xs font-bold text-white">
                    {menu.badge}
                  </span>
                ) : null}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-neutral-950">{menu.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600">
                  {menu.description}
                </p>
                <p className="mt-4 text-base font-bold text-neutral-950">{menu.price}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
