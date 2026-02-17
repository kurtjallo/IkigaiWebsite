'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationLinks } from '@/lib/data/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className={cn(
        'fixed inset-0 z-50 bg-white transition-all duration-300',
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute right-6 top-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <X className="h-6 w-6 text-hunter-green" />
      </button>

      <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
        {navigationLinks.map((link) => {
          const isActive =
            link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href)

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                'text-h3 font-serif text-neutral-700 transition-colors hover:text-hunter-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
                isActive && 'border-b-2 border-gold pb-1 text-hunter-green'
              )}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
