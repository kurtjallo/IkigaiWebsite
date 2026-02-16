# Phase 7 Research: Contact + Integrations

**Researched:** 2026-02-16
**Confidence:** HIGH (Formspree and Calendly are stable, well-documented services; PIPEDA requirements are established law)

---

## Calendly Popup Widget Embed

### Approach: react-calendly npm package (v4.4.0)

The `react-calendly` package (v4.4.0, current) provides React components for Calendly integration. Peer dependency: React >=16.8.0 (compatible with React 19 used by Next.js).

**Verified via npm README (npm view react-calendly readme):**

**Components available:**
- `InlineWidget` -- Renders Calendly inline in the page (full calendar embed)
- `PopupWidget` -- Renders a floating popup button (bottom-right corner, customizable colors)
- `PopupButton` -- Renders a button that opens Calendly popup modal on click
- `useCalendlyEventListener` -- Hook for listening to Calendly events (onEventScheduled, onDateAndTimeSelected, etc.)

**Recommended: `PopupButton`** for the contact page. It renders a customizable trigger button that opens the Calendly popup overlay. This keeps the page clean (no large inline embed eating space) and only loads when user clicks.

**PopupButton API (verified from README):**
```tsx
import { PopupButton } from "react-calendly";

<PopupButton
  url="https://calendly.com/your_scheduling_page"
  rootElement={document.getElementById("root")}  // Required - React Portal target
  text="Click here to schedule!"                  // Button text
/>
```

**PopupWidget API (alternative -- floating button):**
```tsx
import { PopupWidget } from "react-calendly";

<PopupWidget
  url="https://calendly.com/your_scheduling_page"
  rootElement={document.getElementById("root")}
  text="Click here to schedule!"
  textColor="#ffffff"
  color="#00a2ff"
/>
```

**Optional props (all components):**
- `pageSettings` -- Customize background color, text color, hide event type details (Pro plan only)
- `prefill` -- Pre-fill email, name, guests, custom answers
- `utm` -- UTM tracking parameters (utmSource, utmMedium, utmCampaign, etc.)
- `styles` -- Custom styles (e.g., `{ height: '1000px' }` for InlineWidget)

**Note on pageSettings:** Color customization requires Calendly Pro plan. Free plan will ignore these settings.

**Key implementation considerations:**
- `rootElement` is REQUIRED -- uses React Portals to render popup modal. Must point to a DOM node. In Next.js, use `document.getElementById('__next')` instead of `'root'`.
- Must be a Client Component ('use client') since it accesses `document`
- The package loads Calendly's widget.js script automatically (no manual script tag)
- CSP note: must allowlist `https://assets.calendly.com` and `https://calendly.com` in Content-Security-Policy (Phase 11)

**useCalendlyEventListener hook (for future use):**
```tsx
useCalendlyEventListener({
  onProfilePageViewed: () => console.log("onProfilePageViewed"),
  onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
  onEventTypeViewed: () => console.log("onEventTypeViewed"),
  onEventScheduled: (e) => console.log(e.data.payload),
});
```
This could be used to track conversions with Vercel Analytics in Phase 11.

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
- @formspree/react README redirects to external docs (less self-contained)

**Anti-spam: Honeypot field (INTG-03)**

Formspree supports honeypot fields natively. A honeypot is a hidden input that real users never see or fill, but bots auto-fill.

```html
<!-- Hidden from users via CSS, but bots fill it -->
<input type="text" name="_gotcha" style="display:none" tabIndex={-1} autoComplete="off" />
```

Formspree recognizes `_gotcha` as a honeypot field. If it contains a value, the submission is silently rejected. No CAPTCHA needed.

**Additional Formspree special fields:**
- `_gotcha`: Honeypot anti-spam (silently rejects if filled)
- `_subject`: Custom email subject line for notification
- `_replyto` or `email`: Sets Reply-To header on notification email (auto-detected from `email` field)

**Free tier:** 50 submissions/month -- more than sufficient for a consulting firm's inquiry volume.

**Environment variable:** `NEXT_PUBLIC_FORMSPREE_ID` will store the form ID. User creates a form at formspree.io and provides the ID.

**Verified URLs:**
- Formspree privacy policy: `https://formspree.io/legal/privacy-policy` (verified accessible, last updated April 2022)

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
| npm view react-calendly readme | Full component API: PopupButton, PopupWidget, InlineWidget, useCalendlyEventListener, all props | HIGH |
| npm registry: @formspree/react v3.0.0 | Version, peer dependencies (decided against using) | HIGH |
| Formspree homepage (formspree.io) | Endpoint URL format (`/f/{FORM_ID}`), anti-spam features, processing flow | HIGH |
| Formspree privacy policy URL | Verified accessible at `formspree.io/legal/privacy-policy` | HIGH |
| PIPEDA (Office of Privacy Commissioner of Canada) | Fair information principles, consent requirements | HIGH |
