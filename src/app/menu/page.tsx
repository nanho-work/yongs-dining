'use client';

import { useState } from 'react';
import MenuTabs from '@/components/MenuTabs';
import MainTofuMenu from '@/components/MainTofuMenu';
import MainEtcMenu from '@/components/MainEtcMenu';
import SideMenu from '@/components/SideMenu';
import DrinkMenu from '@/components/DrinkMenu';
import AllMenu from '@/components/Menu'; // 선택사항

export default function MenuPage() {
  const [selected, setSelected] = useState('all');

  return (
    <main className="max-w-6xl mx-auto px-4 py-20">

      {/* 탭바 컴포넌트 */}
      <MenuTabs selected={selected} onSelect={setSelected} />

      {/* 탭 선택에 따른 메뉴 컴포넌트 분기 */}
      {selected === 'all' && <AllMenu />}
      {selected === 'main-tofu' && <MainTofuMenu />}
      {selected === 'main-etc' && <MainEtcMenu />}
      {selected === 'side' && <SideMenu />}
      {selected === 'drink' && <DrinkMenu />}
    </main>
  );
}