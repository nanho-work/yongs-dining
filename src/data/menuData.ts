export type MenuCategory = 'main-tofu' | 'main-etc' | 'side' | 'set'

export type MenuItem = {
  id: string
  title: string
  description: string
  price: string
  images: string[]
  category: MenuCategory
  limited?: boolean
  badge?: string
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'real-hanwoo-tofu-jeongol',
    title: '리얼 한우두부전골',
    description:
      '“최고의요리비결” 김인숙 셰프와 용스 콜라보 메뉴\n직접 삶은 한우, 고소한 순두부, 모두부, 민물새우, 꽃게\n진하고 얼큰한 맛',
    price: '28,000원 / 혼술 15,000원',
    images: ['main_doofu-리얼한우두부전골.png'],
    badge: 'SIGNATURE',
    category: 'main-tofu',
  },
  {
    id: 'haejang-tofu-jeongol',
    title: '해장 두부전골',
    description: '모두부, 황태, 알배기, 민물새우, 꽃게\n해장이 되는 칼칼하고 시원한 맛',
    price: '28,000원 / 혼술 15,000원',
    images: ['main_doofu-해장두부전골.png'],
    category: 'main-tofu',
  },
  {
    id: 'boiled-pork-tofu',
    title: '수제 두부보쌈',
    description: '직접 삶은 오삼겹, 모두부, 수제짱아치, 무생채\n반주할 때 딱 좋은 메뉴',
    price: '30,000원',
    images: ['main_doofu-수제두부보쌈.jpeg'],
    limited: true,
    category: 'main-tofu',
  },
  {
    id: 'bomb-tofu-duruchigi',
    title: '300g 폭탄 두부두루치기',
    description: '들기름으로 구운 모두부, 우삼겹\n밥과 술을 부르는 중독적인 맛',
    price: '28,000원 / 혼술 15,000원',
    images: ['main_doofu-폭탄두부두루치기.png'],
    badge: 'BEST',
    category: 'main-tofu',
  },
  {
    id: 'spicy-tofu-jjageuli',
    title: '얼큰두부짜글이',
    description: '모두부, 스팸, 물만두, 감자를 짜글짜글 지져낸\n칼칼한 맛',
    price: '25,000원 / 혼술 15,000원',
    images: ['main_doofu-얼큰두부짜글이.png'],
    badge: 'HIT',
    category: 'main-tofu',
  },
  {
    id: 'homemade-tofu-kimchi',
    title: '수제 두부김치',
    description: '두툼한 수제 모두부와 우삼겹, 신김치를 곁들인 메뉴',
    price: '18,000원',
    images: ['main_doofu-통두부김치.png'],
    category: 'main-tofu',
  },
  {
    id: '10cm-tofu-wanza',
    title: '10센치두부완자',
    description:
      '10cm 수제 두부완자\n겉은 노릇하고 속은 촉촉한 식감\n술안주로도, 든든한 곁들이 메뉴로도 좋은 메뉴',
    price: '20,000원',
    images: ['main_doofu-10cm.png'],
    category: 'main-tofu',
  },
  {
    id: 'squid-muchim-flat-dumpling',
    title: '오징어초무침&대구식납작만두',
    description: '새콤달콤 오징어초무침 + 담백한 대구식 납작만두 조합',
    price: '23,000원',
    images: ['sub_main-oh.png'],
    category: 'main-etc',
  },
  {
    id: 'pork-rib-salad',
    title: '목살 갈비 샐러드(270g)',
    description: '"최고의요리비결" 신효섭 셰프의 특제소스\n불향과 새콤달콤 참나물 무침',
    price: '20,000원',
    images: ['sub_main-목살갈비샐러드.png'],
    category: 'main-etc',
  },
  {
    id: 'hongkong-gyoza',
    title: '홍콩눈꽃교자',
    description: '겉바속촉 교자 + 치즈 풍미',
    price: '15,000원',
    images: ['sub_main-홍콩눈꽃교자.png'],
    badge: 'HIT',
    category: 'main-etc',
  },
  {
    id: 'squid-sundae-nurungji',
    title: '대포항 누룽지 오징어순대',
    description: '바삭하게 구운 오징어순대와 양배추 초무침',
    price: '25,000원',
    images: ['sub_main-대포항오징어누룽지순대.png'],
    category: 'main-etc',
  },
  {
    id: 'gangwon-dried-pollack',
    title: '강원도빠삭먹태구이',
    description: '고성 먹태를 빠삭하게 구운 애주가 필수 안주',
    price: '16,000원',
    images: ['sub_main-강원도빠삭먹태구이.png'],
    category: 'main-etc',
  },
  {
    id: 'hotteok-icecream',
    title: '꿀호떡 아이스크림',
    description: '호떡 + 바닐라 아이스크림 + 시나몬 파우더 (2pc)',
    price: '9,000원',
    images: ['side-호떡아이스크림.png'],
    badge: 'BEST',
    category: 'side',
  },
  {
    id: 'manhattan-canape',
    title: '맨하탄카나페',
    description: '크래커, 크림치즈, 블루베리, 꿀의 상큼한 조합',
    price: '10,000원',
    images: ['side-맨하탄카나페.png'],
    category: 'side',
  },
  {
    id: 'haejang-muksabal',
    title: '해장묵사발',
    description: '수제 도토리묵에 살얼음 동동 육수',
    price: '9,000원',
    images: ['side-해장묵사발.png'],
    category: 'side',
  },
  {
    id: 'perilla-tofu-grill',
    title: '들기름두부구이',
    description: '들기름에 구운 고소한 두부',
    price: '8,000원',
    images: ['side-들기름두부구이.png'],
    category: 'side',
  },
  {
    id: 'yongs-set',
    title: '용스 세트메뉴 (혼술 / 2인 / 3인)',
    description:
      '• 혼술세트 20,000원: 전골 + 교자 2피스 (1인)\n• 2인세트 35,000원: 전골 + 교자 5피스\n• 3인세트 40,000원: 전골 + 교자 10피스\n* 세트메뉴 따로 주문 시 할인 적용 불가',
    price: '세트 가격은 상세 설명 참고',
    images: ['main_doofu-리얼한우두부전골.png'],
    badge: 'SET',
    category: 'set',
  },
]
