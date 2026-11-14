import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/seo'
import { MENU_SEO_DETAILS } from '@/data/menuSeoData'

export const dynamic = 'force-static'

const LAST_UPDATED = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_UPDATED,
    },
    {
      url: `${SITE_URL}/menu/`,
      lastModified: LAST_UPDATED,
    },
    {
      url: `${SITE_URL}/location/`,
      lastModified: LAST_UPDATED,
    },
    ...MENU_SEO_DETAILS.map(({ slug }) => ({
      url: `${SITE_URL}/menu/${slug}/`,
      lastModified: LAST_UPDATED,
    })),
  ]
}
