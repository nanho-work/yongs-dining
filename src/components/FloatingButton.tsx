'use client';

import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import instagramAnim from '@/animations/instagram.json';
import { STORE_LINKS } from '@/constants/store';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const FloatingButton = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-2 z-50 flex flex-col items-center gap-2 md:bottom-10 md:right-6 md:gap-4">
      <div className="flex flex-col items-center">
        <span className="sr-only text-[11px] text-gray-800 font-semibold mb-1 md:not-sr-only">예약하기</span>
        <a
          href={STORE_LINKS.reservation}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡 예약 링크 열기"
          className="flex h-11 w-11 items-center justify-center overflow-hidden"
        >
          <Image
            src="/kakao.png"
            alt="카카오 예약"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </a>
      </div>

      <a
        href={STORE_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="인스타그램 페이지 열기"
        className="flex h-12 w-12 items-center justify-center md:h-14 md:w-14"
      >
        <Lottie
          animationData={instagramAnim}
          loop={!prefersReducedMotion}
          autoplay={!prefersReducedMotion}
          style={{ width: '120%', height: '120%' }}
        />
      </a>

      <button
        type="button"
        aria-label="페이지 맨 위로 이동"
        onClick={handleScrollTop}
        className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-orange-300 bg-orange-100 shadow-sm"
      >
        <Image
          src="/top.png"
          alt="위로 이동"
          width={40}
          height={40}
          className="w-6 h-6 object-contain"
        />
      </button>
    </div>
  );
};

export default FloatingButton;
