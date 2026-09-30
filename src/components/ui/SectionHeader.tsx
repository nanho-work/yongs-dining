import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionHeaderProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="mt-2 break-keep text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 break-keep text-sm leading-6 text-neutral-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  )
}
