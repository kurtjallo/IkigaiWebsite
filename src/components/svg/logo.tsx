interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
  showTagline?: boolean
}

export function Logo({ variant = 'dark', className, showTagline = true }: LogoProps) {
  const colors = {
    dark: {
      primary: '#355E3B',
      secondary: '#555555',
      dot: '#355E3B',
    },
    light: {
      primary: '#FFFFFF',
      secondary: '#D4E2D6',
      dot: '#7DA884',
    },
  }

  const { primary, secondary, dot } = colors[variant]
  const viewBox = showTagline ? '0 0 280 75' : '0 0 280 35'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width="100%"
      height="auto"
      role="img"
      aria-label="Ikigai Consulting Group"
      className={className}
    >
      <title>Ikigai Consulting Group</title>
      <text
        x="140"
        y="28"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="32"
        fontWeight="700"
        fill={primary}
        letterSpacing="4"
      >
        Ikigai
      </text>
      {/* Green accent dots over the two i characters */}
      <circle cx="120" cy="5" r="3" fill={dot} />
      <circle cx="183" cy="5" r="3" fill={dot} />
      {showTagline && (
        <>
          {/* Row of decorative dots */}
          <g>
            {[105, 120, 135, 150, 160, 175].map((cx) => (
              <circle key={cx} cx={cx} cy="42" r="2.5" fill={dot} />
            ))}
          </g>
          <text
            x="140"
            y="62"
            textAnchor="middle"
            fontFamily="'Inter', system-ui, sans-serif"
            fontSize="11"
            fontWeight="400"
            fill={secondary}
            letterSpacing="4"
          >
            CONSULTING GROUP
          </text>
        </>
      )}
    </svg>
  )
}
