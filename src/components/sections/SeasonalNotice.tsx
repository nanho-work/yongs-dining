import { CalendarDays, Clock3, Sparkles } from 'lucide-react'
import { SEASONAL_NOTICE } from '@/constants/seasonal'

export default function SeasonalNotice() {
  if (!SEASONAL_NOTICE.enabled || !SEASONAL_NOTICE.title) return null

  return (
    <section
      aria-labelledby="seasonal-notice-title"
      className="py-10 sm:py-14"
    >
      <div className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-6 text-white shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-200">
              <Sparkles size={16} aria-hidden />
              seasonal news
            </p>
            <h2 id="seasonal-notice-title" className="mt-3 break-keep text-2xl font-black sm:text-3xl">
              {SEASONAL_NOTICE.title}
            </h2>
            <p className="mt-3 break-keep text-sm leading-7 text-white/80 sm:text-base">
              {SEASONAL_NOTICE.description}
            </p>
          </div>

          <dl className="grid shrink-0 gap-2 text-sm sm:min-w-64">
            {SEASONAL_NOTICE.period ? (
              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <CalendarDays size={18} className="text-amber-200" aria-hidden />
                <div>
                  <dt className="text-xs text-white/60">기간</dt>
                  <dd className="mt-0.5 font-bold">{SEASONAL_NOTICE.period}</dd>
                </div>
              </div>
            ) : null}
            {SEASONAL_NOTICE.hours ? (
              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <Clock3 size={18} className="text-amber-200" aria-hidden />
                <div>
                  <dt className="text-xs text-white/60">영업시간</dt>
                  <dd className="mt-0.5 font-bold">{SEASONAL_NOTICE.hours}</dd>
                </div>
              </div>
            ) : null}
          </dl>
        </div>

        {SEASONAL_NOTICE.menuItems.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/15 pt-5">
            {SEASONAL_NOTICE.menuItems.map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
