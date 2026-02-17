import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt =
  'Ikigai Consulting Group - Organizational Architects for Purpose-Driven Organizations'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#355E3B',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Gold inset border */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            bottom: '16px',
            border: '2px solid #D4A843',
            display: 'flex',
          }}
        />

        {/* Ikigai wordmark */}
        <span
          style={{
            fontSize: '96px',
            fontWeight: 700,
            color: '#FFFFFF',
            fontFamily: 'Georgia, serif',
            letterSpacing: '12px',
            lineHeight: 1,
          }}
        >
          Ikigai
        </span>

        {/* Decorative green dots */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '28px',
            marginBottom: '28px',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#7DA884',
              }}
            />
          ))}
        </div>

        {/* CONSULTING GROUP */}
        <span
          style={{
            fontSize: '28px',
            fontWeight: 400,
            color: '#D4A843',
            fontFamily: 'Helvetica, Arial, sans-serif',
            letterSpacing: '10px',
            lineHeight: 1,
          }}
        >
          CONSULTING GROUP
        </span>

        {/* Tagline */}
        <span
          style={{
            fontSize: '20px',
            fontWeight: 300,
            color: '#FFFFFF',
            fontFamily: 'Helvetica, Arial, sans-serif',
            marginTop: '48px',
            opacity: 0.85,
          }}
        >
          Organizational Architects for Purpose-Driven Organizations
        </span>
      </div>
    ),
    { ...size }
  )
}
