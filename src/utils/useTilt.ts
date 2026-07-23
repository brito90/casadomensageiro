import { useRef, useCallback } from 'react'

interface TiltOptions {
  maxTilt?: number
  scale?: number
  speed?: number
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(options: TiltOptions = {}) {
  const { maxTilt = 15, scale = 1.05, speed = 400 } = options
  const ref = useRef<T>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!ref.current) return

    const card = ref.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    card.style.transition = 'transform 0.1s ease-out'
  }, [maxTilt, scale])

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    ref.current.style.transition = `transform ${speed}ms ease-out`
  }, [speed])

  return { ref, handleMouseMove, handleMouseLeave }
}
