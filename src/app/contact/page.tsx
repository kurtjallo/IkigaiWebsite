'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn, PillLabel, tokens } from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  Calendly                                                           */
/* ------------------------------------------------------------------ */

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com'

function openCalendly() {
  window.open(CALENDLY_URL, '_blank')
}

/* ------------------------------------------------------------------ */
/*  Form State Types                                                   */
/* ------------------------------------------------------------------ */

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

/* ------------------------------------------------------------------ */
/*  CONTACT HERO + FORM                                                */
/* ------------------------------------------------------------------ */

function ContactHeroForm() {
  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [challenge, setChallenge] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

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

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(3rem, 6vw, 6rem) 2rem',
      }}
    >
      <div
        className="contact-grid"
        style={{
          maxWidth: '68rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* LEFT COLUMN */}
        <FadeIn delay={0.1}>
          <div style={{ paddingTop: '1rem' }}>
            <PillLabel label="Contact us" />

            <h1
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: tokens.ink,
                marginTop: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              Begin the Conversation.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: 1.7,
                color: tokens.bodyGray,
                marginBottom: '2rem',
                maxWidth: '28rem',
              }}
            >
              Book a free 30-minute call with Nilda, or send us a message and
              we&apos;ll respond within 2 business days.
            </p>

            <button
              type="button"
              onClick={openCalendly}
              className="contact-pill-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                padding: '0.75rem 1.75rem',
                backgroundColor: tokens.ink,
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
            >
              Book a Strategy Call
              <span aria-hidden="true" style={{ fontSize: '1.1em' }}>&rarr;</span>
            </button>

            <p
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontWeight: 400,
                fontSize: '0.8125rem',
                color: tokens.bodyGray,
                marginTop: '0.75rem',
              }}
            >
              Free 30-minute call with Nilda.
            </p>
          </div>
        </FadeIn>

        {/* RIGHT COLUMN — DARK FORM CARD */}
        <FadeIn delay={0.2}>
          <div
            style={{
              backgroundColor: tokens.deepGreen,
              borderRadius: 'var(--card-radius)',
              padding: '2rem 2.25rem',
            }}
          >
            {status === 'success' ? (
              <div
                role="status"
                aria-live="polite"
                style={{
                  padding: '2rem 0',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 500,
                    fontSize: '1.125rem',
                    color: '#FFFFFF',
                    marginBottom: '0.75rem',
                  }}
                >
                  Thank you!
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 400,
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  You&apos;ll receive a calendar link to schedule your
                  30-minute call within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.85)',
                        marginBottom: '0.375rem',
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="contact-input"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 400,
                        fontSize: '0.9375rem',
                        color: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box' as const,
                        transition: 'border-color 0.2s ease',
                      }}
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="contact-organization"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.85)',
                        marginBottom: '0.375rem',
                      }}
                    >
                      Organization{' '}
                      <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>
                        (optional)
                      </span>
                    </label>
                    <input
                      id="contact-organization"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="contact-input"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 400,
                        fontSize: '0.9375rem',
                        color: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box' as const,
                        transition: 'border-color 0.2s ease',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.85)',
                        marginBottom: '0.375rem',
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contact-input"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 400,
                        fontSize: '0.9375rem',
                        color: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box' as const,
                        transition: 'border-color 0.2s ease',
                      }}
                    />
                  </div>

                  {/* Challenge / Message */}
                  <div>
                    <label
                      htmlFor="contact-challenge"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.85)',
                        marginBottom: '0.375rem',
                      }}
                    >
                      Your challenge or message{' '}
                      <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="contact-challenge"
                      rows={4}
                      placeholder="Tell us what you're working through..."
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      className="contact-input"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 400,
                        fontSize: '0.9375rem',
                        color: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box' as const,
                        resize: 'vertical' as const,
                        transition: 'border-color 0.2s ease',
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
                        color: '#FCA5A5',
                      }}
                    >
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="contact-submit-btn"
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      padding: '0.875rem 2rem',
                      backgroundColor:
                        status === 'submitting'
                          ? 'rgba(255,255,255,0.08)'
                          : 'rgba(255,255,255,0.15)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '999px',
                      cursor:
                        status === 'submitting' ? 'not-allowed' : 'pointer',
                      width: '100%',
                      transition:
                        'background-color 0.2s ease, border-color 0.2s ease',
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

      <style>{`
        .contact-input::placeholder {
          color: rgba(255,255,255,0.4);
        }
        .contact-input:focus {
          border-color: rgba(255,255,255,0.5) !important;
        }
        .contact-submit-btn:hover:not(:disabled) {
          background-color: rgba(255,255,255,0.25) !important;
        }
        .contact-pill-btn:hover {
          background-color: ${tokens.deepGreen} !important;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  FAQ ACCORDION                                                      */
/* ------------------------------------------------------------------ */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'What does a strategy call actually involve?',
      a: "It\u2019s a free, no-obligation 30-minute call with Nilda. We learn about your organization, discuss your challenges, and explore whether our approach is the right fit.",
    },
    {
      q: 'How much does an engagement cost?',
      a: "Every engagement is scoped to your organization\u2019s specific needs. We provide a detailed proposal with transparent pricing after the initial strategy call.",
    },
    {
      q: "What if we\u2019ve never worked with a consultant before?",
      a: "Many of our clients are working with an external consultant for the first time. We explain every step, move at your pace, and ensure the process feels collaborative.",
    },
    {
      q: 'What happens after we submit this form?',
      a: 'We review every submission personally and respond within 2 business days with suggested times for a 30-minute call.',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(3rem, 6vw, 5rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '54rem', margin: '0 auto' }}>
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.ink,
              textAlign: 'center',
              marginBottom: '0.75rem',
            }}
          >
            Frequently asked questions
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.7,
              color: tokens.bodyGray,
              textAlign: 'center',
              marginBottom: '3rem',
              maxWidth: '32rem',
              margin: '0 auto 3rem',
            }}
          >
            Here are the questions we hear most before every engagement.
          </p>
        </FadeIn>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={0.1 + idx * 0.05}>
              <div
                style={{
                  borderBottom:
                    idx < faqs.length - 1
                      ? `1px solid ${tokens.structuralLine}`
                      : 'none',
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    padding: '1.5rem 0',
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
                      fontSize: '1.0625rem',
                      color: tokens.ink,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: tokens.pillBg,
                      border: `1px solid ${tokens.pillBorder}`,
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '1.25rem',
                      fontWeight: 300,
                      color: tokens.bodyGray,
                      transition: 'transform 0.2s ease',
                      lineHeight: 1,
                    }}
                  >
                    {openIndex === idx ? '\u00D7' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-ibm-plex-sans)',
                          fontWeight: 400,
                          fontSize: '0.9375rem',
                          lineHeight: 1.75,
                          color: tokens.bodyGray,
                          paddingBottom: '1.5rem',
                          maxWidth: '42rem',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
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
      <ContactHeroForm />
      <FAQSection />
    </>
  )
}
