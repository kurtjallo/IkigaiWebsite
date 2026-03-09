import { instrumentSerif, ibmPlexSans, ibmPlexMono } from '@/lib/fonts'
import { SiteNav, SiteFooter } from '@/lib/shared'
import { siteMetadata } from '@/lib/data/metadata'
import {
  organizationSchema,
  localBusinessSchema,
} from '@/lib/data/structured-data'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <SiteNav />
        <main id="main-content">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
