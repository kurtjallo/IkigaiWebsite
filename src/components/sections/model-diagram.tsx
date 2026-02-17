import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animation/fade-in'

const pillarLabels = [
  'Strategic',
  'Governance',
  'Operational',
  'Program',
  'Leadership',
  'Accountability',
  'Community',
]

const phases = [
  { name: 'Blueprint', y: 310 },
  { name: 'Build', y: 250 },
  { name: 'Strengthen', y: 190 },
  { name: 'Sustain', y: 130 },
]

function ModelVisualDiagram() {
  const svgWidth = 800
  const svgHeight = 420
  const pillarCount = 7
  const pillarWidth = 48
  const pillarGap = (svgWidth - 120) / (pillarCount - 1)
  const startX = 60

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="w-full h-auto"
      aria-hidden="true"
    >
      <defs>
        {/* Subtle grid pattern for architectural feel */}
        <pattern id="archGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#355E3B" strokeWidth="0.15" opacity="0.2" />
        </pattern>
        {/* Gold gradient for pillars */}
        <linearGradient id="pillarGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EBD399" />
          <stop offset="100%" stopColor="#D4A843" />
        </linearGradient>
        {/* Subtle shadow for depth */}
        <linearGradient id="pillarShadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#355E3B" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#355E3B" stopOpacity="0" />
        </linearGradient>
        {/* Foundation gradient */}
        <linearGradient id="foundationGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#355E3B" />
          <stop offset="100%" stopColor="#1F3823" />
        </linearGradient>
      </defs>

      {/* Background grid */}
      <rect width={svgWidth} height={svgHeight} fill="url(#archGrid)" />

      {/* Foundation base */}
      <rect x="20" y="340" width={svgWidth - 40} height="12" rx="2" fill="url(#foundationGrad)" />
      {/* Foundation line detail */}
      <line x1="20" y1="340" x2={svgWidth - 20} y2="340" stroke="#355E3B" strokeWidth="1.5" />

      {/* Phase strata lines -- horizontal bands across pillars */}
      {phases.map((phase) => (
        <g key={phase.name}>
          <line
            x1="40"
            y1={phase.y}
            x2={svgWidth - 40}
            y2={phase.y}
            stroke="#D4A843"
            strokeWidth="0.75"
            strokeDasharray="4 6"
            opacity="0.5"
          />
          <text
            x="32"
            y={phase.y + 4}
            textAnchor="end"
            fontSize="10"
            fontFamily="Georgia, serif"
            fill="#355E3B"
            opacity="0.7"
          >
            {phase.name}
          </text>
        </g>
      ))}

      {/* 7 Pillars as classical columns */}
      {pillarLabels.map((label, i) => {
        const cx = startX + i * pillarGap
        const pillarTop = 100
        const pillarBottom = 340

        return (
          <g key={label}>
            {/* Column shadow */}
            <rect
              x={cx - pillarWidth / 2 + 4}
              y={pillarTop + 4}
              width={pillarWidth}
              height={pillarBottom - pillarTop}
              rx="2"
              fill="url(#pillarShadow)"
            />

            {/* Column body */}
            <rect
              x={cx - pillarWidth / 2}
              y={pillarTop}
              width={pillarWidth}
              height={pillarBottom - pillarTop}
              rx="2"
              fill="url(#pillarGold)"
              opacity="0.15"
              stroke="#D4A843"
              strokeWidth="1"
            />

            {/* Column capital (top detail) */}
            <rect
              x={cx - pillarWidth / 2 - 4}
              y={pillarTop - 6}
              width={pillarWidth + 8}
              height="8"
              rx="1"
              fill="#355E3B"
              opacity="0.85"
            />

            {/* Column base detail */}
            <rect
              x={cx - pillarWidth / 2 - 3}
              y={pillarBottom - 2}
              width={pillarWidth + 6}
              height="6"
              rx="1"
              fill="#355E3B"
              opacity="0.6"
            />

            {/* Vertical center line for structure feel */}
            <line
              x1={cx}
              y1={pillarTop + 10}
              x2={cx}
              y2={pillarBottom - 10}
              stroke="#D4A843"
              strokeWidth="0.5"
              opacity="0.4"
            />

            {/* Pillar label */}
            <text
              x={cx}
              y="376"
              textAnchor="middle"
              fontSize="11"
              fontFamily="Georgia, serif"
              fill="#355E3B"
              fontWeight="600"
              letterSpacing="0.03em"
            >
              {label}
            </text>

            {/* Subtitle: "Architecture" */}
            <text
              x={cx}
              y="390"
              textAnchor="middle"
              fontSize="8.5"
              fontFamily="Georgia, serif"
              fill="#355E3B"
              opacity="0.6"
              letterSpacing="0.04em"
            >
              Architecture
            </text>
          </g>
        )
      })}

      {/* Central purpose core -- circle at center of pillars */}
      <circle
        cx={svgWidth / 2}
        cy="220"
        r="32"
        fill="none"
        stroke="#355E3B"
        strokeWidth="1.5"
      />
      <circle
        cx={svgWidth / 2}
        cy="220"
        r="22"
        fill="#355E3B"
        opacity="0.08"
      />
      <text
        x={svgWidth / 2}
        y="216"
        textAnchor="middle"
        fontSize="9"
        fontFamily="Georgia, serif"
        fill="#355E3B"
        fontWeight="700"
        letterSpacing="0.08em"
      >
        PURPOSE
      </text>
      <text
        x={svgWidth / 2}
        y="228"
        textAnchor="middle"
        fontSize="7.5"
        fontFamily="Georgia, serif"
        fill="#355E3B"
        opacity="0.7"
        letterSpacing="0.06em"
      >
        CORE
      </text>

      {/* Top entablature -- beam across all columns */}
      <rect
        x="20"
        y="82"
        width={svgWidth - 40}
        height="10"
        rx="1"
        fill="#355E3B"
        opacity="0.12"
      />
      <line x1="20" y1="82" x2={svgWidth - 20} y2="82" stroke="#355E3B" strokeWidth="1" opacity="0.4" />

      {/* Model title at top */}
      <text
        x={svgWidth / 2}
        y="68"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Georgia, serif"
        fill="#355E3B"
        fontWeight="700"
        letterSpacing="0.12em"
      >
        THE IKIGAI ARCHITECTURE MODEL
      </text>
      <text
        x={svgWidth / 2 + 158}
        y="62"
        fontSize="8"
        fontFamily="Georgia, serif"
        fill="#355E3B"
      >
        &#8482;
      </text>

      {/* Flow arrow at bottom */}
      <g opacity="0.7">
        <text
          x={svgWidth / 2}
          y="412"
          textAnchor="middle"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          fill="#937324"
          letterSpacing="0.2em"
          fontWeight="600"
        >
          BLUEPRINT &rarr; BUILD &rarr; STRENGTHEN &rarr; SUSTAIN
        </text>
      </g>
    </svg>
  )
}

export function ModelDiagram() {
  return (
    <Section background="white">
      <FadeIn>
        <SectionHeading
          tagline="Our Framework"
          heading="The Ikigai Architecture Model&#8482;"
          headingAs="h1"
          description="A proprietary methodology for building resilient, purpose-driven organizations. Seven architectural pillars, four transformative phases -- one integrated system designed to move your organization from fragile to enduring."
          align="center"
        />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div
          role="img"
          aria-label="The Ikigai Architecture Model diagram showing seven organizational pillars -- Strategic, Governance, Operational, Program, Leadership, Accountability, and Community Architecture -- arranged around a central purpose core, connected through four phases: Blueprint, Build, Strengthen, and Sustain."
          className="mx-auto mt-12 mb-8 max-w-3xl"
        >
          <ModelVisualDiagram />
        </div>
      </FadeIn>
    </Section>
  )
}
