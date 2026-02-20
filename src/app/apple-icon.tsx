import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: '#1B6B2E',
            marginBottom: '2px',
          }}
        />
        {/* Serif I */}
        <span
          style={{
            fontSize: '110px',
            fontWeight: 700,
            color: '#1A1A1A',
            fontFamily: 'Georgia, serif',
            lineHeight: 0.8,
          }}
        >
          I
        </span>
        {/* Gold accent line */}
        <div
          style={{
            width: '50px',
            height: '3px',
            background: '#C9A84C',
            marginTop: '8px',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
