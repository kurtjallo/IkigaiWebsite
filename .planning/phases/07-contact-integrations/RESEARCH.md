# Phase 7 Research: Contact + Integrations

**Researched:** 2026-02-16
**Confidence:** HIGH (Formspree and Calendly are stable, well-documented services; PIPEDA requirements are established law)

---

## Calendly Popup Widget Embed

### Approach: react-calendly npm package (v4.4.0)

The `react-calendly` package (v4.4.0, current) provides React components for Calendly integration. Peer dependency: React >=16.8.0 (compatible with React 19 used by Next.js).

**Components available:**
- `PopupButton` -- Renders a button that opens Calendly popup on click
- `PopupWidget` -- Renders a floating popup button (bottom-right corner)
- `InlineWidget` -- Renders Calendly inline in the page

**Recommended: `PopupButton`** for the contact page. It renders a customizable trigger button that opens the Calendly popup overlay. This keeps the page clean (no large inline embed eating space) and only loads when user clicks.

**Usage pattern:**
```tsx
'use client'
import { PopupButton } from 'react-calendly'

export function CalendarBooking() {
  return (
    <PopupButton
      url="https://calendly.com/CALENDLY_USERNAME/strategy-call"
      rootElement={document.getElementById('__next')!}
      text="Schedule a Strategic Conversation"
    />
  )
}
```

**Key considerations:**
- `rootElement` is required -- must point to a DOM node (use `document.getElementById('__next')`)
- Must be a Client Component ('use client') since it uses browser APIs
- The package loads Calendly's widget.js script automatically
- CSP note: must allowlist `https://assets.calendly.com` and `https://calendly.com` in Content-Security-Policy (Phase 11)

**Alternative: Manual script loading (no npm package)**
```tsx
// Load https://assets.calendly.com/assets/external/widget.js
// Call window.Calendly.initPopupWidget({ url: '...' })
```
This avoids a dependency but requires manual TypeScript type declarations and script lifecycle management. The npm package is cleaner for React.

**Decision: Use `react-calendly` PopupButton.** The npm package handles script loading, popup lifecycle, and provides TypeScript types. The env var `NEXT_PUBLIC_CALENDLY_URL` will store the Calendly scheduling URL so the user can configure it without code changes.

---

## Formspree Contact Form Submission

### Approach: Direct fetch (no @formspree/react)

Formspree processes form submissions via POST to `https://formspree.io/f/{FORM_ID}`.

**JavaScript submission pattern:**
```tsx
const response = await fetch('https://formspree.io/f/{FORM_ID}', {
  method: 'POST',
  body: JSON.stringify({ name, email, organization, challenge }),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

if (response.ok) {
  // Success -- show confirmation
} else {
  const data = await response.json()
  // data.errors array contains validation errors
}
```

**Why direct fetch over @formspree/react (v3.0.0):**
- @formspree/react adds a dependency for what is a single fetch call
- Direct fetch gives full control over form state, validation, and UI
- No abstraction layer to debug
- The form has only 4 fields -- zero complexity benefit from a library

**Anti-spam: Honeypot field (INTG-03)**

Formspree supports honeypot fields natively. A honeypot is a hidden input that real users never see or fill, but bots auto-fill.

```html
<!-- Hidden from users via CSS, but bots fill it -->
<input type="text" name="_gotcha" style="display:none" tabIndex={-1} autoComplete="off" />
```

Formspree recognizes `_gotcha` as a honeypot field. If it contains a value, the submission is silently rejected. No CAPTCHA needed.

**Additional Formspree fields:**
- `_subject`: Custom email subject line
- `_replyto` or `email`: Sets Reply-To header on notification email

**Free tier:** 50 submissions/month -- more than sufficient for a consulting firm's inquiry volume.

**Environment variable:** `NEXT_PUBLIC_FORMSPREE_ID` will store the form ID. User creates a form at formspree.io and provides the ID.

---

## PIPEDA Compliance for Contact Forms

### What PIPEDA Requires

PIPEDA (Personal Information Protection and Electronic Documents Act) governs how private-sector organizations collect, use, and disclose personal information in Canada.

**Personal information collected by the contact form:**
- Name (personal identifier)
- Email address (personal identifier)
- Organization name (may be personal if sole proprietor)
- Challenge description (potentially sensitive organizational info)

### 10 Fair Information Principles (PIPEDA)

The privacy policy must address these principles:

1. **Accountability** -- Identify who is responsible for compliance (Ikigai Consulting Group / Nilda Bastone)
2. **Identifying Purposes** -- State why data is collected BEFORE or AT time of collection (to respond to inquiries, schedule consultations)
3. **Consent** -- Obtain meaningful consent; for a contact form, implied consent is acceptable (user voluntarily submits form)
4. **Limiting Collection** -- Only collect what's necessary (4 fields is appropriate -- no over-collection)
5. **Limiting Use, Disclosure, and Retention** -- Use data only for stated purpose; don't share with third parties without consent; retain only as long as needed
6. **Accuracy** -- Keep information accurate (less relevant for contact forms)
7. **Safeguards** -- Protect data with appropriate security (HTTPS, Formspree's security)
8. **Openness** -- Make privacy practices readily available (privacy policy page)
9. **Individual Access** -- Allow individuals to access their data on request
10. **Challenging Compliance** -- Provide a process for complaints

### Privacy Policy Content Requirements

The privacy policy page (PAGE-07) must include:

1. **What information is collected** -- Name, email, organization, challenge description
2. **How it is collected** -- Via the website contact form
3. **Why it is collected** -- To respond to inquiries and schedule consultations
4. **Who processes it** -- Formspree (third-party form processor) and Ikigai Consulting Group
5. **Third-party disclosure** -- Formspree processes form data; Calendly processes booking data (if used)
6. **Data retention** -- How long data is kept (e.g., "for the duration of the business relationship plus 2 years")
7. **Security measures** -- HTTPS encryption, secure third-party processors
8. **Access and correction rights** -- How to request access to or deletion of personal information
9. **Contact for privacy concerns** -- Email or contact method for privacy officer/responsible person
10. **Consent** -- Statement that submitting the form constitutes consent to data collection for stated purposes

### Key PIPEDA Differences from GDPR

- PIPEDA does NOT require explicit opt-in checkboxes for contact forms (implied consent via voluntary submission is acceptable)
- PIPEDA does NOT require cookie consent banners (cookies are governed separately under CASL for commercial electronic messages)
- PIPEDA DOES require a privacy policy to be publicly accessible
- PIPEDA DOES require data to be collected for a stated, reasonable purpose

**For this project:** A single privacy policy page covering the contact form data flow (user -> Formspree -> Ikigai email) and Calendly booking data is sufficient. No cookie banner needed (we use no tracking cookies on the static site; Vercel Analytics is added in Phase 11 and may require review then).

---

## Sources

| Source | What Was Verified | Confidence |
|--------|-------------------|------------|
| npm registry: react-calendly v4.4.0 | Version, peer dependencies, package description | HIGH |
| npm registry: @formspree/react v3.0.0 | Version, peer dependencies (decided against using) | HIGH |
| Formspree homepage | Endpoint URL format, anti-spam features, processing flow | HIGH |
| PIPEDA (Office of Privacy Commissioner of Canada) | Fair information principles, consent requirements | HIGH |
| Calendly embed patterns | PopupButton component, script loading, rootElement requirement | MEDIUM (based on training data + npm verification) |
