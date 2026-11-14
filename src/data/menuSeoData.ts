export type MenuSeoDetail = {
  slug: string
  menuId: string
  summary: string
  taste: string
  recommendedFor: readonly string[]
  highlights: readonly string[]
  pairing: string
  question: string
  answer: string
}

export const MENU_SEO_DETAILS: readonly MenuSeoDetail[] = [
  {
    slug: 'real-hanwoo-tofu-jeongol',
    menuId: 'real-hanwoo-tofu-jeongol',
    summary: '직접 삶은 한우와 순두부, 모두부, 민물새우와 꽃게를 함께 끓여 깊고 얼큰한 국물 맛을 내는 용스다이닝의 대표 전골입니다.',
    taste: '진하고 얼큰한 국물과 부드러운 수제두부의 조합',
    recommendedFor: ['용스다이닝 첫 방문', '따뜻한 국물 안주', '혼술 또는 2인 술자리'],
    highlights: ['85분간 삶은 한우', '순두부와 모두부', '민물새우와 꽃게의 감칠맛'],
    pairing: '소주와 막걸리처럼 진한 국물에 잘 어울리는 술과 함께 즐기기 좋습니다.',
    question: '모란역에서 한우두부전골을 먹을 수 있는 곳이 있나요?',
    answer: '용스다이닝에서는 직접 삶은 한우와 수제두부를 함께 끓인 리얼 한우두부전골을 판매합니다. 일반 메뉴와 혼술 메뉴가 있어 인원에 맞게 주문할 수 있습니다.',
  },
  {
    slug: 'bomb-tofu-duruchigi',
    menuId: 'bomb-tofu-duruchigi',
    summary: '들기름에 노릇하게 구운 300g 모두부와 우삼겹을 매콤하게 볶아 밥과 술을 함께 부르는 두부두루치기입니다.',
    taste: '들기름의 고소함과 매콤한 양념, 우삼겹의 풍미',
    recommendedFor: ['매콤한 술안주', '두부와 고기를 함께 먹고 싶을 때', '혼술 또는 2~4인 술자리'],
    highlights: ['수제 모두부 300g', '들기름에 구운 두부', '우삼겹과 매콤한 양념'],
    pairing: '깔끔한 소주나 시원한 맥주와 함께 즐기기 좋은 메뉴입니다.',
    question: '모란역에서 두부두루치기를 잘하는 술집은 어디인가요?',
    answer: '용스다이닝의 300g 폭탄 두부두루치기는 들기름에 구운 수제두부와 우삼겹을 매콤하게 볶은 대표 메뉴입니다. 혼술용 구성도 준비되어 있습니다.',
  },
  {
    slug: 'boiled-pork-tofu',
    menuId: 'boiled-pork-tofu',
    summary: '직접 삶은 오삼겹과 수제 모두부, 장아찌와 무생채를 한 접시에 담아 여러 맛을 함께 즐기는 한정 판매 메뉴입니다.',
    taste: '담백한 수육과 고소한 두부, 새콤한 곁들임의 균형',
    recommendedFor: ['반주 메뉴', '데이트와 2~4인 술자리', '전골이 아닌 담백한 안주'],
    highlights: ['직접 삶은 오삼겹', '수제 모두부', '수제 장아찌와 무생채'],
    pairing: '소주, 막걸리, 와인 등 취향에 맞는 주류와 폭넓게 어울립니다.',
    question: '용스다이닝 두부보쌈은 어떤 메뉴인가요?',
    answer: '수제 두부보쌈은 직접 삶은 오삼겹과 수제 모두부를 장아찌, 무생채와 함께 즐기는 메뉴입니다. 예약 및 한정 판매 여부를 방문 전에 확인하는 것이 좋습니다.',
  },
  {
    slug: '10cm-tofu-wanza',
    menuId: '10cm-tofu-wanza',
    summary: '수제두부를 활용해 지름 10cm 크기로 만든 두부완자로, 겉은 노릇하고 속은 촉촉하게 조리합니다.',
    taste: '겉은 고소하고 노릇하며 속은 부드럽고 촉촉한 식감',
    recommendedFor: ['색다른 두부요리', '든든한 술안주', '여럿이 나누기 좋은 메뉴'],
    highlights: ['10cm 크기의 수제 완자', '수제두부 사용', '겉바속촉 식감'],
    pairing: '막걸리나 맥주처럼 고소한 음식과 잘 어울리는 술을 추천합니다.',
    question: '두부로 만든 완자 메뉴도 있나요?',
    answer: '용스다이닝에는 수제두부로 만든 10센치두부완자가 있습니다. 겉은 노릇하고 속은 촉촉해 술안주와 든든한 곁들임 메뉴로 즐길 수 있습니다.',
  },
  {
    slug: 'spicy-tofu-jjageuli',
    menuId: 'spicy-tofu-jjageuli',
    summary: '모두부와 스팸, 물만두, 감자를 자작하고 칼칼하게 끓여낸 두부짜글이입니다.',
    taste: '자작한 국물과 칼칼한 양념, 익숙하고 든든한 맛',
    recommendedFor: ['칼칼한 국물 안주', '밥과 술을 함께 즐길 때', '혼술 메뉴'],
    highlights: ['수제 모두부', '스팸과 물만두', '감자를 넣은 자작한 국물'],
    pairing: '소주나 맥주와 편하게 즐기기 좋은 든든한 메뉴입니다.',
    question: '모란역에서 얼큰한 두부짜글이를 먹을 수 있나요?',
    answer: '용스다이닝의 얼큰두부짜글이는 모두부와 스팸, 물만두, 감자를 칼칼하게 끓여낸 메뉴입니다. 일반 메뉴와 혼술 메뉴로 주문할 수 있습니다.',
  },
  {
    slug: 'homemade-tofu-kimchi',
    menuId: 'homemade-tofu-kimchi',
    summary: '두툼한 수제 모두부에 우삼겹과 볶은 신김치를 곁들여 익숙한 두부김치를 용스다이닝 방식으로 구성했습니다.',
    taste: '고소한 두부와 새콤하게 익은 김치, 우삼겹의 풍미',
    recommendedFor: ['전통적인 한식 안주', '가볍게 반주할 때', '두부 본연의 맛을 즐길 때'],
    highlights: ['두툼한 수제 모두부', '우삼겹', '신김치'],
    pairing: '소주와 막걸리 등 한식 안주에 어울리는 술과 잘 맞습니다.',
    question: '용스다이닝에는 수제 두부김치가 있나요?',
    answer: '네. 두툼한 수제 모두부와 우삼겹, 신김치를 함께 내는 수제 두부김치를 판매합니다. 두부 본연의 고소한 맛을 즐기기 좋은 한식 술안주입니다.',
  },
] as const

export const getMenuSeoDetail = (slug: string) =>
  MENU_SEO_DETAILS.find((detail) => detail.slug === slug)

export const getMenuSeoDetailByMenuId = (menuId: string) =>
  MENU_SEO_DETAILS.find((detail) => detail.menuId === menuId)
