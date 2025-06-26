'use client';

import React from 'react';
import { FaInstagram, FaArrowUp } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const FloatingButton = () => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-6 right-4 md:bottom-10 md:right-6 flex flex-col gap-3 md:gap-4 z-50">
            {/* 인스타그램 메뉴 */}
            <a
                href="https://www.instagram.com/yongs_dining_official/?igsh=NW9vdjV2ODVqdDAw#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="/social.png"
                    alt="Instagram"
                    className="w-12 h-12 md:w-14 md:h-14"
                />
            </a>
            <button
                onClick={handleScrollTop}
                className="bg-gray-700 text-white px-3 py-2 md:px-4 md:py-2 rounded-full shadow-lg hover:scale-110 transition-transform text-xs md:text-sm font-semibold flex flex-col items-center leading-tight"
            >
                <span className="text-base md:text-lg">⬆︎</span>
                <span>top</span>
            </button>
        </div>
    );
};

export default FloatingButton;