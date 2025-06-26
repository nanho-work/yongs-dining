'use client'

import React from 'react'

export default function DrinkMenu() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-nanum-myeongjo">
      <h1 className="text-2xl font-bold mb-6">DRINK MENU</h1>

      {/* DRINK */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">DRINK</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>소주 5.0 (참이슬, 처음처럼, 이즈백, 새로)</li>
          <li>청하 6.0</li>
          <li>토닉워터 2.0 / 레몬슬라이스 2.0 / 음료 2.0</li>
        </ul>
      </section>

      {/* HIGHBAILL */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">HIGHBAILL</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>하이볼 8.5 (요소 + 탄산 + 추가옵션 가능)</li>
          <li>위스키하이볼 8.0 (토퍼, 조니워커 가능)</li>
          <li>카스하이볼 8.5 (톡쏘면서 맥주의 맛을 살린 하이볼)</li>
          <li>HIT 엘리하이볼 8.5 (엘리키친의 시그니처 하이볼)</li>
          <li>파우스트 10.0 (진한 더블샷 느낌의 묵직한 하이볼)</li>
        </ul>
      </section>

      {/* BEER */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">BEER</h2>
        <p className="text-yellow-600 font-semibold mb-1">
          *맥주의 세부 메뉴가 궁금하시다면 직원에게 물어주세요
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>카스, 테라 5.0</li>
          <li>호가든 6.0 (부드럽고 은은한 향)</li>
          <li>파울라너 헤페 7.0 (풍부한 밀맥주의 고소함과 바나나향)</li>
          <li>BEST 곰표 라거 8.0 (부드러운 밀맛, 탄산감 적음)</li>
          <li>BEST 인디카 IPA 9.0 (홉의 쌉쌀함, 전형적인 IPA 스타일)</li>
          <li>HIT 워터멜론 위트에일 9.0 (수박향의 달콤함, 여름철 인기 메뉴)</li>
        </ul>
      </section>

      {/* BOTTLE BEER & TRADITIONAL */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">BOTTLE & TRADITIONAL</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>BEST 듀체스 드 브로고뉴(750ml) 33.0 (벨기에의 와일드에일)</li>
          <li>HIT 엘리치훈 크리스마스 맥주(300ml) 10.0</li>
          <li>HIT 엘리치훈 크리스마스 맥주(750ml) 30.0</li>
        </ul>
      </section>

      {/* 전통주 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">전통주</h2>
        <p className="text-yellow-600 font-semibold mb-1">
          *전통주의 세부 메뉴가 궁금하시다면 직원에게 물어주세요
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>옛날 동동주(750ml) 5.0</li>
          <li>홍천 생막걸리(750ml) 7.0</li>
          <li>부자 프리미엄 막걸리(750ml) 8.0</li>
          <li>BEST 부자 프리미엄 프리미엄 막걸리(750ml) 15.0</li>
          <li>HIT 해창 막걸리(750ml) 13.0</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-10">※ 일부 제품은 시즌 한정이거나 재고 상황에 따라 제공되지 않을 수 있습니다.</p>
    </div>
  )
}