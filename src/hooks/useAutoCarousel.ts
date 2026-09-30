'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

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
  const prefersReducedMotion = usePrefersReducedMotion()

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
    if (paused || prefersReducedMotion || length <= 1) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [interval, length, paused, prefersReducedMotion])

  return {
    index,
    goTo,
    next,
    previous,
  }
}
