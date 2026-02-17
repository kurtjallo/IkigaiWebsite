'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { navigationLinks } from '@/lib/data/navigation'
import { MobileMenu } from './mobile-menu'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-40 border-b border-neutral-200 bg-white"
      >
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              href="/"
              className="font-serif text-xl font-bold tracking-wide text-hunter-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              IKIGAI
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navigationLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'text-sm font-medium uppercase tracking-wide text-neutral-700 transition-colors hover:text-hunter-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
                      isActive && 'border-b-2 border-gold pb-1 text-hunter-green'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <Menu className="h-6 w-6 text-hunter-green" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
