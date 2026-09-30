export const STORE_INFO = {
  name: '용스다이닝포차',
  tagline: '두부요리에 반주 한 잔',
  description: '모란역 근처에서 직접 만든 두부요리, 전골, 보쌈과 함께 가볍게 머물기 좋은 감성포차입니다.',
  address: '경기도 성남시 중원구 제일로63번길 29, 102호',
  neighborhood: '성남 모란역 도보 5~10분',
  phone: '070-8287-0377',
  phoneHref: '07082870377',
  seats: '4인 테이블 2개 / 2인 테이블 3개 / 1인 바 좌석 3석',
} as const

export const STORE_LINKS = {
  reservation: 'https://open.kakao.com/o/sgozNuEh',
  instagram: 'https://www.instagram.com/yongs_dining_official/?igsh=NW9vdjV2ODVqdDAw#',
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_INFO.address)}`,
} as const

export const STORE_HOURS = {
  business: [
    { day: '평일', hours: '17:00~24:00' },
    { day: '금·토', hours: '17:00~01:00' },
    { day: '일요일', hours: '17:00~23:00' },
  ],
  lunch: [{ day: '목요일 ~ 일요일', hours: '12:00 ~ 15:00' }],
} as const

export const PARKING_OPTIONS = [
  '모란복지관 지하주차장',
  '모란시장 공영주차장',
  '중원구청 주차장',
] as const
