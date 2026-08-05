import type { ReactNode } from 'react'

type SiteLayoutProps = {
  children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-[90rem] overflow-x-clip px-4 sm:px-6 2xl:px-20">
      {children}
    </div>
  )
}
