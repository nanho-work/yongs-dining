import Image from 'next/image'
import { ArrowUpRight, BookOpenText } from 'lucide-react'

const reviewStories = [
  {
    author: 'ogada_zip',
    title: '성남 모란에서 만난 얼큰한 한 상',
    subject: '리얼 한우두부전골 방문 기록',
    src: '/blog1.jpeg',
    url: 'https://blog.naver.com/ogada_zip/223871106731',
  },
  {
    author: 'on_wha',
    title: '한우와 두부가 든든하게 채운 저녁',
    subject: '대표 전골과 공간을 담은 후기',
    src: '/blog3.jpg',
    url: 'https://blog.naver.com/on_wha/223804078945',
  },
  {
    author: 'lovely_mingyo',
    title: 'LP와 조명 사이, 포차의 밤',
    subject: '매장 분위기를 담은 방문 기록',
    src: '/blog6.jpg',
    url: 'https://blog.naver.com/lovely_mingyo/223759722727',
  },
] as const

export default function BlogPreviewSlider() {
  return (
    <section
      aria-labelledby="review-stories-title"
      className="relative -mx-4 overflow-hidden bg-[#211713] px-4 py-16 text-[#f3dfc1] sm:-mx-6 sm:px-6 sm:py-24 xl:mx-0 xl:rounded-[2rem]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(243,223,193,0.45)_0.7px,transparent_0.7px)] [background-size:6px_6px]" />
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -right-8 top-5 select-none text-[8rem] font-black leading-none text-[#f3dfc1]/[0.04] sm:text-[13rem]"
      >
        記錄
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-9 grid gap-7 border-t border-[#d8ae6b]/60 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.48fr)] md:items-end sm:mb-12">
          <header>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#e3b66d]">
              <BookOpenText size={16} aria-hidden />
              Real visit notes / 03
            </p>
            <h2
              id="review-stories-title"
              className="font-display mt-3 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.04em] text-[#fff3df] sm:text-5xl lg:text-6xl"
            >
              광고 문구 대신,
              <br />
              다녀간 분들의 장면.
            </h2>
          </header>

          <div className="border-l-2 border-[#a91f25] pl-5">
            <p className="text-sm leading-7 text-[#d7c3a8] sm:text-base">
              실제 방문자가 네이버 블로그에 남긴 사진과 기록입니다.
              계정명과 원문 링크를 함께 표시했습니다.
            </p>
            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#a98d69]">
              Source · Naver Blog
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:grid-rows-2">
          {reviewStories.map((story, storyIndex) => {
            const isFeatured = storyIndex === 0

            return (
              <article
                key={story.url}
                className={
                  isFeatured
                    ? 'group col-span-2 overflow-hidden border border-[#dfbb7c]/45 bg-[#130d0b] lg:col-span-7 lg:row-span-2'
                    : 'group col-span-1 overflow-hidden border border-[#dfbb7c]/45 bg-[#130d0b] lg:col-span-5'
                }
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${story.author}님의 네이버 블로그 방문 후기 보기`}
                  className="relative block h-full min-h-52 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ef3c3f]"
                >
                  <div
                    className={
                      isFeatured
                        ? 'relative aspect-[16/11] min-h-72 lg:h-full lg:min-h-[540px]'
                        : 'relative aspect-square min-h-52 sm:aspect-[16/9] lg:h-full lg:min-h-[258px]'
                    }
                  >
                    <Image
                      src={story.src}
                      alt=""
                      fill
                      sizes={
                        isFeatured
                          ? '(min-width: 1280px) 680px, (min-width: 1024px) 58vw, 100vw'
                          : '(min-width: 1280px) 470px, (min-width: 1024px) 40vw, 50vw'
                      }
                      quality={75}
                      className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120c0a] via-[#120c0a]/5 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 lg:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#e6b96e] sm:text-xs">
                        @{story.author}
                      </p>
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-[#a91f25] text-white sm:h-10 sm:w-10">
                        <ArrowUpRight size={16} aria-hidden />
                      </span>
                    </div>
                    <h3
                      className={
                        isFeatured
                          ? 'font-display mt-2 text-xl font-black leading-tight text-white sm:text-3xl'
                          : 'font-display mt-2 text-sm font-black leading-tight text-white sm:text-xl'
                      }
                    >
                      {story.title}
                    </h3>
                    <p className="mt-2 hidden text-xs leading-5 text-[#d9c6aa] sm:block">
                      {story.subject}
                    </p>
                  </div>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
