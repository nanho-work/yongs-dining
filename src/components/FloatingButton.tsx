'use client';

import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import instagramAnim from '@/animations/instagram.json';

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : '';

const FloatingButton = () => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-6 right-4 md:bottom-10 md:right-6 flex flex-col gap-3 md:gap-4 z-50 items-center">
            {/* 카카오톡 예약 버튼 + 텍스트 */}
            <div className="flex flex-col items-center">
                <span className="text-[11px] text-gray-800 font-semibold mb-1">예약하기</span>
                <a
                    href="https://open.kakao.com/o/sgozNuEh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex justify-center items-center overflow-hidden"
                >
                    <Image
                        src={`${prefix}/kakao.png`}
                        alt="카카오 예약"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                    />
                </a>
            </div>

            {/* 인스타그램 버튼 */}
            <a
                href="https://www.instagram.com/yongs_dining_official/?igsh=NW9vdjV2ODVqdDAw#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex justify-center items-center"
            >
                <Lottie
                    animationData={instagramAnim}
                    loop
                    autoplay
                    style={{ width: '120%', height: '120%' }}
                />
            </a>

            {/* 스크롤 탑 버튼 */}
            <button
                onClick={handleScrollTop}
                className="w-9 h-9 flex justify-center items-center rounded-full bg-orange-100 border border-orange-300 shadow-sm overflow-hidden"
            >
                <Image
                    src={`${prefix}/top.png`}
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