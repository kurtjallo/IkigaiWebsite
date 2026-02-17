import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Divider } from '@/components/ui/divider'
import { WordMark } from '@/components/svg/wordmark'
import { navigationLinks } from '@/lib/data/navigation'

export function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-neutral-950 py-16 md:py-20">
      <Container>
        {/* Top section: Brand + Navigation */}
        <div className="md:grid md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="inline-block text-xl">
              <WordMark variant="light" />
            </Link>
            <p className="mt-2 text-sm text-neutral-400">
              Organizational Architects for Purpose-Driven Organizations
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 md:mt-0 md:justify-end">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Middle section: Contact info */}
        <div className="mt-12">
          <Divider />
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
            <p className="text-sm text-neutral-500">info@ikigaiconsulting.ca</p>
            <p className="text-sm text-neutral-500">Ontario, Canada</p>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="mt-8">
          <Divider />
          <p className="mt-8 text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Ikigai Consulting Group. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
