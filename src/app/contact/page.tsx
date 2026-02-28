'use client'

import React, { useState } from 'react'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  PageHeader,
  SectionLabel,
  tokens,
} from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  Form State Types                                                   */
/* ------------------------------------------------------------------ */

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

/* ------------------------------------------------------------------ */
/*  BEST FIT ORGANIZATIONS                                             */
/* ------------------------------------------------------------------ */

function BestFitSection() {
  const fits = [
    {
      label: 'Nonprofits ready to move beyond survival mode',
      desc: 'You have the mission but need stronger systems to scale your impact.',
    },
    {
      label: 'Boards seeking governance clarity',
      desc: 'Roles are unclear, attendance is low, or strategic oversight has slipped.',
    },
    {
      label: 'Organizations preparing for leadership transitions',
      desc: 'A founder or long-serving ED is moving on and no succession plan exists.',
    },
    {
      label: 'Teams that want measurable program outcomes',
      desc: 'Funders are asking for data you don\u2019t have, or programs lack clear impact metrics.',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: tokens.bone,
        padding: '5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="Best Fit" />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.deepGreen,
              marginBottom: '0.75rem',
            }}
          >
            Best Fit <em style={{ fontStyle: 'italic' }}>Organizations</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: tokens.charcoal,
              maxWidth: '40rem',
              marginBottom: '2.5rem',
            }}
          >
            We do our best work with organizations that are ready to invest in
            lasting structural change.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.08}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
              gap: '1.5rem',
            }}
          >
            {fits.map((fit) => (
              <StaggerItem key={fit.label}>
                <div
                  style={{
                    padding: '1.5rem',
                    borderLeft: `2px solid ${tokens.archGold}`,
                    backgroundColor: tokens.boneLight,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 500,
                      fontSize: '0.9375rem',
                      color: tokens.deepGreen,
                      marginBottom: '0.375rem',
                    }}
                  >
                    {fit.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.8125rem',
                      lineHeight: 1.65,
                      color: tokens.charcoal,
                    }}
                  >
                    {fit.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  CONTACT FORM SECTION                                               */
/* ------------------------------------------------------------------ */

function ContactFormSection() {
  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [challenge, setChallenge] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (honeypot) return

    setStatus('submitting')

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'test'

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          organization,
          email,
          challenge,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setOrganization('')
        setEmail('')
        setChallenge('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    backgroundColor: '#FFFFFF',
    border: `1px solid ${focusedField === field ? tokens.archGold : tokens.structuralLine}`,
    padding: '0.75rem 1rem',
    fontFamily: 'var(--font-ibm-plex-sans)',
    fontWeight: 400,
    fontSize: '1rem',
    color: tokens.ink,
    outline: 'none',
    borderRadius: '1px',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.2s ease',
  })

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-ibm-plex-sans)',
    fontWeight: 500,
    fontSize: '0.875rem',
    color: tokens.charcoal,
    display: 'block',
    marginBottom: '0.5rem',
  }

  return (
    <section
      style={{
        backgroundColor: tokens.bone,
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="01 / Reach Out" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
            gap: '4rem',
            marginTop: '2rem',
          }}
        >
          {/* Left column: intro text */}
          <FadeIn delay={0.1}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: tokens.deepGreen,
                  marginBottom: '1.5rem',
                }}
              >
                Tell Us About Your Challenge
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: tokens.charcoal,
                }}
              >
                Every engagement starts with understanding where you are. Share a
                bit about your organization and what you&apos;re working through,
                and we&apos;ll schedule a conversation to explore how we can help.
              </p>
            </div>
          </FadeIn>

          {/* Right column: form */}
          <FadeIn delay={0.2}>
            <div>
              {status === 'success' ? (
                <div
                  role="status"
                  aria-live="polite"
                  style={{
                    backgroundColor: '#E8F5E9',
                    border: '1px solid #A5D6A7',
                    borderRadius: '2px',
                    padding: '2rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: '#2E7D32',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Thank you!
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      color: '#2E7D32',
                    }}
                  >
                    You&apos;ll receive a calendar link to schedule your
                    30-minute call within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" style={labelStyle}>
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        style={inputStyle('name')}
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label htmlFor="contact-organization" style={labelStyle}>
                        Organization
                      </label>
                      <input
                        id="contact-organization"
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        onFocus={() => setFocusedField('organization')}
                        onBlur={() => setFocusedField(null)}
                        style={inputStyle('organization')}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" style={labelStyle}>
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        style={inputStyle('email')}
                      />
                    </div>

                    {/* Challenge */}
                    <div>
                      <label htmlFor="contact-challenge" style={labelStyle}>
                        Tell us about your challenge (optional)
                      </label>
                      <textarea
                        id="contact-challenge"
                        rows={5}
                        placeholder="Optional — or we can discuss on the call"
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        onFocus={() => setFocusedField('challenge')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...inputStyle('challenge'),
                          resize: 'vertical' as const,
                        }}
                      />
                    </div>

                    {/* Honeypot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-9999px',
                      }}
                      aria-hidden="true"
                    >
                      <label htmlFor="contact-website">Website</label>
                      <input
                        id="contact-website"
                        type="text"
                        name="_gotcha"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Error message */}
                    {status === 'error' && (
                      <p
                        role="alert"
                        style={{
                          fontFamily: 'var(--font-ibm-plex-sans)',
                          fontWeight: 400,
                          fontSize: '0.875rem',
                          color: '#C62828',
                        }}
                      >
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="mobile-cta-text"
                      style={{
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.875rem 2.5rem',
                        backgroundColor:
                          status === 'submitting'
                            ? tokens.structuralLine
                            : tokens.archGold,
                        color: tokens.ink,
                        border: 'none',
                        borderRadius: '1px',
                        cursor:
                          status === 'submitting' ? 'not-allowed' : 'pointer',
                        width: '100%',
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  COMMON CONCERNS FAQ                                                */
/* ------------------------------------------------------------------ */

function CommonConcernsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: '\u201CWe already have a strategic plan.\u201D',
      a: 'Great \u2014 that\u2019s a starting point. Most organizations we work with have a plan on paper. The challenge is usually turning it into daily practice with governance structures, operational alignment, and accountability measures that make the plan real.',
    },
    {
      q: '\u201COur board isn\u2019t ready for this.\u201D',
      a: 'That\u2019s more common than you think, and it\u2019s exactly where we start. We work with boards at every stage of readiness \u2014 from passive attendance to active governance. Our approach is designed to meet your board where they are.',
    },
    {
      q: '\u201CWe don\u2019t have the budget.\u201D',
      a: 'Many funders will fund capacity-building and governance strengthening as part of project or operational grants. We can help you identify funding pathways and frame the work in ways funders understand and support.',
    },
    {
      q: '\u201CWe\u2019ve tried consultants before.\u201D',
      a: 'We hear this often. The difference is that we don\u2019t deliver a report and leave. Our full-cycle model means we stay through implementation and follow up at 90 days to ensure results hold.',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: tokens.boneDark,
        padding: '5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <SectionLabel label="Common Concerns" />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.deepGreen,
              marginBottom: '2.5rem',
            }}
          >
            Questions We Hear <em style={{ fontStyle: 'italic' }}>Often</em>
          </h2>
        </FadeIn>

        <StaggerWrap staggerDelay={0.08}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: tokens.structuralLine }}>
            {faqs.map((faq, idx) => (
              <StaggerItem key={idx}>
                <div style={{ backgroundColor: tokens.boneLight }}>
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-panel-${idx}`}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      padding: '1.25rem 1.5rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 500,
                        fontSize: '0.9375rem',
                        color: tokens.deepGreen,
                      }}
                    >
                      {faq.q}
                    </span>
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      style={{
                        flexShrink: 0,
                        transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                      }}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        fill="none"
                        stroke={tokens.charcoal}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openIndex === idx && (
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      style={{
                        padding: '0 1.5rem 1.25rem',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-ibm-plex-sans)',
                          fontWeight: 300,
                          fontSize: '0.9375rem',
                          lineHeight: 1.75,
                          color: tokens.charcoal,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  CALENDAR BOOKING SECTION                                           */
/* ------------------------------------------------------------------ */

function CalendarBookingSection() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com'

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: tokens.deepGreen,
        padding: '6rem 2rem',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="02 / Book Directly" dark />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.parchment,
              marginBottom: '1rem',
            }}
          >
            Prefer to Schedule Now?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: tokens.boneDark,
              maxWidth: '40rem',
              marginBottom: '2.5rem',
            }}
          >
            A free, 30-minute conversation to discuss your
            organization&apos;s challenges and explore whether Ikigai is the
            right fit.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => window.open(calendlyUrl, '_blank')}
              className="mobile-cta-text"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.875rem 2.5rem',
                backgroundColor: tokens.archGold,
                color: tokens.ink,
                border: 'none',
                borderRadius: '1px',
                cursor: 'pointer',
                alignSelf: 'flex-start',
              }}
            >
              Book a Free 30-Min Call
            </button>
            <span
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: tokens.boneDark,
                opacity: 0.85,
                lineHeight: 1.5,
              }}
            >
              Free 30-minute strategy call.
              <br />
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                For leaders ready to strengthen their organization&rsquo;s foundations.
              </span>
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  LOCATION INFO SECTION                                              */
/* ------------------------------------------------------------------ */

function LocationInfoSection() {
  return (
    <section
      style={{
        backgroundColor: tokens.boneDark,
        padding: '5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: tokens.deepGreen,
              marginBottom: '1.5rem',
            }}
          >
            Serving Purpose-Driven Organizations Across Ontario
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            aria-hidden="true"
            style={{
              width: '80px',
              height: '2px',
              backgroundColor: tokens.archGold,
              margin: '0 auto 1.5rem',
            }}
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="mailto:hello@ikigaiconsulting.ca"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 400,
              fontSize: '1.0625rem',
              color: tokens.deepGreen,
              textDecoration: 'underline',
              textDecorationColor: tokens.archGold,
              textUnderlineOffset: '4px',
            }}
          >
            hello@ikigaiconsulting.ca
          </a>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: tokens.charcoal,
              marginTop: '1.5rem',
            }}
          >
            Based in the Greater Toronto Area. Available for in-person and virtual
            engagements across Ontario.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <>
      <PageHeader
        tagline="Get in Touch"
        heading="Begin the Conversation."
        description="Ready to build a stronger organization? Tell us about your challenge and we'll respond within 2 business days."
      />
      <BestFitSection />
      <ContactFormSection />
      <CommonConcernsSection />
      <CalendarBookingSection />
      <LocationInfoSection />
    </>
  )
}
