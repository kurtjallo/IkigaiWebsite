// @ts-nocheck
'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react'
import { playfairDisplay, libreBaskerville, literata } from './fonts'
import { pillars } from '@/lib/data/pillars'

/* ─── Color Tokens ─── */
const c = {
  editorialGreen: '#1A3C2A',
  forest: '#2D5A3D',
  antiqueGold: '#B8941F',
  parchmentGold: '#E5D4A1',
  deepGold: '#96780F',
  warmWhite: '#FAFAF6',
  warmGray: '#F0EDE6',
  softCream: '#F5F2EA',
  trueBlack: '#1A1A1A',
  darkGray: '#4A4A4A',
  mediumGray: '#7A7A7A',
  burgundy: '#6B2D3E',
  ruleLt: '#E0DDD6',
  ruleMd: '#C4C0B8',
  ruleHv: '#8A8680',
}

/* ─── Font class strings ─── */
const fp = playfairDisplay.variable
const flb = libreBaskerville.variable
const flt = literata.variable

const playfair = `var(--font-c3-playfair), serif`
const libre = `var(--font-c3-libre-baskerville), serif`
const lit = `var(--font-c3-literata), serif`
const inter = `var(--font-inter), sans-serif`

/* ─── Phases ─── */
const phases = [
  { label: 'Blueprint', desc: 'Assess, audit, align' },
  { label: 'Build', desc: 'Design systems & structures' },
  { label: 'Strengthen', desc: 'Develop, coach, embed' },
  { label: 'Sustain', desc: 'Measure, iterate, grow' },
]

/* ─── Animation helpers ─── */
function useFade(prefersReduced: boolean) {
  return {
    initial: prefersReduced ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }
}

/* ─── Masthead ─── */
function Masthead() {
  const links = ['About', 'Services', 'Model', 'Impact', 'Contact']
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: c.warmWhite,
      }}
    >
      <div
        style={{
          maxWidth: '76rem',
          margin: '0 auto',
          padding: '1.25rem 2rem 1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: playfair,
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: c.trueBlack,
                lineHeight: 1,
              }}
            >
              IKIGAI
            </div>
            <div
              style={{
                fontFamily: inter,
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase' as const,
                color: c.mediumGray,
                marginTop: '0.25rem',
              }}
            >
              Organizational Architects
            </div>
          </div>

          {/* Nav links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
            }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                style={{
                  fontFamily: inter,
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase' as const,
                  color: c.darkGray,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = c.antiqueGold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = c.darkGray)
                }
              >
                {link}
              </a>
            ))}

            {/* Gold CTA separator + link */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '1px',
                  height: '1.25rem',
                  backgroundColor: c.antiqueGold,
                }}
                aria-hidden="true"
              />
              <a
                href="/contact"
                style={{
                  fontFamily: inter,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  color: c.antiqueGold,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = c.deepGold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = c.antiqueGold)
                }
              >
                Schedule a Conversation
              </a>
            </span>
          </nav>
        </div>
      </div>

      {/* 2px charcoal rule */}
      <div
        style={{
          height: '2px',
          backgroundColor: c.ruleHv,
        }}
        aria-hidden="true"
      />
    </header>
  )
}

