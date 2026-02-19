export interface Pillar {
  slug: string
  title: string
  subtitle: string
  description: string
  outcomes: string[]
  included: string[]
  icon: string
  ctaText: string
}

export const pillars: Pillar[] = [
  {
    slug: 'strategic',
    title: 'Strategic Architecture',
    subtitle: 'Vision-to-Action Alignment',
    description:
      'Designing strategic scaffolding that translates mission into measurable outcomes. We work with leadership and stakeholders to create living strategic plans that drive daily decisions, not documents that gather dust on shelves.',
    outcomes: [
      'Aligned strategic plan with clear priorities',
      'Clear 3-year roadmap with milestones',
      'Mission-to-action alignment framework',
      'Stakeholder-endorsed organizational direction',
    ],
    included: [
      'Strategic assessment and environmental scan (a review of external trends affecting your org)',
      'Conversations with your team, board, and community',
      'Strategic plan development',
      'Implementation roadmap with accountability checkpoints',
    ],
    icon: 'compass',
    ctaText: 'Explore Strategic Architecture',
  },
  {
    slug: 'governance',
    title: 'Governance Architecture',
    subtitle: 'Building Boards That Lead, Not Just Meet',
    description:
      'Structuring governance systems for accountability, clarity, and strategic oversight. We help boards move from passive attendance to active leadership, with clear roles, robust policies, and meaningful engagement.',
    outcomes: [
      'Comprehensive governance framework',
      'Role clarity for board and staff',
      'Policy alignment across the organization',
      'Improved board engagement and participation',
    ],
    included: [
      'Governance audit and gap analysis',
      'Board development workshops',
      'Policy framework design',
      'Succession planning for board leadership',
    ],
    icon: 'building',
    ctaText: 'Strengthen Your Governance',
  },
  {
    slug: 'operational',
    title: 'Operational Architecture',
    subtitle: 'Systems That Sustain, Not Just Survive',
    description:
      'Designing operational infrastructure that supports growth without burning out your people. We build the systems, processes, and workflows that allow mission-driven organizations to scale their impact sustainably.',
    outcomes: [
      'Streamlined workflows and clear processes',
      'Documented standard operating procedures',
      'Optimized resource allocation',
      'Reduced operational friction and staff burnout',
    ],
    included: [
      'Operational assessment and capacity analysis (understanding what your team can realistically handle)',
      'Process mapping and documentation',
      'Workflow redesign and optimization',
      'Capacity planning for sustainable growth',
    ],
    icon: 'settings',
    ctaText: 'Architect Your Operations',
  },
  {
    slug: 'program',
    title: 'Program Architecture',
    subtitle: 'Impact by Design, Not by Accident',
    description:
      'Structuring programs for measurable community impact with built-in evaluation. We ensure every program has a clear logic model, defined outcomes, and the data infrastructure to demonstrate its value to funders and communities.',
    outcomes: [
      'Logic model alignment across all programs',
      'Outcome measurement framework',
      'Program sustainability plan',
      'Enhanced funder confidence and reporting',
    ],
    included: [
      'Program review and gap analysis',
      'Logic model development',
      'Evaluation framework design',
      'Stakeholder feedback systems',
    ],
    icon: 'layers',
    ctaText: 'Design for Impact',
  },
  {
    slug: 'leadership',
    title: 'Leadership Architecture',
    subtitle: 'Leaders Who Build Leaders',
    description:
      'Developing leadership pipelines and cultures that sustain organizations beyond any single leader. We design systems that identify, develop, and support emerging leaders at every level of your organization.',
    outcomes: [
      'Leadership development plan',
      'Mentorship and coaching framework',
      'Succession readiness at all levels',
      'Strengthened team alignment and collaboration',
    ],
    included: [
      'Leadership assessment and 360 feedback (input from peers, reports, and supervisors)',
      'Executive coaching and mentorship',
      'Leadership development program design',
      'Team alignment and culture sessions',
    ],
    icon: 'users',
    ctaText: 'Develop Your Leaders',
  },
  {
    slug: 'accountability',
    title: 'Accountability Architecture',
    subtitle: 'What Gets Measured Gets Strengthened',
    description:
      'Building transparent reporting and accountability systems that demonstrate impact to funders and communities. We create the dashboards, frameworks, and reporting structures that turn data into stories of meaningful change.',
    outcomes: [
      'Performance dashboard with key indicators',
      'Comprehensive reporting framework',
      'Stakeholder accountability plan',
      'Improved funder relationships and confidence',
    ],
    included: [
      'KPI development and baseline measurement',
      'Reporting system design and implementation',
      'Board reporting templates',
      'Funder reporting alignment and streamlining',
    ],
    icon: 'bar-chart',
    ctaText: 'Build Accountability Systems',
  },
  {
    slug: 'community',
    title: 'Community Architecture',
    subtitle: 'Rooted in the Communities You Serve',
    description:
      'Designing authentic community engagement strategies that move beyond consultation to genuine partnership. We help organizations build trust, listen deeply, and create structures for shared decision-making with the communities they serve.',
    outcomes: [
      'Community engagement strategy',
      'Partnership framework with clear expectations',
      'Feedback integration systems',
      'Strengthened community trust and collaboration',
    ],
    included: [
      'Community asset mapping',
      'Stakeholder analysis and prioritization',
      'Engagement strategy development',
      'Partnership agreements and shared governance models (decision-making structures that include community voices)',
    ],
    icon: 'heart-handshake',
    ctaText: 'Engage Your Community',
  },
]
