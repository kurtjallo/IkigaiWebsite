import type { Metadata } from 'next'
import { playfairDisplay, inter } from '@/lib/fonts'
import { SkipNav } from '@/components/layout/skip-nav'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
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
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <SkipNav />
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
