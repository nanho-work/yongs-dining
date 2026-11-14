import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, MessageCircle, Utensils } from 'lucide-react'
import { CORE_SEARCH_KEYWORDS, SITE_URL } from '@/constants/seo'
import { STORE_LINKS } from '@/constants/store'
import { MENU_ITEMS } from '@/data/menuData'
import { MENU_SEO_DETAILS, getMenuSeoDetail } from '@/data/menuSeoData'

type MenuDetailPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return MENU_SEO_DETAILS.map(({ slug }) => ({ slug }))
}

const getPageData = (slug: string) => {
  const detail = getMenuSeoDetail(slug)
  const menu = detail ? MENU_ITEMS.find((item) => item.id === detail.menuId) : undefined
  return detail && menu ? { detail, menu } : null
}

export async function generateMetadata({ params }: MenuDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getPageData(slug)
  if (!data) return {}

  const { detail, menu } = data
  return {
    title: `${menu.title} | 모란역 두부요리 용스다이닝`,
    description: `${detail.summary} 가격은 ${menu.price}이며 용스다이닝에서 술과 함께 즐길 수 있습니다.`,
    keywords: [...CORE_SEARCH_KEYWORDS, menu.title, `모란 ${menu.title}`, detail.taste],
    alternates: {
      canonical: `${SITE_URL}/menu/${detail.slug}/`,
    },
    openGraph: {
      title: `${menu.title} | 용스다이닝`,
      description: detail.summary,
      url: `${SITE_URL}/menu/${detail.slug}/`,
      siteName: '용스다이닝포차',
      images: [
        {
          url: `/${menu.images[0]}`,
          alt: `${menu.title} 메뉴 사진`,
        },
      ],
      locale: 'ko_KR',
      type: 'article',
    },
  }
}

export default async function MenuDetailPage({ params }: MenuDetailPageProps) {
  const { slug } = await params
  const data = getPageData(slug)
  if (!data) notFound()

  const { detail, menu } = data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MenuItem',
        name: menu.title,
        description: detail.summary,
        image: `${SITE_URL}/${menu.images[0]}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '메뉴', item: `${SITE_URL}/menu/` },
          { '@type': 'ListItem', position: 3, name: menu.title, item: `${SITE_URL}/menu/${detail.slug}/` },
        ],
      },
    ],
  }

  return (
    <article className="mx-auto max-w-6xl pb-16 pt-6 sm:pb-20 sm:pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav aria-label="현재 위치" className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
        <Link href="/" className="hover:text-red-600">홈</Link>
        <span aria-hidden>/</span>
        <Link href="/menu/" className="hover:text-red-600">메뉴</Link>
        <span aria-hidden>/</span>
        <span className="text-neutral-800">{menu.title}</span>
      </nav>

      <div className="grid items-start gap-7 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm lg:sticky lg:top-28">
          <Image
            src={`/${menu.images[0]}`}
            alt={`${menu.title} 메뉴 사진`}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">YONGS SIGNATURE MENU</p>
          <h1 className="mt-2 break-keep text-3xl font-black tracking-tight text-neutral-950 sm:text-5xl">{menu.title}</h1>
          <p className="mt-4 text-xl font-bold text-red-600">{menu.price}</p>
          <p className="mt-5 break-keep text-base leading-8 text-neutral-700">{detail.summary}</p>

          <section aria-labelledby="taste-title" className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <h2 id="taste-title" className="flex items-center gap-2 text-lg font-bold text-neutral-950">
              <Utensils size={19} className="text-red-600" aria-hidden /> 맛과 구성
            </h2>
            <p className="mt-3 break-keep text-sm leading-7 text-neutral-700">{detail.taste}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {detail.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                  <Check size={16} className="shrink-0 text-red-600" aria-hidden /> {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="recommend-title" className="mt-8">
            <h2 id="recommend-title" className="text-xl font-bold text-neutral-950">이런 술자리에 추천해요</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {detail.recommendedFor.map((item) => (
                <span key={item} className="rounded-full border border-red-100 bg-red-50 px-3 py-2 text-sm font-semibold text-red-800">{item}</span>
              ))}
            </div>
            <p className="mt-4 break-keep text-sm leading-7 text-neutral-600">{detail.pairing}</p>
          </section>

          <section aria-labelledby="menu-question-title" className="mt-8 rounded-2xl bg-neutral-950 p-5 text-white sm:p-6">
            <h2 id="menu-question-title" className="break-keep text-lg font-bold">Q. {detail.question}</h2>
            <p className="mt-3 break-keep text-sm leading-7 text-white/75">A. {detail.answer}</p>
          </section>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={STORE_LINKS.reservation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
            >
              <MessageCircle size={18} aria-hidden /> 카카오 예약
            </a>
            <Link href="/menu/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-700 hover:bg-red-50">
              <ArrowLeft size={18} aria-hidden /> 전체 메뉴 보기
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
