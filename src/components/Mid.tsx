import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Disc3, Flame, HandHeart } from 'lucide-react'
import BlogPreviewSlider from '@/components/BlogPreviewSlider'

const storyPoints = [
  {
    icon: Flame,
    label: 'CHEF',
    title: '셰프의 손으로',
    description: '익숙한 포차 요리도 재료와 불의 순서를 다시 잡습니다.',
  },
  {
    icon: HandHeart,
    label: 'WELCOME',
    title: '가깝고 따뜻하게',
    description: '혼자 온 밤도, 함께 온 저녁도 편안하게 맞이합니다.',
  },
  {
    icon: Disc3,
    label: 'MOOD',
    title: '음악이 흐르게',
    description: 'LP와 오래된 소품이 식탁 사이의 이야기를 이어줍니다.',
  },
] as const

export default function MidSection() {
  return (
    <>
      <section
        aria-labelledby="home-story-title"
        className="relative border-t border-[#2a1c17]/20 py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute right-0 top-20 hidden h-44 w-44 rotate-6 rounded-full border border-[#a91f25]/15 lg:block" />
        <div className="pointer-events-none absolute right-8 top-28 hidden h-28 w-28 -rotate-6 rounded-full border border-[#a91f25]/10 lg:block" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5 lg:pr-5">
            <header>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a91f25]">
                Chef, space &amp; night / 02
              </p>
              <h2
                id="home-story-title"
                className="font-display mt-3 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#211713] sm:text-5xl lg:text-6xl"
              >
                요리하는 사람과
                <br />
                머무는 공간의 온도.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-[#5e4b40] sm:text-base sm:leading-8">
                용스다이닝포차는 셰프가 만든 한 접시와 손님이 남긴 한 장면이
                차곡차곡 쌓이는 작은 포차입니다. 모란의 밤에 어울리는 음식,
                음악, 환대를 한 공간에 담았습니다.
              </p>
            </header>

            <ol className="mt-8 divide-y divide-[#2a1c17]/20 border-y border-[#2a1c17]/25">
              {storyPoints.map((point, pointIndex) => {
                const Icon = point.icon

                return (
                  <li key={point.label} className="grid grid-cols-[auto_1fr] gap-4 py-4 sm:gap-5">
                    <span className="inline-flex h-11 w-11 items-center justify-center bg-[#a91f25] text-white">
                      <Icon size={19} aria-hidden />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-[10px] font-black tracking-[0.18em] text-[#a91f25]">
                          0{pointIndex + 1} · {point.label}
                        </span>
                        <h3 className="font-display text-xl font-black text-[#211713]">
                          {point.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#6a564a]">{point.description}</p>
                    </div>
                  </li>
                )
              })}
            </ol>

            <Link
              href="/location"
              className="mt-7 inline-flex min-h-11 items-center gap-2 bg-[#211713] px-5 py-2.5 text-sm font-black text-[#f4e2c7] transition-colors hover:bg-[#a91f25]"
            >
              공간과 영업시간 보기
              <ArrowRight size={17} aria-hidden />
            </Link>
          </div>

          <div className="relative lg:col-span-7">
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#a91f25]/35 sm:-left-5 sm:-top-5" aria-hidden />
            <div className="relative grid h-[430px] grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] grid-rows-2 gap-2 bg-[#211713] p-2 shadow-[8px_8px_0_0_#a91f25] sm:h-[560px] sm:gap-3 sm:p-3 lg:h-[650px] lg:shadow-[12px_12px_0_0_#a91f25]">
              <figure className="relative row-span-2 overflow-hidden">
                <Image
                  src="/mid4.jpeg"
                  alt="용스다이닝포차를 운영하는 셰프"
                  fill
                  sizes="(min-width: 1280px) 460px, (min-width: 1024px) 40vw, 62vw"
                  quality={80}
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#160f0d] to-transparent px-4 pb-4 pt-14 text-[10px] font-black tracking-[0.18em] text-[#f4e2c7] sm:text-xs">
                  THE CHEF · YONGS DINING
                </figcaption>
              </figure>

              <figure className="relative overflow-hidden">
                <Image
                  src="/mid3.jpeg"
                  alt="LP와 빈티지 소품으로 꾸민 용스다이닝포차 내부"
                  fill
                  sizes="(min-width: 1280px) 250px, (min-width: 1024px) 22vw, 34vw"
                  quality={75}
                  className="object-cover"
                />
                <figcaption className="absolute bottom-2 left-2 bg-[#211713]/85 px-2 py-1 text-[9px] font-black tracking-[0.14em] text-[#f4e2c7] sm:bottom-3 sm:left-3 sm:text-[10px]">
                  MUSIC &amp; OBJECTS
                </figcaption>
              </figure>

              <figure className="relative overflow-hidden">
                <Image
                  src="/mid5.jpeg"
                  alt="손님들과 인사하는 용스다이닝포차 셰프"
                  fill
                  sizes="(min-width: 1280px) 250px, (min-width: 1024px) 22vw, 34vw"
                  quality={75}
                  className="object-cover"
                />
                <figcaption className="absolute bottom-2 left-2 bg-[#a91f25]/90 px-2 py-1 text-[9px] font-black tracking-[0.14em] text-white sm:bottom-3 sm:left-3 sm:text-[10px]">
                  GOOD NIGHT, MORAN
                </figcaption>
              </figure>
            </div>

            <div
              aria-hidden
              className="font-display absolute -bottom-5 -right-1 rotate-2 border-2 border-[#211713] bg-[#e5b767] px-4 py-2 text-xs font-black tracking-[0.12em] text-[#211713] shadow-[4px_4px_0_0_#211713] sm:-right-4 sm:px-5 sm:py-3 sm:text-sm"
            >
              COOKED HERE · SHARED HERE
            </div>
          </div>
        </div>
      </section>

      <BlogPreviewSlider />
    </>
  )
}
