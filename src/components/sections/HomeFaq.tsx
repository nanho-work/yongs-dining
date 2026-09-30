import { HelpCircle, Plus } from 'lucide-react'
import { HOME_FAQ_ITEMS } from '@/constants/faq'
import { SectionHeader } from '@/components/ui/SectionHeader'

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-title" className="py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-sm">
            <HelpCircle size={22} aria-hidden />
          </div>
          <SectionHeader
            id="home-faq-title"
            eyebrow="frequently asked questions"
            title="용스다이닝 자주 묻는 질문"
            description={
              <>
                방문 전 궁금한 내용을 모았습니다.<br className="hidden sm:block" />
                질문을 누르면 답변을 확인할 수 있어요.
              </>
            }
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/90 shadow-[0_20px_60px_-40px_rgba(80,35,20,0.45)] backdrop-blur-sm">
          {HOME_FAQ_ITEMS.map((item, index) => (
            <details
              key={item.question}
              className="group border-b border-neutral-200/80 last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 px-5 py-5 text-left transition-colors hover:bg-red-50/60 focus-visible:bg-red-50 sm:gap-4 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="mt-0.5 shrink-0 text-xs font-bold tracking-[0.12em] text-red-600 sm:text-sm">
                  Q{String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1 break-keep text-[15px] font-bold leading-6 text-neutral-950 sm:text-lg sm:leading-7">
                  {item.question}
                </span>
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 transition-transform duration-300 group-open:rotate-45">
                  <Plus size={16} aria-hidden />
                </span>
              </summary>
              <div className="px-5 pb-6 pl-[4.25rem] pr-12 sm:px-7 sm:pb-7 sm:pl-[5.25rem] sm:pr-16">
                <p className="break-keep text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
