export interface CaseStudy {
  slug: string
  title: string
  organization: string
  sector: string
  challenge: string
  approach: string
  outcome: string
  metrics: string[]
  pillarsApplied: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rebuilding-governance-for-growth',
    title: 'Rebuilding Governance for Growth',
    organization: 'Hamilton Community Services Alliance',
    sector: 'Social Services',
    challenge:
      'A 30-year-old social service agency in Hamilton had grown significantly, but its governance had not kept pace. Board attendance had dropped to 45%, roles were unclear, and the executive director was making decisions that should have been the board\'s responsibility. Without structural change, the organization risked losing key funders.',
    approach:
      'We conducted a comprehensive governance audit and facilitated candid conversations with board members, staff leadership, and key stakeholders. Using the Ikigai Architecture Model\u2122, we redesigned the governance framework alongside a refreshed strategic plan, ensuring the board had both the structure and the confidence to lead.',
    outcome:
      'Within 12 months, board attendance rose to 85%, every position had a clear role description, and the board adopted a 3-year strategic plan with built-in accountability checkpoints. The strengthened governance structure directly contributed to securing $200K in new funding from a provincial funder who had previously flagged governance concerns.',
    metrics: [
      '85% board attendance, up from 45%',
      'Clear role descriptions for all 12 board positions',
      '3-year strategic plan adopted unanimously',
      '$200K in new funding secured within one year',
    ],
    pillarsApplied: ['governance', 'strategic'],
  },
  {
    slug: 'from-program-drift-to-impact-clarity',
    title: 'From Program Drift to Impact Clarity',
    organization: 'Toronto Neighbourhood Health Collective',
    sector: 'Community Health',
    challenge:
      'A community health organization in Toronto was running 8 programs across multiple neighbourhoods, but none had a formal evaluation framework. Staff were passionate but overwhelmed, funder reports were inconsistent, and leadership couldn\'t articulate which programs were creating the most community impact. Two major funders had expressed concern about the lack of outcome data.',
    approach:
      'We partnered with program leads and frontline staff to develop logic models for each program, then designed an organization-wide outcome measurement framework. Rather than imposing top-down metrics, we built the evaluation system collaboratively, ensuring staff understood and owned the process. We also streamlined funder reporting to reduce administrative burden.',
    outcome:
      'All 8 programs now have clear logic models with defined outcomes and indicators. Funder reporting improved by 60%, and two underperforming programs were restructured based on evidence rather than assumptions. The organization\'s new impact dashboard gives leadership real-time visibility into community outcomes across all programs.',
    metrics: [
      'Logic models developed for all 8 programs',
      '60% improvement in funder reporting quality and timeliness',
      'Organization-wide outcome measurement dashboard implemented',
      '2 programs restructured based on evidence-informed review',
    ],
    pillarsApplied: ['program', 'accountability'],
  },
  {
    slug: 'building-leadership-beyond-the-founder',
    title: 'Building Leadership Beyond the Founder',
    organization: 'Ottawa Women\'s Shelter Network',
    sector: 'Women\'s Services',
    challenge:
      'A respected women\'s shelter in Ottawa had been led by its founder for 18 years. While her leadership was deeply valued, the organization had no succession plan, no documented processes, and community partnerships were held together by personal relationships rather than organizational systems. The board recognized that the organization\'s sustainability depended on building leadership capacity beyond one person.',
    approach:
      'We worked with the founder, the board, and emerging leaders within the organization to design a comprehensive succession and leadership development plan. Simultaneously, we documented all critical operational processes and restructured community partnerships into formal agreements with shared accountability. The approach honoured the founder\'s legacy while building the systems needed for long-term sustainability.',
    outcome:
      'Three internal leaders were identified and enrolled in a structured development pathway. A complete operational manual was created for all core processes, reducing dependency on institutional knowledge held by any single person. Community partnerships were formalized, resulting in a 30% increase in partnership agreements, and the board adopted a succession plan with clear timelines and milestones.',
    metrics: [
      '3 internal successors identified and in active development',
      'Operational manual created for all core processes',
      '30% increase in formalized partnership agreements',
      'Board-adopted succession plan with 24-month timeline',
    ],
    pillarsApplied: ['leadership', 'operational', 'community'],
  },
]
