'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type MenuTabId = 'all' | 'main-tofu' | 'main-etc' | 'side' | 'set' | 'drink'

type Tab = {
  id: MenuTabId
  label: string
}

type Props = {
  selected: MenuTabId
  onSelect: (id: MenuTabId) => void
}

const tabs: Tab[] = [
  { id: 'all', label: '전체메뉴' },
  { id: 'main-tofu', label: 'MAIN 두부요리' },
  { id: 'main-etc', label: '그외 메인요리' },
  { id: 'side', label: 'SIDE MENU' },
  { id: 'set', label: 'SET MENU' },
  { id: 'drink', label: '주류' },
]

export default function MenuTabs({ selected, onSelect }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [scrollEdges, setScrollEdges] = useState({ left: false, right: false })
  const selectedIndex = tabs.findIndex((tab) => tab.id === selected)

  const updateScrollEdges = useCallback(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth
    const nextEdges = {
      left: scroller.scrollLeft > 2,
      right: scroller.scrollLeft < maxScrollLeft - 2,
    }

    setScrollEdges((current) =>
      current.left === nextEdges.left && current.right === nextEdges.right
        ? current
        : nextEdges
    )
  }, [])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    updateScrollEdges()
    scroller.addEventListener('scroll', updateScrollEdges, { passive: true })
    window.addEventListener('resize', updateScrollEdges)

    const resizeObserver =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateScrollEdges)
    resizeObserver?.observe(scroller)
    if (scroller.firstElementChild) resizeObserver?.observe(scroller.firstElementChild)

    return () => {
      scroller.removeEventListener('scroll', updateScrollEdges)
      window.removeEventListener('resize', updateScrollEdges)
      resizeObserver?.disconnect()
    }
  }, [updateScrollEdges])

  useEffect(() => {
    const selectedTab = tabRefs.current[selectedIndex]
    const scroller = scrollerRef.current
    if (!selectedTab || !scroller) return

    const targetLeft = selectedTab.offsetLeft - (scroller.clientWidth - selectedTab.offsetWidth) / 2
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    scroller.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }, [selectedIndex])

  const focusAndSelect = (index: number) => {
    const safeIndex = (index + tabs.length) % tabs.length
    const targetTab = tabs[safeIndex]
    const targetButton = tabRefs.current[safeIndex]

    if (!targetTab || !targetButton) return
    targetButton.focus()
    onSelect(targetTab.id)
  }

  return (
    <div className="sticky top-[var(--site-header-height)] z-40 -mx-4 border-y border-[#6d3a2d]/15 bg-[#f5e8de]/95 px-4 py-2.5 shadow-[0_8px_24px_rgba(72,38,29,0.06)] backdrop-blur-md sm:-mx-6 sm:px-6">
      <div className="relative">
        <div
          ref={scrollerRef}
          className="w-full touch-pan-x overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            className="flex w-max min-w-full justify-start gap-2 whitespace-nowrap px-1 lg:justify-center"
            role="tablist"
            aria-label="메뉴 카테고리"
            aria-orientation="horizontal"
          >
            {tabs.map((tab, index) => {
              const isSelected = selected === tab.id

              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[index] = el
                  }}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls="menu-panel"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => onSelect(tab.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowRight') {
                      event.preventDefault()
                      focusAndSelect(index + 1)
                    }
                    if (event.key === 'ArrowLeft') {
                      event.preventDefault()
                      focusAndSelect(index - 1)
                    }
                    if (event.key === 'Home') {
                      event.preventDefault()
                      focusAndSelect(0)
                    }
                    if (event.key === 'End') {
                      event.preventDefault()
                      focusAndSelect(tabs.length - 1)
                    }
                  }}
                  className={`shrink-0 rounded-sm border px-4 py-2.5 text-[13px] font-extrabold outline-none transition-colors duration-200 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#8f211b] focus-visible:ring-offset-2 motion-reduce:transition-none sm:px-5 sm:text-sm ${
                    isSelected
                      ? 'border-[#8f211b] bg-[#8f211b] text-[#fff9ed] shadow-sm'
                      : 'border-[#6d3a2d]/20 bg-[#fff9ed]/65 text-[#5d4d45] hover:border-[#8f211b]/45 hover:text-[#8f211b]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {scrollEdges.left && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 flex w-11 items-center bg-gradient-to-r from-[#f5e8de] via-[#f5e8de]/95 to-transparent pl-0.5 text-xl font-black text-[#8f211b]"
          >
            ‹
          </span>
        )}
        {scrollEdges.right && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 flex w-11 items-center justify-end bg-gradient-to-l from-[#f5e8de] via-[#f5e8de]/95 to-transparent pr-0.5 text-xl font-black text-[#8f211b]"
          >
            ›
          </span>
        )}
      </div>
    </div>
  )
}