/* ─── Hero Cover ─── */
function HeroCover({ prefersReduced }: { prefersReduced: boolean }) {
  const fade = useFade(prefersReduced)

  return (
    <section
      style={{
        backgroundColor: c.editorialGreen,
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '76rem',
          margin: '0 auto',
          padding: '6rem 2rem',
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: '3rem',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left content */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div {...fade}>
            {/* Kicker */}
            <div
              style={{
                fontFamily: inter,
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase' as const,
                color: c.parchmentGold,
                marginBottom: '1.25rem',
              }}
            >
              Purpose-Driven Organizational Design
            </div>

            {/* Gold rule */}
            <div
              style={{
                width: '4rem',
                height: '1px',
                backgroundColor: c.antiqueGold,
                marginBottom: '2rem',
              }}
              aria-hidden="true"
            />

            {/* Headline */}
            <h1
              style={{
                fontFamily: playfair,
                fontWeight: 700,
                fontSize: 'clamp(3rem, 5vw, 5.5rem)',
                lineHeight: 1.05,
                color: c.warmWhite,
                margin: '0 0 1.75rem 0',
                letterSpacing: '-0.01em',
              }}
            >
              Architecting
              <br />
              Organizations
              <br />
              That Thrive
            </h1>

            {/* Subhead */}
            <p
              style={{
                fontFamily: lit,
                fontStyle: 'italic',
                fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                lineHeight: 1.6,
                color: c.parchmentGold,
                margin: '0 0 2.5rem 0',
                maxWidth: '34rem',
              }}
            >
              We design the structural foundations that allow
              mission-driven organizations to move from fragility to resilience,
              from surviving to sustaining meaningful impact.
            </p>

            {/* CTA - outline ghost button */}
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                fontFamily: inter,
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase' as const,
                color: c.parchmentGold,
                border: `1px solid ${c.parchmentGold}`,
                padding: '1rem 2.25rem',
                textDecoration: 'none',
                borderRadius: 0,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = c.parchmentGold
                e.currentTarget.style.color = c.editorialGreen
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = c.parchmentGold
              }}
            >
              Begin the Conversation
            </a>
          </motion.div>
        </div>

        {/* Right - large watermark number */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(14rem, 22vw, 28rem)',
              color: c.parchmentGold,
              opacity: 0.06,
              lineHeight: 1,
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            01
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontSize: '0.625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase' as const,
            color: c.parchmentGold,
            opacity: 0.5,
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{
            width: '1px',
            height: '3rem',
            backgroundColor: c.parchmentGold,
            opacity: 0.4,
            transformOrigin: 'top',
          }}
          animate={
            prefersReduced
              ? {}
              : { scaleY: [0, 1, 0], opacity: [0.2, 0.5, 0.2] }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}

/* ─── Problem Section (Drop Cap) ─── */
function ProblemSection({ prefersReduced }: { prefersReduced: boolean }) {
  const fade = useFade(prefersReduced)

  const bodyStyle: React.CSSProperties = {
    fontFamily: lit,
    fontSize: '1.0625rem',
    lineHeight: 1.8,
    color: c.darkGray,
    fontFeatureSettings: '"kern" 1, "liga" 1, "onum" 1',
  }

  return (
    <section
      style={{
        backgroundColor: c.warmWhite,
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
        {/* Folio + kicker */}
        <motion.div
          {...fade}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
            }}
          >
            02
          </span>
          <span
            style={{
              width: '2rem',
              height: '1px',
              backgroundColor: c.ruleMd,
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: inter,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
            }}
          >
            The Challenge
          </span>
        </motion.div>

        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.1 }}>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.15,
              color: c.trueBlack,
              margin: '0 0 2.5rem 0',
            }}
          >
            Strong Missions.
            <br />
            Fragile Structures.
          </h2>
        </motion.div>

        {/* 1px rule */}
        <div
          style={{
            height: '1px',
            backgroundColor: c.ruleLt,
            marginBottom: '2.5rem',
          }}
          aria-hidden="true"
        />

        {/* Drop cap paragraph */}
        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.2 }}>
          <p style={{ ...bodyStyle, marginBottom: '1.75rem' }}>
            <span
              style={{
                fontFamily: playfair,
                fontWeight: 700,
                fontSize: '4.5rem',
                lineHeight: 0.8,
                float: 'left',
                color: c.antiqueGold,
                marginRight: '0.5rem',
                marginTop: '0.125rem',
              }}
            >
              A
            </span>
            cross Ontario, purpose-driven organizations carry extraordinary
            missions on structurally fragile foundations. Strategic plans sit on
            shelves, never translated into daily decisions. Governance structures
            exist on paper but not in practice. Programs drift from their
            original intent, and the leaders who hold everything together burn
            quietly under the weight of it all.
          </p>

          <p style={{ ...bodyStyle, marginBottom: '1.75rem' }}>
            The challenge is rarely a lack of commitment. These are people who
            have dedicated their lives to social impact. The challenge is
            structural: organizations built on good intentions rather than
            architectural integrity. And without that structural foundation,
            even the most powerful mission will eventually fracture.
          </p>

          {/* 1px rule */}
          <div
            style={{
              height: '1px',
              backgroundColor: c.ruleLt,
              margin: '2.5rem 0',
            }}
            aria-hidden="true"
          />

          <p style={{ ...bodyStyle, marginBottom: 0 }}>
            What&rsquo;s needed is not another report or workshop. What&rsquo;s needed is an
            architect&mdash;someone who understands how to design the structural
            systems that allow mission-driven organizations to move from
            surviving to thriving.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Solution Section (Pull Quote) ─── */
