import { ReactNode } from 'react'

interface CorkscrewSectionProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'dramatic' | 'subtle'
}

function CorkscrewSection({ children, className = '', variant = 'default' }: CorkscrewSectionProps) {
  const skewAngles = {
    default: 'skewY(-2deg)',
    dramatic: 'skewY(-4deg)',
    subtle: 'skewY(-1deg)',
  }

  const innerSkewAngles = {
    default: 'skewY(2deg)',
    dramatic: 'skewY(4deg)',
    subtle: 'skewY(1deg)',
  }

  return (
    <div className={`relative ${className}`} style={{ transform: skewAngles[variant] }}>
      <div style={{ transform: innerSkewAngles[variant] }}>
        {children}
      </div>
    </div>
  )
}

export default CorkscrewSection
