export interface Value {
  name: string
  description: string
  icon: string
}

export const values: Value[] = [
  {
    name: 'Integrity',
    description:
      'We build on truth. Every recommendation, every framework, every conversation is grounded in honesty and transparency.',
    icon: 'shield',
  },
  {
    name: 'Accountability',
    description:
      'We hold ourselves to the same standards we help organizations build. Our work creates measurable outcomes, not just deliverables.',
    icon: 'target',
  },
  {
    name: 'Social Justice',
    description:
      'We believe strong organizations create just communities. Our work centers equity, inclusion, and the dignity of every person served.',
    icon: 'scale',
  },
  {
    name: 'Excellence',
    description:
      'Good enough is not our standard. We bring rigorous methodology, deep expertise, and relentless attention to detail to every engagement.',
    icon: 'award',
  },
  {
    name: 'Courageous Leadership',
    description:
      'We name what others avoid. Organizational transformation requires honest assessment and the courage to act on it.',
    icon: 'compass',
  },
]
