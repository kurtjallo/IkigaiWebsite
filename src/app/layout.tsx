import { playfairDisplay, inter } from '@/lib/fonts'
import { SkipNav } from '@/components/layout/skip-nav'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { siteMetadata } from '@/lib/data/metadata'
import {
  organizationSchema,
  localBusinessSchema,
} from '@/lib/data/structured-data'
import './globals.css'

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
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
