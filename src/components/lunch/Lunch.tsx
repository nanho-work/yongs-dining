import Image from 'next/image'
import { Clock3, Plus, Sparkles } from 'lucide-react'
import { formatKRW } from '@/lib/text'

type LunchItem = {
  id: string
  title: string
  price: number
  image: string
  fit?: 'cover' | 'contain'
  objectPosition?: string
}

const LUNCH_ITEMS: LunchItem[] = [
  {
    id: 'ggotgeddeulkkaesundubu',
    title: '꽃게들깨순두부',
    price: 11000,
    image: '/lunch/lunch_ggodu.png',
    fit: 'contain',
    objectPosition: 'center',
  },
  {
    id: 'dubugochujangjjigae',
    title: '두부고추장찌개',
    price: 10000,
    image: '/lunch/lunch_du.png',
    fit: 'contain',
    objectPosition: 'center',
  },
  {
    id: 'sundubumapadeopbap',
    title: '순두부마파덮밥',
    price: 11000,
    image: '/lunch/lunch_ma.png',
    fit: 'contain',
    objectPosition: 'center',
  },
  {
    id: 'yongsdubugimbap',
    title: '용스두부김밥',
    price: 8000,
    image: '/lunch/lunch_kim.png',
    fit: 'contain',
    objectPosition: 'center',
  },
]

const SET_MENU_IMAGE = '/lunch/lunch_set_combo.png'
const USAMGYEOP_IMAGE = '/lunch/lunch_usamgyeop_torch.png'

