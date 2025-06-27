'use client';

import { useState } from 'react';

import Menu from '@/components/Menu'; // 선택사항

export default function MenuPage() {
  const [selected, setSelected] = useState('all');

  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <Menu />
    </main>
  );
}