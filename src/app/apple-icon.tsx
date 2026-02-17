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
          background: '#355E3B',
          borderRadius: '24px',
        }}
      >
        <span
          style={{
            fontSize: '100px',
            fontWeight: 700,
            color: '#D4A843',
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
          }}
        >
          I
        </span>
        <div
          style={{
            width: '50px',
            height: '2px',
            background: '#D4A843',
            marginTop: '4px',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
