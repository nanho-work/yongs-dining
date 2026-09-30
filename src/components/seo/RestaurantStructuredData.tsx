import { SEASONAL_NOTICE } from '@/constants/seasonal'
import { SITE_URL } from '@/constants/seo'
import { STORE_INFO, STORE_LINKS } from '@/constants/store'

const standardOpeningHours = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '17:00',
    closes: '24:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Friday', 'Saturday'],
    opens: '17:00',
    closes: '01:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday'],
    opens: '17:00',
    closes: '23:00',
  },
]

const seasonalOpeningHours = SEASONAL_NOTICE.enabled
  ? SEASONAL_NOTICE.specialOpeningHours.map((item) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: item.dayOfWeek,
      opens: item.opens,
      closes: item.closes,
      validFrom: item.validFrom,
      validThrough: item.validThrough,
    }))
  : []

const restaurantStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE_URL}/location/#restaurant`,
  name: STORE_INFO.name,
  description: STORE_INFO.description,
  url: `${SITE_URL}/location/`,
  image: [
    `${SITE_URL}/hero-real-hanwoo-tofu-jeongol.webp`,
    `${SITE_URL}/location.webp`,
  ],
  telephone: `+82-${STORE_INFO.phoneHref.slice(1, 3)}-${STORE_INFO.phoneHref.slice(3, 7)}-${STORE_INFO.phoneHref.slice(7)}`,
  priceRange: '₩₩',
  servesCuisine: ['한식', '두부요리', '전골', '두루치기', '한식 안주'],
  menu: `${SITE_URL}/menu/`,
  acceptsReservations: STORE_LINKS.reservation,
  hasMap: STORE_LINKS.map,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '제일로63번길 29, 102호',
    addressLocality: '성남시',
    addressRegion: '경기도',
    addressCountry: 'KR',
  },
  openingHoursSpecification: [
    ...standardOpeningHours,
    ...seasonalOpeningHours,
  ],
  sameAs: [STORE_LINKS.instagram],
}

export default function RestaurantStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantStructuredData) }}
    />
  )
}
