import { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface ClipRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ClipReveal({ children, className = '', delay = 0 }: ClipRevealProps) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`clip-reveal ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
