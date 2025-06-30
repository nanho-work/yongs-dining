// src/components/Location.tsx
'use client'

import Image from 'next/image'
import React from 'react'

const prefix = process.env.NODE_ENV === 'production' ? '/yongs-dining' : ''

export default function Location() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-10 text-center">매장안내</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* 좌측: 매장 이미지 */}
                <div className="w-full relative">
                    <Image
                        src={`${prefix}/location.jpeg`}
                        alt="매장 이미지"
                        width={800} // 이미지 원본 사이즈에 맞게 조정
                        height={600}
                        className="object-contain w-full h-auto rounded-lg shadow"
                    />
                </div>

                <div className="space-y-0 divide-y divide-gray-200 bg-white rounded-lg   text-sm text-gray-800">
                    {/* 위치 */}
                    <div className="flex gap-x-4 items-start p-4">
                        <span className="w-20 font-bold text-gray-500">위치</span>
                        <span>경기 성남시 중원구 제일로63번길 29 102호</span>
                    </div>

                    {/* 영업시간 */}
                    <div className="flex gap-x-4 items-start p-4 ">
                        <span className="w-20 font-bold text-gray-500">영업시간</span>
                        <div className="overflow-x-auto w-full">
                            <table className="min-w-[300px]  text-sm text-center border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700">
                                        <th className="px-3 py-2 border-b border-gray-200">요 일</th>
                                        <th className="px-3 py-2 border-b border-gray-200">영업시간</th>
                                        <th className="px-3 py-2 border-b border-gray-200">라스트오더</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-3 py-2 border-b">월~목</td>
                                        <td className="px-3 py-2 border-b">18:00 ~ 02:00</td>
                                        <td className="px-3 py-2 border-b">00:30</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border-b">금~토</td>
                                        <td className="px-3 py-2 border-b">17:00 ~ 05:00</td>
                                        <td className="px-3 py-2 border-b">03:30</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border-b">일</td>
                                        <td className="px-3 py-2 border-b">17:00 ~ 24:00</td>
                                        <td className="px-3 py-2 border-b">22:30</td>
                                    </tr>

                                </tbody>
                            </table>
                            <p className="text-xs text-gray-500 mt-2">※ 평일 12시 이후는 시간 변동 / 전화 문의</p>
                        </div>
                    </div>

                    {/* 주차 */}
                    <div className="flex gap-x-4 items-start p-4">
                        <span className="w-20 font-bold text-gray-500">주차</span>
                        <div className="space-y-0.5">
                            <div>모란복지관지하주차장</div>
                            <div>모란시장공영주차장</div>
                            <div>중원구청주차장 이용</div>
                            <div className="text-xs text-gray-500">(50분 1,000원 / 추가 10분당 200원 / 최대 10,000원)</div>
                        </div>
                    </div>

                    {/* 연락처 */}
                    <div className="flex gap-x-4 items-start p-4">
                        <span className="w-20 font-bold text-gray-500">연락처</span>
                        <span>070 8287 0377</span>
                    </div>

                    {/* 좌석 */}
                    <div className="flex gap-x-4 items-start p-4">
                        <span className="w-20 font-bold text-gray-500">좌석</span>
                        <span>1인석 / 입식 / 연인석</span>
                    </div>
                </div>
            </div>
        </div>
    )
}