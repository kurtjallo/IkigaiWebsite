import type { Metadata } from 'next'

export const BASE_URL = 'https://ikigaiconsulting.ca'

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: '/images/favicon.ico',
    apple: '/apple-icon',
  },
  title: {
    template: '%s | Ikigai Consulting Group',
    default:
      'Ikigai Consulting Group | Organizational Architects for Purpose-Driven Organizations',
  },
  description:
    'Ikigai Consulting Group architects governance, strategy, and operational systems for Ontario nonprofits, NGOs, and social service agencies. Book a call.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: BASE_URL,
    siteName: 'Ikigai Consulting Group',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ikigai Consulting Group - Organizational Architects for Purpose-Driven Organizations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title:
      'Organizational Architects for Purpose-Driven Organizations in Ontario',
    description:
      'Ikigai Consulting Group architects governance, strategy, and operational systems for Ontario nonprofits, NGOs, and social service agencies. Book a call.',
    openGraph: {
      title: 'Ikigai Consulting Group | Organizational Architects',
      description:
        'Ikigai Consulting Group architects governance, strategy, and operational systems for Ontario nonprofits, NGOs, and social service agencies. Book a call.',
      url: BASE_URL,
    },
    alternates: {
      canonical: BASE_URL,
    },
  },
  about: {
    title: 'About Us',
    description:
      'Ikigai Consulting Group brings deep organizational architecture expertise to Ontario nonprofits and purpose-driven organizations.',
    openGraph: {
      title: 'About Us | Ikigai Consulting Group',
      description:
        'Ikigai Consulting Group brings deep organizational architecture expertise to Ontario nonprofits and purpose-driven organizations.',
      url: `${BASE_URL}/about`,
    },
    alternates: {
      canonical: `${BASE_URL}/about`,
    },
  },
  services: {
    title: 'Services',
    description:
      'Seven pillars of organizational architecture: strategic planning, governance, operations, program design, and leadership for Ontario nonprofits and NGOs.',
    openGraph: {
      title: 'Services | Ikigai Consulting Group',
      description:
        'Seven pillars of organizational architecture: strategic planning, governance, operations, program design, and leadership for Ontario nonprofits and NGOs.',
      url: `${BASE_URL}/services`,
    },
    alternates: {
      canonical: `${BASE_URL}/services`,
    },
  },
  model: {
    title: 'The Ikigai Architecture Model',
    description:
      'Discover our proprietary framework: Blueprint, Build, Strengthen, Sustain. Designed for Ontario nonprofits seeking lasting organizational development.',
    openGraph: {
      title: 'The Ikigai Architecture Model | Ikigai Consulting Group',
      description:
        'Discover our proprietary framework: Blueprint, Build, Strengthen, Sustain. Designed for Ontario nonprofits seeking lasting organizational development.',
      url: `${BASE_URL}/model`,
    },
    alternates: {
      canonical: `${BASE_URL}/model`,
    },
  },
  impact: {
    title: 'Case Studies & Impact',
    description:
      'See measurable results from Ontario nonprofits transformed through the Ikigai Architecture Model. Real governance improvements and organizational growth.',
    openGraph: {
      title: 'Case Studies & Impact | Ikigai Consulting Group',
      description:
        'See measurable results from Ontario nonprofits transformed through the Ikigai Architecture Model. Real governance improvements and organizational growth.',
      url: `${BASE_URL}/impact`,
    },
    alternates: {
      canonical: `${BASE_URL}/impact`,
    },
  },
  contact: {
    title: 'Contact',
    description:
      'Schedule a strategic conversation with Ikigai Consulting Group. Organizational consulting for Ontario nonprofits, charities, and social service agencies.',
    openGraph: {
      title: 'Contact | Ikigai Consulting Group',
      description:
        'Schedule a strategic conversation with Ikigai Consulting Group. Organizational consulting for Ontario nonprofits, charities, and social service agencies.',
      url: `${BASE_URL}/contact`,
    },
    alternates: {
      canonical: `${BASE_URL}/contact`,
    },
  },
}
