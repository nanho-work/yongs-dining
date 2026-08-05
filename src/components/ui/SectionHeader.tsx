import { cn } from '@/lib/cn'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <div
          className={cn(
            'flex items-center gap-3',
            align === 'center' && 'justify-center'
          )}
        >
          <span aria-hidden className="h-px w-7 bg-[#a92e26]" />
          <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#92271f]">
            <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-[#c89249]" />
            {eyebrow}
          </p>
          <span aria-hidden className="h-px w-7 border-t border-dashed border-[#a92e26]/60" />
        </div>
      ) : null}
      <h2 className="font-display mt-3 break-keep text-2xl font-black leading-tight tracking-[-0.035em] text-[#1f1814] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 break-keep text-sm leading-6 text-[#5e5047] sm:text-base sm:leading-7">
          {description}
        </p>
      ) : null}
    </header>
  )
}
