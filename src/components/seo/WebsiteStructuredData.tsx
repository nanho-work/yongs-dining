import { SITE_URL } from '@/constants/seo'
import { STORE_INFO, STORE_LINKS } from '@/constants/store'

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: STORE_INFO.name,
      inLanguage: 'ko-KR',
      publisher: {
        '@id': `${SITE_URL}/location/#restaurant`,
      },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: STORE_INFO.name,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      telephone: STORE_INFO.phone,
      sameAs: [STORE_LINKS.instagram],
    },
  ],
}

export default function WebsiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
    />
  )
}