function SolutionSection({ prefersReduced }: { prefersReduced: boolean }) {
  const fade = useFade(prefersReduced)

  return (
    <section
      style={{
        backgroundColor: c.warmWhite,
      }}
    >
      {/* 2px charcoal rule */}
      <div
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <div
          style={{ height: '2px', backgroundColor: c.ruleHv }}
          aria-hidden="true"
        />
      </div>

      <div
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          padding: '4rem 2rem 6rem',
        }}
      >
        {/* Folio + kicker */}
        <motion.div
          {...fade}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
            }}
          >
            03
          </span>
          <span
            style={{
              width: '2rem',
              height: '1px',
              backgroundColor: c.ruleMd,
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: inter,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
            }}
          >
            Our Approach
          </span>
        </motion.div>

        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.1 }}>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.15,
              color: c.trueBlack,
              margin: '0 0 2.5rem 0',
            }}
          >
            We Are Organizational Architects.
          </h2>
        </motion.div>

        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.15 }}>
          <p
            style={{
              fontFamily: lit,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: c.darkGray,
              fontFeatureSettings: '"kern" 1, "liga" 1, "onum" 1',
              marginBottom: '3rem',
            }}
          >
            Ikigai Consulting Group works at the intersection of mission and
            structure. We don&rsquo;t offer templates or off-the-shelf solutions.
            We design bespoke organizational architecture&mdash;strategic
            frameworks, governance systems, operational infrastructure, and
            leadership pipelines&mdash;that are built specifically for the
            purpose-driven organizations of Ontario.
          </p>
        </motion.div>

        {/* Pull Quote */}
        <motion.blockquote
          {...fade}
          transition={{ ...fade.transition, delay: 0.2 }}
          style={{
            margin: '0 0 3rem 0',
            padding: '2rem 0 2rem 2.5rem',
            borderLeft: `2px solid ${c.antiqueGold}`,
            position: 'relative',
          }}
        >
          {/* Decorative quotation mark */}
          <span
            style={{
              fontFamily: playfair,
              fontSize: '6rem',
              lineHeight: 1,
              color: c.antiqueGold,
              opacity: 0.3,
              position: 'absolute',
              top: '-0.5rem',
              left: '2.5rem',
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            style={{
              fontFamily: playfair,
              fontStyle: 'italic',
              fontSize: 'clamp(1.375rem, 2.2vw, 2rem)',
              lineHeight: 1.45,
              color: c.trueBlack,
              margin: 0,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Structure is not the enemy of creativity&mdash;it is the
            foundation upon which meaningful impact is built.
          </p>
        </motion.blockquote>

        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.25 }}>
          <p
            style={{
              fontFamily: lit,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: c.darkGray,
              fontFeatureSettings: '"kern" 1, "liga" 1, "onum" 1',
              margin: 0,
            }}
          >
            Our signature Ikigai Architecture Model&trade; moves organizations
            through four phases&mdash;Blueprint, Build, Strengthen,
            Sustain&mdash;ensuring that every intervention is grounded in
            assessment, designed with intention, implemented with care, and
            measured for real-world results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Pillars Feature Layout ─── */
function PillarsFeature({ prefersReduced }: { prefersReduced: boolean }) {
  const fade = useFade(prefersReduced)
  const featured = pillars[0]
  const remaining = pillars.slice(1)

  return (
    <section
      style={{
        backgroundColor: c.warmWhite,
        padding: '0 2rem 6rem',
      }}
    >
      <div style={{ maxWidth: '76rem', margin: '0 auto' }}>
        {/* Top rule */}
        <div
          style={{ height: '2px', backgroundColor: c.ruleHv }}
          aria-hidden="true"
        />

        {/* Folio + kicker */}
        <motion.div
          {...fade}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            margin: '3rem 0',
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
            }}
          >
            04
          </span>
          <span
            style={{
              width: '2rem',
              height: '1px',
              backgroundColor: c.ruleMd,
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: inter,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
            }}
          >
            Seven Pillars of Architecture
          </span>
        </motion.div>

        <motion.h2
          {...fade}
          style={{
            fontFamily: playfair,
            fontWeight: 700,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            lineHeight: 1.15,
            color: c.trueBlack,
            margin: '0 0 3rem 0',
          }}
        >
          The Architecture of Impact
        </motion.h2>

        {/* Featured pillar (8/12) */}
        <motion.article
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '8fr 4fr',
            gap: '3rem',
            borderTop: `1px solid ${c.ruleMd}`,
            borderBottom: `1px solid ${c.ruleMd}`,
            padding: '3rem 0',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: inter,
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase' as const,
                color: c.antiqueGold,
                marginBottom: '0.75rem',
              }}
            >
              Featured Pillar
            </div>
            <h3
              style={{
                fontFamily: playfair,
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                lineHeight: 1.2,
                color: c.trueBlack,
                margin: '0 0 0.5rem 0',
              }}
            >
              {featured.title}
            </h3>
            <p
              style={{
                fontFamily: inter,
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: c.mediumGray,
                margin: '0 0 1.5rem 0',
              }}
            >
              {featured.subtitle}
            </p>
            <p
              style={{
                fontFamily: lit,
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: c.darkGray,
                fontFeatureSettings: '"kern" 1, "liga" 1, "onum" 1',
                margin: 0,
              }}
            >
              {featured.description}
            </p>
          </div>

          {/* Pull quote from outcomes */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <blockquote
              style={{
                margin: 0,
                padding: '0 0 0 1.5rem',
                borderLeft: `2px solid ${c.antiqueGold}`,
              }}
            >
              <p
                style={{
                  fontFamily: playfair,
                  fontStyle: 'italic',
                  fontSize: '1.25rem',
                  lineHeight: 1.5,
                  color: c.trueBlack,
                  margin: 0,
                }}
              >
                &ldquo;{featured.outcomes[0]}&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: inter,
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const,
                  color: c.mediumGray,
                  fontStyle: 'normal',
                  display: 'block',
                  marginTop: '0.75rem',
                }}
              >
                Key Outcome
              </cite>
            </blockquote>
          </div>
        </motion.article>

        {/* Remaining 6 pillars in 2-col with rule-line borders */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
          }}
        >
          {remaining.map((pillar, i) => (
            <motion.article
              key={pillar.slug}
              {...fade}
              transition={{ ...fade.transition, delay: 0.15 + i * 0.05 }}
              style={{
                padding: '2rem 2rem 2rem 0',
                borderTop: `1px solid ${c.ruleMd}`,
                borderRight:
                  i % 2 === 0 ? `1px solid ${c.ruleLt}` : 'none',
                paddingLeft: i % 2 === 1 ? '2rem' : '0',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const heading = e.currentTarget.querySelector(
                  'h3'
                ) as HTMLElement | null
                if (heading) heading.style.color = c.antiqueGold
              }}
              onMouseLeave={(e) => {
                const heading = e.currentTarget.querySelector(
                  'h3'
                ) as HTMLElement | null
                if (heading) heading.style.color = c.trueBlack
              }}
            >
              {/* Folio number */}
              <span
                style={{
                  fontFamily: inter,
                  fontSize: '0.625rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  color: c.ruleMd,
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                0{i + 2}
              </span>
              <h3
                style={{
                  fontFamily: playfair,
                  fontWeight: 700,
                  fontSize: '1.375rem',
                  lineHeight: 1.25,
                  color: c.trueBlack,
                  margin: '0 0 0.375rem 0',
                  transition: 'color 0.25s ease',
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: inter,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  color: c.mediumGray,
                  margin: '0 0 1rem 0',
                }}
              >
                {pillar.subtitle}
              </p>
              <p
                style={{
                  fontFamily: lit,
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: c.darkGray,
                  fontFeatureSettings: '"kern" 1, "liga" 1, "onum" 1',
                  margin: 0,
                }}
              >
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Ikigai Model Infographic ─── */
function ModelInfographic({ prefersReduced }: { prefersReduced: boolean }) {
  const fade = useFade(prefersReduced)

  return (
    <section
      style={{
        backgroundColor: c.warmWhite,
        padding: '0 2rem 6rem',
      }}
    >
      <div style={{ maxWidth: '76rem', margin: '0 auto' }}>
        {/* Top rule */}
        <div
          style={{ height: '2px', backgroundColor: c.ruleHv }}
          aria-hidden="true"
        />

        {/* Folio */}
        <motion.div
          {...fade}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            margin: '3rem 0',
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
            }}
          >
            05
          </span>
          <span
            style={{
              width: '2rem',
              height: '1px',
              backgroundColor: c.ruleMd,
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: inter,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
            }}
          >
            The Ikigai Architecture Model&trade;
          </span>
        </motion.div>

        <motion.h2
          {...fade}
          style={{
            fontFamily: playfair,
            fontWeight: 700,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            lineHeight: 1.15,
            color: c.trueBlack,
            margin: '0 0 3rem 0',
          }}
        >
          A Framework for Structural Excellence
        </motion.h2>

        {/* Phase flow - horizontal */}
        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            marginBottom: '3rem',
            borderTop: `1px solid ${c.ruleMd}`,
            borderBottom: `1px solid ${c.ruleMd}`,
          }}
        >
          {phases.map((phase, i) => (
            <div
              key={phase.label}
              style={{
                padding: '1.75rem 1.5rem',
                borderRight:
                  i < 3 ? `1px solid ${c.ruleLt}` : 'none',
                position: 'relative',
              }}
            >
              {/* Connecting arrow (except last) */}
              {i < 3 && (
                <span
                  style={{
                    position: 'absolute',
                    right: '-0.375rem',
                    top: '50%',
                    width: '0.75rem',
                    height: '0.75rem',
                    borderRight: `1.5px solid ${c.antiqueGold}`,
                    borderBottom: `1.5px solid ${c.antiqueGold}`,
                    transform: 'translateY(-50%) rotate(-45deg)',
                    zIndex: 2,
                  }}
                  aria-hidden="true"
                />
              )}

              <div
                style={{
                  fontFamily: inter,
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: c.antiqueGold,
                  marginBottom: '0.5rem',
                }}
              >
                Phase {String(i + 1).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: inter,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const,
                  color: c.trueBlack,
                  marginBottom: '0.5rem',
                }}
              >
                {phase.label}
              </div>
              <div
                style={{
                  fontFamily: lit,
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  color: c.mediumGray,
                  fontStyle: 'italic',
                }}
              >
                {phase.desc}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 7 Pillar columns with intersection dots */}
        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 0,
            position: 'relative',
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.slug}
              style={{
                borderRight:
                  i < 6 ? `1px solid ${c.ruleLt}` : 'none',
                padding: '1.75rem 1rem',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Intersection dot */}
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: c.antiqueGold,
                  margin: '0 auto 1.25rem',
                }}
                aria-hidden="true"
              />

              {/* Dashed leader line */}
              <div
                style={{
                  width: '1px',
                  height: '1.5rem',
                  borderLeft: `1px dashed ${c.ruleMd}`,
                  margin: '0 auto 1rem',
                }}
                aria-hidden="true"
              />

              {/* Pillar label */}
              <div
                style={{
                  fontFamily: libre,
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: c.trueBlack,
                  marginBottom: '0.5rem',
                }}
              >
                {pillar.title.replace(' Architecture', '')}
              </div>

              {/* Margin annotation */}
              <div
                style={{
                  fontFamily: inter,
                  fontSize: '0.625rem',
                  lineHeight: 1.5,
                  color: c.mediumGray,
                  letterSpacing: '0.02em',
                }}
              >
                {pillar.subtitle}
              </div>
            </div>
          ))}

          {/* Horizontal connecting rule across all columns */}
          <div
            style={{
              position: 'absolute',
              top: 'calc(1.75rem + 3px)',
              left: 0,
              right: 0,
              height: '1px',
              backgroundColor: c.ruleLt,
              zIndex: 0,
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Bottom annotation */}
        <div
          style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: `1px solid ${c.ruleLt}`,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontFamily: lit,
              fontSize: '0.875rem',
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: c.mediumGray,
              textAlign: 'center',
              maxWidth: '36rem',
            }}
          >
            Each pillar operates independently yet integrates with all
            others&mdash;creating organizational coherence from mission through
            to community impact.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Section ─── */
