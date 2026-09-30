'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Navigation, Autoplay } from 'swiper/modules'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type Blog = {
    title: string
    src: string
    url: string
    position?: string
}

const blogs: Blog[] = [
    {
        title: '고객 A 블로그',
        src: '/blog1.jpeg',
        url: 'https://blog.naver.com/ogada_zip/223871106731',
    },
    {
        title: '고객 B 블로그',
        src: '/blog2.jpeg',
        url: 'https://blog.naver.com/awh1575/223864421218',
    },
    {
        title: '고객 c 블로그',
        src: '/blog3.jpg',
        url: 'https://blog.naver.com/on_wha/223804078945',
    },
    {
        title: '고객 d 블로그',
        src: '/blog4.jpeg',
        url: 'https://blog.naver.com/dingguul/223801321511',
    },
    {
        title: '고객 e 블로그',
        src: '/blog5.jpg',
        url: 'https://blog.naver.com/awh1575/223773147390',
    },
    {
        title: '고객 f 블로그',
        src: '/blog6.jpg',
        url: 'https://blog.naver.com/lovely_mingyo/223759722727',
    },
    {
        title: '고객 g 블로그',
        src: '/blog7.jpg',
        url: 'https://blog.naver.com/smrf2012/223675172717',
    },
]

export default function BlogPreviewSlider() {
    const prefersReducedMotion = usePrefersReducedMotion()

    return (
        <section aria-labelledby="review-title" className="mx-auto max-w-6xl py-12 sm:py-16">
            <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">
                        real reviews
                    </p>
                    <h2 id="review-title" className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                        소중한 고객님들의 리뷰
                    </h2>
                </div>
                <p className="hidden text-sm text-neutral-500 sm:block">사진을 누르면 블로그 후기로 이동합니다.</p>
            </div>
            <Swiper
                spaceBetween={14}
                navigation
                loop={!prefersReducedMotion}
                watchOverflow
                autoplay={prefersReducedMotion ? false : {
                    delay: 3600,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2.05,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2.1,
                        spaceBetween: 14,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                    },
                    1100: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation, Autoplay]}
                className="review-swiper w-full"
            >
                {blogs.map((blog, idx) => (
                    <SwiperSlide key={blog.url} className="h-auto">
                        <a
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${idx + 1}번째 고객 블로그 리뷰 보기`}
                            className="group block h-full"
                        >
                            <article className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/70 bg-neutral-200 shadow-[0_16px_36px_-24px_rgba(55,25,15,0.65)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_42px_-22px_rgba(55,25,15,0.7)]">
                                <Image
                                    src={blog.src}
                                    alt={blog.title}
                                    fill
                                    sizes="(max-width: 479px) 74vw, (max-width: 767px) 48vw, (max-width: 1099px) 33vw, 280px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    style={{ objectPosition: blog.position ?? 'center' }}
                                />
                                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                                <span className="absolute left-3 top-3 inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/50 bg-black/25 px-1.5 text-[10px] font-bold text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:h-8 sm:min-w-8 sm:px-2 sm:text-xs">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5">
                                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/75 sm:text-[11px] sm:tracking-[0.16em]">naver blog</p>
                                    <p className="mt-1 text-xs font-bold sm:text-base">고객 후기 보러 가기</p>
                                </div>
                            </article>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
