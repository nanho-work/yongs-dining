'use client'

import Image from 'next/image'
import { MapPin, MessageCircle, Pause, Play, Utensils } from 'lucide-react'
import { useState } from 'react'
import { HOME_HERO_IMAGES, HOME_HERO_POINTS } from '@/constants/home'
import { STORE_INFO, STORE_LINKS } from '@/constants/store'
import { useAutoCarousel } from '@/hooks/useAutoCarousel'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ActionLink } from '@/components/ui/ActionLink'
import { cn } from '@/lib/cn'

export default function HomeHero() {
  const [showRemainingImages, setShowRemainingImages] = useState(false)
  const [readyImages, setReadyImages] = useState<boolean[]>(() =>
    HOME_HERO_IMAGES.map(() => false)
  )
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [isCarouselInteracting, setIsCarouselInteracting] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const imagesAreReady = readyImages.every(Boolean)
  const isPlaybackStopped = prefersReducedMotion || isCarouselPaused
  const { index, goTo } = useAutoCarousel({
    length: HOME_HERO_IMAGES.length,
    interval: 5200,
    paused:
      !imagesAreReady || prefersReducedMotion || isCarouselPaused || isCarouselInteracting,
  })
  const visibleIndex = showRemainingImages ? index : 0
  const activeImage = HOME_HERO_IMAGES[visibleIndex]

  const selectImage = (imageIndex: number) => {
    if (!readyImages[imageIndex]) return
    setIsCarouselPaused(true)
    goTo(imageIndex)
  }

  const markImageReady = (imageIndex: number) => {
    setReadyImages((current) =>
      current.map((isReady, currentIndex) => (currentIndex === imageIndex ? true : isReady))
    )

    if (imageIndex === 0) setShowRemainingImages(true)
  }

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate -mx-4 overflow-hidden bg-[#211713] p-2 text-[#f5e6cf] sm:-mx-6 sm:p-4 xl:mx-0 xl:rounded-[2rem]"
      onMouseEnter={() => setIsCarouselInteracting(true)}
      onMouseLeave={() => setIsCarouselInteracting(false)}
      onFocusCapture={() => setIsCarouselInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setIsCarouselInteracting(false)
        }
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(245,230,207,0.45)_0.7px,transparent_0.7px)] [background-size:6px_6px]" />

      <div className="relative min-h-[650px] overflow-hidden border border-[#d9ae68]/50 bg-neutral-950 sm:min-h-[680px] lg:min-h-[660px]">
        {HOME_HERO_IMAGES.map((image, imageIndex) => {
          if (imageIndex > 0 && !showRemainingImages) return null

          const isActive = imageIndex === visibleIndex

          return (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={imageIndex === 0}
              aria-hidden={!isActive}
              sizes="(min-width: 1280px) 1240px, 100vw"
              onLoad={() => markImageReady(imageIndex)}
              onError={() => markImageReady(imageIndex)}
              className={cn(
                'object-cover object-center transition-opacity duration-1000 motion-reduce:transition-none',
                isActive ? 'opacity-100' : 'opacity-0'
              )}
            />
          )
        })}

        <div className="absolute inset-0 bg-gradient-to-r from-[#130d0b]/90 via-[#211713]/42 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#130d0b]/85 via-transparent to-[#130d0b]/35" />
        <div className="absolute inset-y-0 left-0 w-1.5 bg-[#b51f26]" />

        <div className="absolute left-5 top-5 z-20 flex items-center gap-3 text-[10px] font-black tracking-[0.22em] text-[#f4dfbf] sm:left-8 sm:top-8 sm:text-xs">
          <span className="bg-[#b51f26] px-3 py-2 text-white">MORAN</span>
          <span aria-hidden className="h-px w-8 bg-[#d9ae68]" />
          <span>{activeImage.eyebrow}</span>
        </div>

        <div
          role="group"
          aria-roledescription="carousel controls"
          aria-label="대표 이미지 선택"
          className="absolute right-4 top-16 z-20 flex items-center gap-1.5 sm:right-7 sm:top-7"
        >
          {HOME_HERO_IMAGES.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              aria-label={`${imageIndex + 1}번째 대표 이미지 보기`}
              aria-current={imageIndex === visibleIndex}
              disabled={!readyImages[imageIndex]}
              onClick={() => selectImage(imageIndex)}
              className={cn(
                'inline-flex h-11 min-w-11 items-center justify-center border text-xs font-black tabular-nums transition-colors disabled:cursor-wait disabled:opacity-45',
                imageIndex === visibleIndex
                  ? 'border-[#f4dfbf] bg-[#f4dfbf] text-[#211713]'
                  : 'border-white/45 bg-[#211713]/65 text-white hover:bg-[#211713]'
              )}
            >
              {String(imageIndex + 1).padStart(2, '0')}
            </button>
          ))}
          <button
            type="button"
            aria-label={
              prefersReducedMotion
                ? '동작 줄이기 설정으로 대표 이미지 자동 전환 정지됨'
                : isCarouselPaused
                  ? '대표 이미지 자동 전환 재생'
                  : '대표 이미지 자동 전환 정지'
            }
            aria-pressed={isPlaybackStopped}
            disabled={prefersReducedMotion}
            onClick={() => setIsCarouselPaused((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/45 bg-[#211713]/65 text-white transition-colors hover:bg-[#211713] disabled:cursor-default disabled:opacity-60"
          >
            {isPlaybackStopped ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
          </button>
        </div>

        <div className="relative z-10 flex min-h-[650px] items-end px-5 pb-6 pt-24 sm:min-h-[680px] sm:px-9 sm:pb-9 lg:min-h-[660px] lg:px-12 lg:pb-12">
          <div className="relative w-full max-w-2xl border border-[#e0ba78]/65 bg-[#1d1411]/[0.93] p-5 shadow-[8px_8px_0_0_#a91f25] backdrop-blur-sm sm:p-8 lg:p-10 lg:shadow-[12px_12px_0_0_#a91f25]">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[#e5bd78] sm:text-sm">
              <MapPin size={15} aria-hidden />
              {STORE_INFO.neighborhood}
            </p>

            <h1
              id="home-hero-title"
              aria-label={STORE_INFO.name}
              className="font-display font-black leading-[0.88] tracking-[-0.055em]"
            >
              <span className="block text-[clamp(2.8rem,10vw,5.5rem)]">용스다이닝</span>
              <span className="mt-2 block text-[clamp(3.5rem,13vw,7rem)] text-[#ef3c3f]">포차</span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-bold leading-7 text-[#fff6e9] sm:text-xl sm:leading-8">
              두부 한 모, 술 한 잔,
              <br className="sm:hidden" /> 오래 남는 모란의 밤.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#d8c9b5] sm:text-base">
              {STORE_INFO.tagline}. 익숙한 포차의 온기에 셰프의 한 끗을 더했습니다.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-y border-[#f2d7aa]/20 py-3 text-xs font-semibold text-[#ead6b8] sm:text-sm">
              {HOME_HERO_POINTS.map((point, pointIndex) => (
                <span key={point} className="inline-flex items-center gap-2">
                  <span className="font-black text-[#ef3c3f]" aria-hidden>
                    {String(pointIndex + 1).padStart(2, '0')}
                  </span>
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              <ActionLink
                href="/menu"
                variant="secondary"
                icon={<Utensils size={18} />}
                className="!rounded-none !px-3 sm:min-w-36 sm:!px-4"
              >
                메뉴 보기
              </ActionLink>
              <ActionLink
                href={STORE_LINKS.reservation}
                external
                variant="primary"
                icon={<MessageCircle size={18} />}
                className="!rounded-none !bg-[#b51f26] !px-3 sm:min-w-36 sm:!px-4"
              >
                예약하기
              </ActionLink>
              <ActionLink
                href={STORE_LINKS.map}
                external
                variant="outline"
                icon={<MapPin size={18} />}
                className="col-span-2 !rounded-none sm:min-w-32"
              >
                길찾기
              </ActionLink>
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#bda98f] sm:text-xs">
              {activeImage.caption}
            </p>
          </div>
        </div>

        <div
          aria-hidden
          className="font-display absolute bottom-5 right-5 hidden h-28 w-28 rotate-6 items-center justify-center rounded-full border border-[#f4dfbf]/70 text-center text-xs font-black leading-5 tracking-[0.12em] text-[#f4dfbf] lg:flex"
        >
          CHEF MADE
          <br />
          TOFU &amp;
          <br />
          NIGHT
        </div>
      </div>

      <div
        aria-hidden
        className="relative flex min-h-9 items-center justify-center overflow-hidden border-x border-b border-[#d9ae68]/50 bg-[#b51f26] px-4 text-center text-[10px] font-black tracking-[0.18em] text-white sm:text-xs"
      >
        CHEF&apos;S POCHA · HANDMADE TOFU · MORAN NIGHT DINING
      </div>
    </section>
  )
}
