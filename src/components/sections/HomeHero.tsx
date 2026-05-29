'use client'

import Image from 'next/image'
import { MapPin, MessageCircle, Utensils } from 'lucide-react'
import { HOME_HERO_IMAGES, HOME_HERO_POINTS } from '@/constants/home'
import { STORE_INFO, STORE_LINKS } from '@/constants/store'
import { useAutoCarousel } from '@/hooks/useAutoCarousel'
import { ActionLink } from '@/components/ui/ActionLink'
import { cn } from '@/lib/cn'

export default function HomeHero() {
  const { index, goTo } = useAutoCarousel({
    length: HOME_HERO_IMAGES.length,
    interval: 5200,
  })

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate -mx-4 min-h-[540px] overflow-hidden bg-neutral-950 sm:-mx-6 sm:h-[calc(100svh-132px)] sm:max-h-[720px] xl:mx-0"
    >
      {HOME_HERO_IMAGES.map((image, imageIndex) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          loading={imageIndex === 0 ? 'eager' : 'lazy'}
          sizes="100vw"
          className={cn(
            'object-cover object-center transition-opacity duration-1000',
            imageIndex === index ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/54 to-neutral-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/82 via-transparent to-neutral-950/12" />

      <div className="relative z-10 flex min-h-[540px] h-full flex-col justify-end px-5 pb-8 pt-16 sm:px-10 sm:pb-12 lg:px-14">
        <div className="max-w-3xl text-white">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-red-200">
            <MapPin size={16} aria-hidden />
            {STORE_INFO.neighborhood}
          </p>

          <h1
            id="home-hero-title"
            className="text-4xl font-black tracking-normal sm:text-6xl lg:text-7xl"
          >
            {STORE_INFO.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white sm:text-2xl sm:leading-10">
            {STORE_INFO.tagline}, 모란의 감성포차.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-white/90">
            {HOME_HERO_POINTS.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-3 py-2 backdrop-blur"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink
              href="/menu"
              variant="secondary"
              icon={<Utensils size={18} />}
              className="sm:min-w-36"
            >
              메뉴 보기
            </ActionLink>
            <ActionLink
              href={STORE_LINKS.reservation}
              external
              variant="primary"
              icon={<MessageCircle size={18} />}
              className="sm:min-w-36"
            >
              카카오 예약
            </ActionLink>
            <ActionLink
              href={STORE_LINKS.map}
              external
              variant="outline"
              icon={<MapPin size={18} />}
              className="sm:min-w-36"
            >
              길찾기
            </ActionLink>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {HOME_HERO_IMAGES.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              aria-label={`${imageIndex + 1}번째 대표 이미지 보기`}
              aria-current={imageIndex === index}
              onClick={() => goTo(imageIndex)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                imageIndex === index ? 'w-9 bg-red-500' : 'w-2.5 bg-white/70 hover:bg-white'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
