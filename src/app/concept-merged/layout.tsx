'use client'

import { instrumentSerif, ibmPlexSans, ibmPlexMono } from './fonts'
import { ConceptNav } from './shared'

export default function ConceptMergedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      style={
        {
          '--bone': '#F5F0E8',
          '--bone-dark': '#EBE4D8',
          '--bone-light': '#FAF8F3',
          '--parchment': '#FFFDF8',
          '--deep-green': '#1B3A2A',
          '--deep-green-950': '#0D1F14',
          '--arch-gold': '#C9A84C',
          '--arch-gold-text-dark': '#E8D5A3',
          '--arch-gold-text-light': '#7A5C16',
          '--blueprint': '#4A6FA5',
          '--charcoal': '#2C2C2C',
          '--ink': '#1A1A1A',
          '--structural-line': '#D5CFC4',
          '--font-instrument-serif': instrumentSerif.style.fontFamily,
          '--font-ibm-plex-sans': ibmPlexSans.style.fontFamily,
          '--font-ibm-plex-mono': ibmPlexMono.style.fontFamily,
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        } as React.CSSProperties
      }
    >
      <ConceptNav />
      {children}
    </div>
  )
}
