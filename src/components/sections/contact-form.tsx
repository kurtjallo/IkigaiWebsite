'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FieldErrors {
  name?: string
  email?: string
  challenge?: string
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [challenge, setChallenge] = useState('')

  function validate(): boolean {
    const errors: FieldErrors = {}

    if (!name.trim()) {
      errors.name = 'Please enter your name.'
    }

    if (!email.trim()) {
      errors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.'
    }

    if (!challenge.trim()) {
      errors.challenge = 'Please describe your challenge.'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validate()) return

    setStatus('submitting')

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    if (!formspreeId) {
      console.warn('NEXT_PUBLIC_FORMSPREE_ID is not set. Form submission will fail.')
    }

    try {
      const response = await fetch(
        `https://formspree.io/f/${formspreeId}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            organization: organization.trim(),
            challenge: challenge.trim(),
            _gotcha: (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement)?.value,
          }),
        }
      )

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-[48rem] text-center py-12">
        <div className="mb-6 h-0.5 w-16 bg-gold mx-auto" />
        <h3 className="font-serif text-h2 text-neutral-900">Thank You</h3>
        <p className="mt-4 text-body-lg text-neutral-600 max-w-[32rem] mx-auto">
          We&rsquo;ve received your message and will respond within 2 business days.
        </p>
        <p className="mt-3 text-body text-neutral-500">
          For immediate scheduling, you can also book a call below.
        </p>
      </div>
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <div className="mx-auto max-w-[48rem]">
      {status === 'error' && (
        <div
          className="mb-8 rounded-sm border border-red-200 bg-red-50 px-5 py-4"
          role="alert"
          aria-live="polite"
        >
          <p className="text-body font-semibold text-red-800">
            Something went wrong.
          </p>
          <p className="mt-1 text-sm text-red-700">
            Please try again or email us directly at{' '}
            <a
              href="mailto:hello@ikigaiconsulting.ca"
              className="underline hover:text-red-900"
            >
              hello@ikigaiconsulting.ca
            </a>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Honeypot -- hidden from users, catches bots */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="contact-gotcha">Do not fill this out</label>
          <input
            type="text"
            id="contact-gotcha"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-neutral-700 mb-2 font-sans"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }))
            }}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
            className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-body font-sans transition-colors focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="Your full name"
          />
          {fieldErrors.name && (
            <p id="contact-name-error" className="mt-2 text-sm text-red-600" aria-live="polite">
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* Organization */}
        <div>
          <label
            htmlFor="contact-organization"
            className="block text-sm font-semibold text-neutral-700 mb-2 font-sans"
          >
            Organization
          </label>
          <input
            type="text"
            id="contact-organization"
            name="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            disabled={isSubmitting}
            className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-body font-sans transition-colors focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="Your organization (optional)"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-neutral-700 mb-2 font-sans"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }))
            }}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
            className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-body font-sans transition-colors focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="you@organization.ca"
          />
          {fieldErrors.email && (
            <p id="contact-email-error" className="mt-2 text-sm text-red-600" aria-live="polite">
              {fieldErrors.email}
            </p>
          )}
        </div>

        {/* Challenge */}
        <div>
          <label
            htmlFor="contact-challenge"
            className="block text-sm font-semibold text-neutral-700 mb-2 font-sans"
          >
            Tell us about your challenge <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-challenge"
            name="challenge"
            value={challenge}
            onChange={(e) => {
              setChallenge(e.target.value)
              if (fieldErrors.challenge) setFieldErrors((prev) => ({ ...prev, challenge: undefined }))
            }}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={!!fieldErrors.challenge}
            aria-describedby={fieldErrors.challenge ? 'contact-challenge-error' : undefined}
            rows={5}
            className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-body font-sans transition-colors resize-none focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="What organizational challenges are you facing? How can we help?"
          />
          {fieldErrors.challenge && (
            <p id="contact-challenge-error" className="mt-2 text-sm text-red-600" aria-live="polite">
              {fieldErrors.challenge}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? 'Sending...' : 'Send Your Message'}
          </Button>
        </div>

        {/* Privacy note */}
        <p className="text-sm text-neutral-500">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="underline hover:text-neutral-700 transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}
