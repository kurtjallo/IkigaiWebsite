export interface NavigationLink {
  label: string
  href: string
}

export const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'The Model', href: '/model' },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
]

export const ctaNav = {
  label: 'Schedule a Strategic Conversation',
  href: '/contact',
} as const
