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
  primary:
    'border-[#d9a75f]/45 bg-[#a92e26] text-[#fff9ed] shadow-[3px_3px_0_rgba(216,167,95,0.3)] hover:bg-[#bd382e]',
  secondary:
    'border-[#f4e4ca] bg-[#f4e4ca] text-[#211914] shadow-[3px_3px_0_rgba(24,20,17,0.32)] hover:border-[#e7c995] hover:bg-[#fff4df]',
  outline:
    'border-[#f4e4ca]/65 bg-[#181411]/35 text-[#fff9ed] shadow-[3px_3px_0_rgba(216,167,95,0.18)] hover:border-[#e1b972] hover:bg-[#181411]/60',
  dark:
    'border-[#d9a75f]/35 bg-[#181411] text-[#f4e4ca] shadow-[3px_3px_0_rgba(169,46,38,0.3)] hover:bg-[#2a211c]',
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
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-4 py-2 text-sm font-bold tracking-[0.015em] transition-[background-color,border-color,color,transform] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a75f] motion-reduce:transform-none motion-reduce:transition-none',
    variantClasses[variant],
    className
  )

  const content = (
    <>
      {icon ? <span className="shrink-0" aria-hidden>{icon}</span> : null}
      <span>{children}</span>
      <span aria-hidden className="ml-0.5 text-[11px] opacity-70">
        {external ? '↗' : '→'}
      </span>
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