function CTASection({ prefersReduced }: { prefersReduced: boolean }) {
  const fade = useFade(prefersReduced)

  return (
    <section
      style={{
        backgroundColor: c.softCream,
        padding: '6rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '42rem',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <motion.div {...fade}>
          {/* Kicker */}
          <div
            style={{
              fontFamily: inter,
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: c.mediumGray,
              marginBottom: '1.5rem',
            }}
          >
            Begin the Conversation
          </div>

          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.2,
              color: c.trueBlack,
              margin: '0 0 1.5rem 0',
            }}
          >
            Let&rsquo;s Architect
            <br />
            Your Organization.
          </h2>

          <p
            style={{
              fontFamily: lit,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: c.darkGray,
              fontFeatureSettings: '"kern" 1, "liga" 1, "onum" 1',
              margin: '0 0 2.5rem 0',
            }}
          >
            Every strong structure begins with a conversation. We&rsquo;ll listen
            to where you are, understand where you want to be, and chart a
            clear path forward.
          </p>

          {/* Ghost CTA link */}
          <a
            href="/contact"
            style={{
              fontFamily: inter,
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: c.antiqueGold,
              textDecoration: 'none',
              borderBottom: `1px solid ${c.antiqueGold}`,
              paddingBottom: '0.375rem',
              transition: 'color 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = c.deepGold
              e.currentTarget.style.borderColor = c.deepGold
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = c.antiqueGold
              e.currentTarget.style.borderColor = c.antiqueGold
            }}
          >
            Schedule a Strategic Conversation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Colophon Footer ─── */
function Colophon() {
  return (
    <footer
      style={{
        backgroundColor: c.warmWhite,
        borderTop: `1px solid ${c.ruleMd}`,
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '76rem',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontSize: '0.6875rem',
            letterSpacing: '0.08em',
            color: c.mediumGray,
          }}
        >
          &copy; {new Date().getFullYear()} Ikigai Consulting Group
        </span>
        <span
          style={{
            fontFamily: inter,
            fontSize: '0.6875rem',
            letterSpacing: '0.08em',
            color: c.ruleMd,
          }}
        >
          Concept 03 &middot; Editorial Authority
        </span>
      </div>
    </footer>
  )
}

/* ─── Reading Progress Bar ─── */
function ReadingProgress({ prefersReduced }: { prefersReduced: boolean }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (prefersReduced) return null

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: c.antiqueGold,
        transformOrigin: '0%',
        scaleX,
        zIndex: 100,
      }}
    />
  )
}

/* ─── Main Page ─── */
export default function Concept3Page() {
  const prefersReduced = useReducedMotion() ?? false

  return (
    <div
      className={`${fp} ${flb} ${flt}`}
      style={{
        backgroundColor: c.warmWhite,
        fontFeatureSettings: '"kern" 1, "liga" 1, "onum" 1',
      }}
    >
      <ReadingProgress prefersReduced={prefersReduced} />
      <Masthead />
      <HeroCover prefersReduced={prefersReduced} />
      <ProblemSection prefersReduced={prefersReduced} />
      <SolutionSection prefersReduced={prefersReduced} />
      <PillarsFeature prefersReduced={prefersReduced} />
      <ModelInfographic prefersReduced={prefersReduced} />
      <CTASection prefersReduced={prefersReduced} />
      <Colophon />
    </div>
  )
}
