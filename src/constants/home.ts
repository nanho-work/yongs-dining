import { STORE_INFO } from '@/constants/store'

export const HOME_HERO_IMAGES = [
  {
    src: '/hero-real-hanwoo-tofu-jeongol.webp',
    alt: '용스다이닝포차 리얼 한우두부전골',
  },
  {
    src: '/hero-boiled-pork-tofu.webp',
    alt: '용스다이닝포차 수제 두부보쌈',
  },
] as const

export const HOME_HERO_POINTS = [
  STORE_INFO.neighborhood,
  '대표 메뉴 한우두부전골',
] as const

export const FEATURED_MENU_IDS = [
  'real-hanwoo-tofu-jeongol',
  'bomb-tofu-duruchigi',
  'boiled-pork-tofu',
] as const
