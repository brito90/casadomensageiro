interface SectionDividerProps {
  direction?: 'up' | 'down'
  color?: string
  className?: string
}

function SectionDivider({ direction = 'down', color = '#FFFBFB', className = '' }: SectionDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        className="w-full h-16 md:h-24"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ 
          transform: direction === 'up' ? 'rotate(180deg)' : 'none',
          display: 'block'
        }}
      >
        <path
          d="M0,64 L48,58.7 C96,53.3,192,42.7,288,48 C384,53.3,480,74.7,576,80 C672,85.3,768,74.7,864,64 C960,53.3,1056,42.7,1152,48 C1248,53.3,1344,74.7,1392,85.3 L1440,96 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default SectionDivider
