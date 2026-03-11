import type { ReactNode } from 'react'

type SiteLayoutProps = {
  children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">{children}</div>
}
