import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://ikigaiconsulting.ca'),
  title: {
    template: '%s | Ikigai Consulting Group',
    default:
      'Ikigai Consulting Group | Organizational Architects for Purpose-Driven Organizations',
  },
  description:
    'Ikigai Consulting Group helps Ontario nonprofits, NGOs, and mission-driven organizations build sustainable structures through strategic planning, governance, and leadership development.',
}

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title:
      'Ikigai Consulting Group | Organizational Architects for Purpose-Driven Organizations',
    description:
      'Ontario\u2019s organizational architects for nonprofits and NGOs. We design governance, strategy, leadership, and operational systems that help mission-driven organizations thrive.',
  },
  about: {
    title: 'About Ikigai Consulting Group',
    description:
      'Founded by Nilda Bastone, Ikigai Consulting Group brings deep nonprofit expertise to Ontario\u2019s purpose-driven organizations. Learn about our values, philosophy, and commitment to impact.',
  },
  services: {
    title: 'Services \u2013 The 7 Pillars of Organizational Architecture',
    description:
      'From strategic planning to community engagement, our 7 pillars of organizational architecture give Ontario nonprofits and NGOs the structure they need to sustain and scale their impact.',
  },
  model: {
    title: 'The Ikigai Architecture Model\u2122',
    description:
      'Discover the Ikigai Architecture Model\u2122 \u2013 a proven framework that takes organizations from Blueprint to Build to Strengthen to Sustain. Designed for Ontario\u2019s nonprofit sector.',
  },
  impact: {
    title: 'Impact \u2013 Architecture in Action',
    description:
      'See how Ontario nonprofits and social service agencies have transformed their governance, programs, and leadership through the Ikigai Architecture Model\u2122. Real results, real impact.',
  },
  contact: {
    title: 'Begin the Conversation',
    description:
      'Ready to strengthen your organization\u2019s foundation? Schedule a strategic conversation with Ikigai Consulting Group. Serving nonprofits and NGOs across Ontario.',
  },
}
