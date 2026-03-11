'use client'

import { useEffect, useRef } from 'react'

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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const selectedIndex = tabs.findIndex((tab) => tab.id === selected)

  useEffect(() => {
    const selectedTab = tabRefs.current[selectedIndex]
    if (selectedTab) {
      selectedTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
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
    <div className="relative border-b border-black/80 w-full overflow-x-auto overflow-y-hidden sm:overflow-x-visible">
      <div
        className="flex justify-start sm:justify-center whitespace-nowrap px-2 sm:px-0"
        role="tablist"
        aria-label="메뉴 카테고리"
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
              className={`mx-1 sm:mx-2 px-4 sm:px-5 py-3 text-sm sm:text-[15px] font-bold border border-black border-b-0 -mb-px rounded-t-md transition-all duration-300 ease-in-out ${
                isSelected
                  ? 'bg-yellow-100 text-black'
                  : 'bg-transparent text-black/70 hover:text-black hover:bg-yellow-50/70'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
