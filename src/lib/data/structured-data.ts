import { BASE_URL } from '@/lib/data/metadata'
import { pillars } from '@/lib/data/pillars'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ikigai Consulting Group',
  description:
    'Organizational Architects for Purpose-Driven Organizations. We design governance, strategy, operations, and leadership systems for Ontario nonprofits and NGOs.',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  founder: {
    '@type': 'Person',
    name: 'Nilda Bastone',
    jobTitle: 'Founder & Principal Consultant',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Ontario',
    containedInPlace: {
      '@type': 'Country',
      name: 'Canada',
    },
  },
  knowsAbout: [
    'Organizational Development',
    'Nonprofit Governance',
    'Strategic Planning',
    'Leadership Development',
    'Operational Architecture',
    'Community Development',
    'Accountability Systems',
  ],
  sameAs: [],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'Ikigai Consulting Group',
  description:
    'Organizational consulting firm specializing in governance, strategy, and operational architecture for nonprofits and NGOs in Ontario, Canada.',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/opengraph-image.png`,
  founder: {
    '@type': 'Person',
    name: 'Nilda Bastone',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Ontario',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.6532,
    longitude: -79.3832,
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Ontario',
    },
  ],
  serviceType: 'Organizational Consulting',
  priceRange: '$$$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
}

export function getServiceSchemas() {
  return pillars.map((pillar) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pillar.title,
    description: pillar.description,
    provider: {
      '@type': 'Organization',
      name: 'Ikigai Consulting Group',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Ontario',
    },
    serviceType: 'Organizational Consulting',
    url: `${BASE_URL}/services#${pillar.slug}`,
  }))
}
