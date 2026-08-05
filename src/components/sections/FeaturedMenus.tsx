import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { FEATURED_MENU_IDS } from '@/constants/home'
import { getMenuItemsByIds, getPrimaryMenuImage, isMenuImagePlaceholder } from '@/lib/menu'

const featuredMenus = getMenuItemsByIds(FEATURED_MENU_IDS)

export default function FeaturedMenus() {
  const [signatureMenu, ...supportingMenus] = featuredMenus

  if (!signatureMenu) return null

  const signatureImage = getPrimaryMenuImage(signatureMenu.images)
  const signatureIsPlaceholder = isMenuImagePlaceholder(signatureImage)

  return (
    <section
      aria-labelledby="featured-menu-title"
      className="relative py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -left-16 top-20 hidden select-none text-[12rem] font-black leading-none text-[#a91f25]/[0.06] lg:block"
      >
        01
      </div>

      <div className="relative mb-9 grid gap-7 border-t-2 border-[#2a1c17] pt-6 md:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.55fr)] md:items-end sm:mb-12">
        <header>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a91f25]">
            The house picks / 01
          </p>
          <h2
            id="featured-menu-title"
            className="font-display mt-3 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#211713] sm:text-5xl lg:text-6xl"
          >
            첫 잔에는,
            <br />
            이 요리부터.
          </h2>
        </header>

        <div className="md:border-l md:border-[#2a1c17]/25 md:pl-7">
          <p className="text-sm leading-7 text-[#5d4a40] sm:text-base">
            직접 만든 두부와 셰프의 손맛을 가장 선명하게 보여주는 세 접시입니다.
            식사로 시작해 술자리로 자연스럽게 이어집니다.
          </p>
          <Link
            href="/menu"
            className="mt-5 inline-flex min-h-11 items-center gap-2 border-b-2 border-[#a91f25] text-sm font-black text-[#8f171d] transition-colors hover:text-[#c3282e]"
          >
            전체 메뉴 펼쳐보기
            <ArrowRight size={17} aria-hidden />
          </Link>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
        <article className="group relative overflow-hidden border border-[#2a1c17] bg-[#211713] text-[#f4e2c7] shadow-[8px_8px_0_0_#a91f25] lg:col-span-8 lg:row-span-2 lg:shadow-[12px_12px_0_0_#a91f25]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#36231d] sm:aspect-[16/10] lg:min-h-[540px]">
            <Image
              src={`/${signatureImage}`}
              alt=""
              fill
              sizes="(min-width: 1280px) 805px, (min-width: 1024px) 66vw, 100vw"
              quality={75}
              className={
                signatureIsPlaceholder
                  ? 'object-contain p-12'
                  : 'object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.025]'
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160f0d] via-[#160f0d]/5 to-transparent" />

            <div className="absolute left-4 top-4 flex items-center gap-2 sm:left-6 sm:top-6">
              <span className="bg-[#a91f25] px-3 py-2 text-[10px] font-black tracking-[0.2em] text-white sm:text-xs">
                {signatureMenu.badge ?? 'SIGNATURE'}
              </span>
              <span className="border border-white/55 bg-[#211713]/65 px-3 py-2 text-[10px] font-black tracking-[0.16em] text-white backdrop-blur sm:text-xs">
                CHEF&apos;S PICK
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
              <p className="text-xs font-black tracking-[0.2em] text-[#e4b86f]">
                NO. 01 · HOUSE SPECIAL
              </p>
              <h3 className="font-display mt-2 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                {signatureMenu.title}
              </h3>
              <p className="mt-3 max-w-2xl whitespace-pre-line text-sm leading-6 text-[#eadbc8] sm:text-base sm:leading-7">
                {signatureMenu.description}
              </p>
              <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-white/20 pt-4">
                <p className="text-lg font-black text-white sm:text-xl">{signatureMenu.price}</p>
                <Link
                  href="/menu"
                  className="inline-flex min-h-11 items-center gap-2 bg-[#f1dfc3] px-4 py-2 text-sm font-black text-[#211713] transition-colors hover:bg-white"
                >
                  메뉴에서 보기
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {supportingMenus.slice(0, 2).map((menu, menuIndex) => {
          const image = getPrimaryMenuImage(menu.images)
          const isPlaceholder = isMenuImagePlaceholder(image)

          return (
            <article
              key={menu.id}
              className="group grid overflow-hidden border border-[#2a1c17] bg-[#edddc4] sm:grid-cols-[minmax(180px,0.9fr)_minmax(0,1.1fr)] lg:col-span-4 lg:grid-cols-[minmax(135px,0.85fr)_minmax(0,1.15fr)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#d9c3a5] sm:aspect-auto sm:min-h-[230px] lg:min-h-0">
                <Image
                  src={`/${image}`}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 170px, (min-width: 1024px) 14vw, (min-width: 640px) 38vw, 100vw"
                  quality={75}
                  className={
                    isPlaceholder
                      ? 'object-contain p-8'
                      : 'object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.035]'
                  }
                />
                <span className="absolute left-3 top-3 bg-[#211713] px-2.5 py-1.5 text-[10px] font-black tracking-[0.16em] text-[#f4e2c7]">
                  0{menuIndex + 2}
                </span>
              </div>

              <div className="flex flex-col justify-between p-5">
                <div>
                  <p className="text-[10px] font-black tracking-[0.18em] text-[#a91f25]">
                    {menu.badge ?? 'HOUSE PICK'}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-black leading-tight tracking-[-0.03em] text-[#211713]">
                    {menu.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 whitespace-pre-line text-sm leading-6 text-[#655145]">
                    {menu.description}
                  </p>
                </div>
                <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#2a1c17]/20 pt-3">
                  <p className="break-keep text-sm font-black leading-5 text-[#211713]">
                    {menu.price}
                  </p>
                  <Link
                    href="/menu"
                    aria-label={`${menu.title} 메뉴에서 보기`}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-[#a91f25] text-white transition-colors hover:bg-[#821218]"
                  >
                    <ArrowUpRight size={17} aria-hidden />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
