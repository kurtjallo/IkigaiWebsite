interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
  showTagline?: boolean
}

export function Logo({ variant = 'dark', className, showTagline = true }: LogoProps) {
  const colors = {
    dark: {
      primary: '#111111',
      secondary: '#555555',
      accent: '#D4A843',
    },
    light: {
      primary: '#FFFFFF',
      secondary: '#D4E2D6',
      accent: '#D4A843',
    },
  }

  const { primary, secondary, accent } = colors[variant]
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
        letterSpacing="6"
      >
        IKIGAI
      </text>
      {showTagline && (
        <>
          <line x1="70" y1="40" x2="210" y2="40" stroke={accent} strokeWidth="1.5" />
          <text
            x="140"
            y="60"
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
