import type { Metadata } from 'next'
import { playfairDisplay, inter } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ikigai Consulting Group | Organizational Architects',
  description: 'Organizational Architects for Purpose-Driven Organizations in Ontario.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
