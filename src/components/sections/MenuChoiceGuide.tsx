import Image from 'next/image'
import Link from 'next/link'
import { MENU_ITEMS } from '@/data/menuData'
import { MENU_SEO_DETAILS } from '@/data/menuSeoData'

const featuredSlugs = [
  'real-hanwoo-tofu-jeongol',
  'bomb-tofu-duruchigi',
  'boiled-pork-tofu',
  '10cm-tofu-wanza',
] as const

export default function MenuChoiceGuide() {
  const featuredMenus = featuredSlugs.map((slug) => {
    const detail = MENU_SEO_DETAILS.find((item) => item.slug === slug)
    const menu = MENU_ITEMS.find((item) => item.id === detail?.menuId)
    return detail && menu ? { detail, menu } : null
  }).filter((item): item is NonNullable<typeof item> => item !== null)

  return (
    <section aria-labelledby="menu-guide-title" className="pb-12 sm:pb-16">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">FIRST ORDER GUIDE</p>
        <h1 id="menu-guide-title" className="mt-2 break-keep text-3xl font-black text-neutral-950 sm:text-4xl">
          처음 방문자를 위한 두부요리 선택 가이드
        </h1>
        <p className="mt-4 break-keep text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
          진한 국물, 매콤한 볶음, 담백한 보쌈처럼 원하는 맛과 술자리에 맞춰 용스다이닝의 대표 메뉴를 골라보세요.
          혼술 메뉴가 있는 음식은 1인 방문에도 주문할 수 있습니다.
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredMenus.map(({ menu, detail }) => (
          <Link
            key={menu.id}
            href={`/menu/${detail.slug}/`}
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] bg-neutral-100">
              <Image
                src={`/${menu.images[0]}`}
                alt={`${menu.title} 메뉴 사진`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-4">
              <h2 className="break-keep text-base font-bold text-neutral-950">{menu.title}</h2>
              <p className="mt-2 line-clamp-2 break-keep text-sm leading-6 text-neutral-600">{detail.taste}</p>
              <p className="mt-3 text-sm font-bold text-red-600">메뉴 자세히 보기 →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
