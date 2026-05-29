import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ActionLinkVariant = 'primary' | 'secondary' | 'outline' | 'dark'

type ActionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
  external?: boolean
  icon?: ReactNode
  variant?: ActionLinkVariant
}

const variantClasses: Record<ActionLinkVariant, string> = {
  primary: 'bg-red-600 text-white shadow-sm hover:bg-red-700',
  secondary: 'bg-white text-neutral-950 shadow-sm hover:bg-red-50',
  outline: 'border border-white/70 bg-white/10 text-white hover:bg-white/20',
  dark: 'bg-neutral-950 text-white hover:bg-neutral-800',
}

export function ActionLink({
  href,
  external = false,
  icon,
  variant = 'primary',
  className,
  children,
  target,
  rel,
  ...props
}: ActionLinkProps) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500',
    variantClasses[variant],
    className
  )

  const content = (
    <>
      {icon ? <span className="shrink-0" aria-hidden>{icon}</span> : null}
      <span>{children}</span>
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        className={classes}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  )
}
