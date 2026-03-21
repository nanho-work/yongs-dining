export type DrinkCategory = 'DRINK' | 'HIGHBALL' | 'BEER' | '전통주'

export type DrinkItem = {
  id: string
  title: string
  description: string
  price: string
  image: string
  category: DrinkCategory
  badge?: string
}

export const DRINK_CATEGORY_ORDER: DrinkCategory[] = ['DRINK', 'HIGHBALL', 'BEER', '전통주']

export const DRINK_CATEGORY_LABEL: Record<DrinkCategory, string> = {
  DRINK: '소주 · 기타',
  HIGHBALL: '하이볼',
  BEER: '맥주',
  전통주: '전통주',
}

export const DRINK_ITEMS: DrinkItem[] = [
  { id: 'chamisul', title: '참이슬', description: '', price: '5,000원', image: 'drink-chamisul.png', category: 'DRINK' },
  { id: 'cheoeum', title: '처음처럼', description: '', price: '5,000원', image: 'drink-cheoeumcheoreom.png', category: 'DRINK' },
  { id: 'jinro', title: '진로', description: '', price: '5,000원', image: 'drink-jinro.png', category: 'DRINK' },
  { id: 'saero', title: '새로', description: '', price: '5,000원', image: 'drink-saero.png', category: 'DRINK' },
  { id: 'cheongha', title: '청하', description: '', price: '6,000원', image: 'drink-cheongha.png', category: 'DRINK' },
  { id: 'tonic', title: '토닉워터', description: '', price: '2,000원', image: 'drink-tonic-water.png', category: 'DRINK' },
  { id: 'lemon-slice', title: '레몬 슬라이스', description: '', price: '2,000원', image: 'coming-soon.png', category: 'DRINK' },
  { id: 'soft-drink', title: '음료', description: '', price: '2,000원', image: 'coming-soon.png', category: 'DRINK' },

  {
    id: 'whisky-highball',
    title: '위스키 하이볼',
    description: '(진저, 토닉 택 가능)',
    price: '8,000원',
    image: 'highball-whisky.jpeg',
    category: 'HIGHBALL',
  },
  {
    id: 'cassis-highball',
    title: '카시스 하이볼',
    description: '블루베리가 들어있어 상큼한 하이볼',
    price: '8,500원',
    image: 'highball-cassis.jpeg',
    category: 'HIGHBALL',
  },
  {
    id: 'maesil-highball',
    title: '매실 하이볼',
    description: '한식요리에 잘 어울리는 하이볼',
    price: '8,500원',
    image: 'coming-soon.png',
    category: 'HIGHBALL',
  },

  { id: 'cass', title: '카스', description: '', price: '5,000원', image: 'beer-cass.png', category: 'BEER' },
  { id: 'terra', title: '테라', description: '', price: '5,000원', image: 'beer-terra.png', category: 'BEER' },
  { id: 'hoegaarden', title: '호가든', description: '수제맥주입문자, 부드러운 맛', price: '6,000원', image: 'beer-hoegaarden.png', category: 'BEER' },
  { id: 'stella', title: '스텔라', description: '청량한 산미, 깔끔한 맛', price: '7,000원', image: 'beer-stella.png', category: 'BEER' },
  {
    id: 'kozel-dark',
    title: '코젤다크',
    description: '체코식 필스너, 부드럽고 균형 잡힌 맛',
    price: '8,000원',
    image: 'beer-kozel-dark.png',
    category: 'BEER',
    badge: 'BEST',
  },
  {
    id: 'indica-ipa',
    title: '인디카 IPA',
    description: '미국식 하이 홉 IPA 스타일',
    price: '9,000원',
    image: 'beer-indica-ipa.png',
    category: 'BEER',
    badge: 'BEST',
  },
  {
    id: 'watermelon-wheat',
    title: '워터멜론 위트에일',
    description: '상큼한 수박향이 느껴지는 수제맥주',
    price: '9,000원',
    image: 'beer-watermelon-wheat.png',
    category: 'BEER',
    badge: 'HIT',
  },
  {
    id: 'duchesse-750',
    title: '듀체스 드 브르고뉴',
    description: '벨기에 와인맥주, 산미와 풍부한 체리 향미',
    price: '33,000원 (750ml)',
    image: 'beer-duchesse-de-bourgogne.png',
    category: 'BEER',
    badge: '강추',
  },
  {
    id: 'delirium-red-330',
    title: '델리리움 레드',
    description: '벨기에 프룻비어, 새콤달콤한 체리향',
    price: '10,000원 (330ml)',
    image: 'beer-delirium-red.png',
    category: 'BEER',
    badge: '여름 강추',
  },
  {
    id: 'moengs-cafe-750',
    title: '뭉스카페',
    description: '수도원 맥주, 상큼한 산미와 달콤함',
    price: '30,000원 (750ml)',
    image: 'beer-moengs-cafe.png',
    category: 'BEER',
  },
  {
    id: 'la-trappe-quad-330',
    title: '라트라페 쿼드루펠',
    description: '풍부하고 화려한 풍미, 높은 도수에도 부드러움',
    price: '10,000원 (330ml)',
    image: 'beer-la-trappe-quadrupel.png',
    category: 'BEER',
    badge: 'HIT',
  },
  {
    id: 'la-trappe-quad-750',
    title: '라트라페 쿼드루펠',
    description: '풍부하고 화려한 풍미, 높은 도수에도 부드러움',
    price: '30,000원 (750ml)',
    image: 'beer-la-trappe-quadrupel.png',
    category: 'BEER',
  },
  {
    id: 'delirium-xmas-330',
    title: '델리리움 크리스마스 맥주',
    description: '캐러멜, 체리, 감초의 복합적인 풍미',
    price: '10,000원 (330ml)',
    image: 'beer-delirium-christmas.png',
    category: 'BEER',
    badge: '인기',
  },
  {
    id: 'delirium-xmas-750',
    title: '델리리움 크리스마스 맥주',
    description: '캐러멜, 체리, 감초의 복합적인 풍미',
    price: '30,000원 (750ml)',
    image: 'beer-delirium-christmas.png',
    category: 'BEER',
  },

  {
    id: 'old-dongdongju',
    title: '옛날 동동주',
    description: '나주 전통 막걸리, 쌀알 동동, 자연 탄산',
    price: '6,000원 (750ml)',
    image: 'makgeolli-old-dongdongju.png',
    category: '전통주',
  },
  {
    id: 'booja-premium',
    title: '부자 프리미엄 막걸리',
    description: '식이섬유가 풍부한 건강 막걸리',
    price: '8,000원 (375ml)',
    image: 'makgeolli-booja-premium.png',
    category: '전통주',
  },
  {
    id: 'salmatnane',
    title: '세번빛은 살맛나네 막걸리',
    description: '딥한 맛과 요거트 같은 부드러움',
    price: '9,000원 (750ml)',
    image: 'makgeolli-salmatnane.png',
    category: '전통주',
    badge: 'HIT',
  },
]
