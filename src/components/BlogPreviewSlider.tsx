'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import Image from 'next/image'
import { Navigation, Autoplay } from 'swiper/modules'


type Blog = {
    title: string
    image: string
    url: string
}

const blogs: Blog[] = [
    {
        title: '고객 A 블로그',
        image: '/blog1.jpeg',
        url: 'https://blog.naver.com/ogada_zip/223871106731',
    },
    {
        title: '고객 B 블로그',
        image: '/blog2.jpeg',
        url: 'https://blog.naver.com/awh1575/223864421218',
    },
    {
        title: '고객 c 블로그',
        image: '/blog3.jpg',
        url: 'https://blog.naver.com/on_wha/223804078945',
    },
    {
        title: '고객 d 블로그',
        image: '/blog4.jpeg',
        url: 'https://blog.naver.com/dingguul/223801321511',
    },
    {
        title: '고객 e 블로그',
        image: '/blog5.jpg',
        url: 'https://blog.naver.com/awh1575/223773147390',
    },
    {
        title: '고객 f 블로그',
        image: '/blog6.jpg',
        url: 'https://blog.naver.com/lovely_mingyo/223759722727',
    },
    {
        title: '고객 g 블로그',
        image: '/blog7.jpg',
        url: 'https://blog.naver.com/smrf2012/223675172717',
    },
]

export default function BlogPreviewSlider() {
    return (
        <div className="max-w-6xl py-10 mx-auto">
            {/* 문구 추가 */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
                소중한 고객님들의 리뷰
            </h2>
            <Swiper
                spaceBetween={20}
                navigation
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2, // 모바일 기본
                    },
                    640: {
                        slidesPerView: 3, // 태블릿
                    },
                    1024: {
                        slidesPerView: 4, // 데스크탑
                    },
                }}
                modules={[Navigation, Autoplay]}
                className="w-full"
            >
                {blogs.map((blog, idx) => (
                    <SwiperSlide key={idx}>
                        <a href={blog.url} target="_blank" rel="noopener noreferrer" className="block">
                            <div className="aspect-[3/2] w-full overflow-hidden rounded-xl shadow-md hover:shadow-lg transition">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}