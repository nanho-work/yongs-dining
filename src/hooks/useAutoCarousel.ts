'use client'

import { useCallback, useEffect, useState } from 'react'

type UseAutoCarouselOptions = {
  length: number
  interval?: number
  paused?: boolean
}

export function useAutoCarousel({
  length,
  interval = 4000,
  paused = false,
}: UseAutoCarouselOptions) {
  const [index, setIndex] = useState(0)

  const goTo = useCallback(
    (nextIndex: number) => {
      if (length <= 0) return
      setIndex(((nextIndex % length) + length) % length)
    },
    [length]
  )

  const next = useCallback(() => {
    goTo(index + 1)
  }, [goTo, index])

  const previous = useCallback(() => {
    goTo(index - 1)
  }, [goTo, index])

  useEffect(() => {
    if (length <= 0) return
    setIndex((current) => Math.min(current, length - 1))
  }, [length])

  useEffect(() => {
    if (paused || length <= 1) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [interval, length, paused])

  return {
    index,
    goTo,
    next,
    previous,
  }
}
