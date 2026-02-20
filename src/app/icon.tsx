import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          background: 'transparent',
        }}
      >
        {/* Green dot (matching logo's i-dot) */}
        <div
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: '#1B6B2E',
            marginBottom: '1px',
          }}
        />
        {/* Serif I */}
        <span
          style={{
            fontSize: '22px',
            fontWeight: 700,
            color: '#1A1A1A',
            fontFamily: 'Georgia, serif',
            lineHeight: 0.8,
          }}
        >
          I
        </span>
      </div>
    ),
    { ...size }
  )
}
