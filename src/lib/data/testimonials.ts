export interface Testimonial {
  quote: string
  name: string
  role: string
  organization: string
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Before working with Ikigai, our board meetings felt like a formality. Now our directors arrive prepared, ask strategic questions, and actually drive the organization forward. The governance framework gave us the structure we didn\'t know we were missing.',
    name: 'Margaret Chen',
    role: 'Board Chair',
    organization: 'Hamilton Community Services Alliance',
  },
  {
    quote:
      'We had eight programs and no way to tell funders which ones were working. Ikigai helped us build logic models and an outcome dashboard that transformed our reporting. For the first time, we can show the impact we always knew we were making.',
    name: 'David Okafor',
    role: 'Executive Director',
    organization: 'Toronto Neighbourhood Health Collective',
  },
  {
    quote:
      'I spent 18 years building this organization, and I was terrified that it wouldn\'t survive without me. Ikigai helped us develop three emerging leaders and document everything. Now I know the mission will continue long after I step back.',
    name: 'Patricia Moreau',
    role: 'Founder & Executive Director',
    organization: 'Ottawa Women\'s Shelter Network',
  },
  {
    quote:
      'What set Ikigai apart was their refusal to give us a cookie-cutter plan. They sat with our staff, listened to our community partners, and designed a strategy that actually reflects the neighbourhoods we serve. The stakeholder engagement process alone changed how we work.',
    name: 'Amara Williams',
    role: 'Director of Programs',
    organization: 'Peel Region Youth Services',
  },
]
