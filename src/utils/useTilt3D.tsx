import { useRef, useCallback, useState } from 'react'

interface Tilt3DOptions {
  maxTilt?: number
  scale?: number
  speed?: number
  glare?: boolean
  perspective?: number
}

export function useTilt3D<T extends HTMLElement = HTMLDivElement>(options: Tilt3DOptions = {}) {
  const { maxTilt = 20, scale = 1.05, speed = 400, glare = true, perspective = 1000 } = options
  const ref = useRef<T>(null)
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    ref.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    ref.current.style.transition = 'transform 0.1s ease-out'
    setGlarePosition({ x: glareX, y: glareY })
  }, [maxTilt, scale, perspective])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    ref.current.style.transition = `transform ${speed}ms ease-out`
    setIsHovered(false)
  }, [perspective, speed])

  return {
    ref,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    isHovered,
    glarePosition,
    glareEnabled: glare,
  }
}

export function Card3D({ children, className = '', ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) {
  const { ref, handleMouseMove, handleMouseEnter, handleMouseLeave, isHovered, glarePosition, glareEnabled } = useTilt3D({ maxTilt: 15, scale: 1.02 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {children}
      {glareEnabled && isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
          style={{
            background: `radial-gradient(circle 200px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3), transparent 70%)`,
          }}
        />
      )}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      />
    </div>
  )
}

export function Button3D({ children, className = '', variant = 'primary', ...props }: { children: React.ReactNode; className?: string; variant?: 'primary' | 'secondary' | 'accent'; [key: string]: any }) {
  const [isPressed, setIsPressed] = useState(false)

  const variantStyles = {
    primary: 'bg-primary text-white shadow-primary/30',
    secondary: 'bg-white text-primary shadow-gray-300/30',
    accent: 'bg-accent text-primary-900 shadow-accent/30',
  }

  return (
    <button
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-200 ${variantStyles[variant]} ${isPressed ? 'translate-y-1 shadow-sm' : 'shadow-lg hover:shadow-xl hover:-translate-y-1'}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div
        className="absolute inset-0 rounded-xl transition-all duration-200"
        style={{
          transform: isPressed ? 'translateZ(-10px)' : 'translateZ(0)',
          background: isPressed ? 'rgba(0,0,0,0.1)' : 'transparent',
        }}
      />
    </button>
  )
}

export function Icon3D({ children, className = '', size = 'md' }: { children: React.ReactNode; className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const { ref, handleMouseMove, handleMouseEnter, handleMouseLeave, isHovered, glarePosition } = useTilt3D({ maxTilt: 25, scale: 1.1, perspective: 500 })

  const sizeStyles = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${sizeStyles[size]} rounded-2xl flex items-center justify-center transition-all duration-300 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4), transparent 60%)`,
          }}
        />
      )}
    </div>
  )
}

export function Image3D({ src, alt, className = '' }: { src?: string; alt: string; className?: string }) {
  const { ref, handleMouseMove, handleMouseEnter, handleMouseLeave, isHovered, glarePosition } = useTilt3D({ maxTilt: 10, scale: 1.03 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-4xl">📷</span>
        </div>
      )}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3), transparent 60%)`,
          }}
        />
      )}
    </div>
  )
}