export default function Lunch() {
  return (
    <section className="w-full">
      <header className="ink-panel relative mb-12 overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full border border-white/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 -top-6 h-36 w-36 rounded-full border border-white/10"
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <p className="editorial-kicker !text-red-300">Yong&apos;s lunch table</p>
            <h1 className="font-display mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              용스 점심특선
            </h1>
            <p className="mt-5 max-w-xl break-keep text-sm leading-7 text-stone-300 sm:text-base">
              든든한 두부 한 끼에 용스의 손맛을 담았습니다. 목요일부터 일요일,
              점심시간에만 만날 수 있는 한정 메뉴입니다.
            </p>
          </div>

          <div className="border-l border-red-400/50 pl-5">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
              <Clock3 size={15} aria-hidden />
              Lunch hours
            </p>
            <p className="font-display mt-3 text-2xl font-bold text-white">목–일 12:00–15:00</p>
            <p className="mt-2 text-xs leading-5 text-stone-400">재료 소진 시 조기 마감될 수 있습니다.</p>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl">
        <section aria-labelledby="lunch-menu-title">
          <div className="mb-6 flex items-end justify-between border-b border-[var(--line)] pb-4">
            <div>
              <p className="editorial-kicker">Lunch menu</p>
              <h2
                id="lunch-menu-title"
                className="font-display mt-2 text-3xl font-black tracking-tight text-[var(--ink)] sm:text-4xl"
              >
                오늘의 점심상
              </h2>
            </div>
            <span className="stamp-badge hidden sm:inline-flex">점심 한정</span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {LUNCH_ITEMS.map((item, index) => (
              <article
                key={item.id}
                className="retro-card group flex min-h-[184px] overflow-hidden rounded-sm xl:block xl:min-h-0"
              >
                <div
                  className={`relative w-[42%] shrink-0 self-stretch border-r border-[var(--line)] xl:aspect-[2/3] xl:w-full xl:border-b xl:border-r-0 ${
                    (item.fit ?? 'contain') === 'contain' ? 'bg-[#e9ded2]' : ''
                  }`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 42vw, (max-width: 1279px) 21vw, 25vw"
                    quality={70}
                    priority={index === 0}
                    style={{ objectPosition: item.objectPosition || 'center' }}
                    className={(item.fit ?? 'contain') === 'contain' ? 'object-contain' : 'object-cover'}
                  />
                  <span
                    aria-hidden
                    className="absolute left-3 top-3 bg-[var(--ink)] px-2 py-1 font-mono text-[11px] font-bold tracking-widest text-white"
                  >
                    0{index + 1}
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-4 xl:min-h-[170px] xl:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--lacquer)]">
                    Chef&apos;s lunch
                  </p>
                  <h3 className="font-display mt-2 break-keep text-lg font-black text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-black text-[var(--ink)]">{formatKRW(item.price)}</p>

                  <div className="mt-auto border-t border-dashed border-[var(--line)] pt-3 text-xs text-[var(--ink-soft)]">
                    <p className="flex items-center gap-1.5">
                      <Plus size={13} aria-hidden />
                      고추튀김 2개와 음료 세트 +4,000원
                    </p>
                    {item.id === 'yongsdubugimbap' ? (
                      <p className="mt-1.5 flex items-center gap-1.5">
                        <Plus size={13} aria-hidden />
                        우삼겹 토핑 +3,000원
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="lunch-extra-title">
          <div className="mb-6 flex items-end justify-between border-b border-[var(--line)] pb-4">
            <div>
              <p className="editorial-kicker">Add to your table</p>
              <h2
                id="lunch-extra-title"
                className="font-display mt-2 text-3xl font-black tracking-tight text-[var(--ink)]"
              >
                한 상을 더 맛있게
              </h2>
            </div>
            <Sparkles className="hidden text-[var(--lacquer)] sm:block" size={25} aria-hidden />
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article className="paper-panel grid min-h-[230px] grid-cols-[42%_1fr] overflow-hidden rounded-sm sm:grid-cols-[46%_1fr]">
              <div className="relative border-r border-[var(--line)] bg-[#e9ded2]">
                <Image
                  src={SET_MENU_IMAGE}
                  alt="세트메뉴 구성"
                  fill
                  sizes="(max-width: 1023px) 42vw, 23vw"
                  quality={80}
                  className="object-contain"
                />
              </div>
              <div className="flex min-w-0 flex-col p-5 sm:p-6">
                <span className="stamp-badge self-start">SET</span>
                <h3 className="font-display mt-4 text-2xl font-black text-[var(--ink)]">세트메뉴</h3>
                <p className="mt-1 font-bold text-[var(--lacquer)]">본메뉴 + 4,000원</p>
                <p className="mt-3 break-keep text-sm leading-6 text-[var(--ink-soft)]">
                  고추튀김 2피스와 음료로 한 끼를 완성하세요.
                </p>
                <div className="mt-auto border-t border-dashed border-[var(--line)] pt-3 text-xs leading-5 text-[var(--ink-soft)]">
                  단품: 고추튀김 2피스 {formatKRW(3000)} · 음료 {formatKRW(2000)}
                </div>
              </div>
            </article>

            <article className="ink-panel grid min-h-[230px] grid-cols-[42%_1fr] overflow-hidden rounded-sm sm:grid-cols-[46%_1fr]">
              <div className="relative border-r border-white/15 bg-[#211914]">
                <Image
                  src={USAMGYEOP_IMAGE}
                  alt="우삼겹 토치"
                  fill
                  sizes="(max-width: 1023px) 42vw, 23vw"
                  quality={80}
                  className="object-contain"
                />
              </div>
              <div className="flex min-w-0 flex-col p-5 sm:p-6">
                <span className="self-start border border-red-300 px-2.5 py-1 text-[10px] font-black tracking-[0.15em] text-red-300">
                  TORCHED
                </span>
                <h3 className="font-display mt-4 text-2xl font-black text-white">우삼겹 추가</h3>
                <p className="mt-3 break-keep text-sm leading-6 text-stone-300">
                  용스두부김밥 위에 불향 가득한 우삼겹을 올려드립니다.
                </p>
                <p className="mt-auto pt-4 text-xl font-black text-red-300">+{formatKRW(3000)}</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  )
}
