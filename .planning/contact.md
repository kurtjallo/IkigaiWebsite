# Greenleaf Contact Page — Full Design Analysis

Source: Framer Marketplace template "Greenleaf"
Captured: 3 screenshots covering full Contact page scroll

---

## 1. PAGE OVERVIEW

**Purpose:** Provide two clear conversion paths — direct calendar booking (CTA button) or async contact form — with minimal friction.

**Tone:** Warm, direct. "We'd love to hear from you" is the most human-sounding heading in the entire template. Approachable rather than transactional.

**Structural flow:**
1. Hero + Contact form (2-column)
2. FAQ accordion (identical to homepage)
3. Footer (identical to homepage/about)

**Key design choice:** The Contact page is extremely lean — only 3 sections. No supporting content, no trust-building sections, no location info. The implicit assumption: by the time someone reaches the Contact page, they are already sold. Don't distract them.

---

## 2. SECTION-BY-SECTION BREAKDOWN

### Section 1: CONTACT HERO + FORM

**Layout:** 2-column — LEFT text/CTA (~42%) + RIGHT form card (~52%), ~6% gap
**Background:** White
**Top padding:** ~80–100px from nav
**Vertical alignment:** Left column content vertically centered to the height of the form card

---

**LEFT COLUMN:**

1. **Section label pill:**
   - "Contact us" — left-aligned (not centered)
   - Same gray pill styling as all other pages

2. **Heading:**
   - "We'd love to hear from you"
   - Size: ~56–64px, weight 700, near-black (#111111)
   - Letter-spacing: -0.03em
   - Alignment: Left
   - Line breaks naturally into 3 lines:
     - "We'd love to"
     - "hear from"
     - "you"
   - This is the warmest, most conversational heading in the entire template

3. **Body text:**
   - "Click below to schedule a call with a carbon expert. Alternatively, drop us a message and we'll respond within 48 hours."
   - Size: ~16px, gray (#6b7280), line-height ~1.65
   - Max-width: ~380–420px, left-aligned
   - **Key copywriting pattern:** Explicitly names BOTH conversion paths ("Click below to schedule" + "drop us a message") so the user knows the form and the button are two different paths — no ambiguity about which to use

4. **CTA button:**
   - "Book a free consultation →"
   - Dark green pill, white text, same style as all other CTAs
   - Left-aligned (not centered)
   - Signature floating drop-shadow effect below button
   - ~24–32px gap below body text

---

**RIGHT COLUMN — THE FORM CARD (KEY DESIGN ELEMENT):**

**Overall card treatment:**

The form card is the most visually distinctive element on the Contact page. It uses a **dark overlay + background image** technique:

- **Background:** A large leaf/plant macro photograph (dark green foliage texture) is used as the card's background image
- **Overlay:** A semi-transparent dark overlay (~70–80% opacity, very dark green or near-black) sits over the photo
- **Result:** The leaf texture is dimly visible through the dark card surface — you see organic green shapes and veins in the background, creating depth and texture behind the form fields
- This creates a **frosted dark glass** aesthetic — the form feels grounded and natural rather than sterile

**Card dimensions & styling:**
- Width: ~52% of row (full right column)
- Height: ~500–540px (taller than left column, which is vertically centered to it)
- Border-radius: ~20–24px
- Border: Appears to have a very subtle 1px border (slightly lighter than the card bg, barely visible — could be the border-radius contrast against the white page)
- No drop shadow on the card itself — the dark card on white creates sufficient contrast on its own

**Form field styling:**

Labels:
- "Name", "Email", "Message" — white or very light gray text (~#e5e5e5 or #ffffff)
- Size: ~14px, weight 500
- Position: Above each field, left-aligned

Input fields (Name, Email):
- Background: Light gray/off-white (~#f0f0f0 or #e8e8e8) — significantly LIGHTER than the card background, creating strong contrast
- No visible border (the light bg on dark card is enough visual separation)
- Border-radius: ~8–10px
- Height: ~44–48px
- Padding: ~12px horizontal
- Placeholder text: Gray (~#9ca3af), ~15px

Textarea (Message):
- Same light gray background as inputs
- Height: ~130–150px (notably taller than inputs)
- Placeholder text: "Message here..."
- **Validation state visible:** "Please fill out this field." appears below the placeholder — this is a live validation/error message shown in the screenshot. Styled in slightly different gray or red-tinted text within the textarea area. Indicates the form has real-time validation.
- Resize handle: Small drag handle visible in bottom-right corner of textarea (default browser resize or custom styled)

Submit button:
- "Send Message"
- **Full width** — spans 100% of the form card's content area
- Same dark green pill shape as all CTAs
- White text, ~15–16px, weight 600
- Slightly smaller vertical padding than standalone CTA buttons (~12–14px)
- Same pill shape (border-radius: 9999px)
- No floating shadow (it's within the card, not floating on white)

**Form fields order:**
1. Name (single line input)
2. Email (single line input)
3. Message (textarea, ~3x height of inputs)
4. Send Message (full-width submit button)

**No visible fields for:** Organization, phone number, how did you hear about us, service interest, or any other qualifying questions. Extremely lean 3-field form.

**Spacing within card:**
- Card internal padding: ~28–32px on all sides
- Gap between form groups (label + field): ~20–24px
- Gap between last field and submit button: ~24px

---

### Section 2: FAQ ACCORDION

**Layout:** Centered header + full-width accordion
**Background:** White
**Top padding from form section:** ~80–100px

**Header:**
- **No section label pill** — unique departure from every other section in the template which all have pills. The FAQ on the Contact page goes straight to the heading (on the homepage it had the "FAQ" pill).
- "Frequently asked questions" — ~56px, weight 700, near-black, centered
- Natural line break creates 2 lines: "Frequently" / "asked questions"
- Sub-text: "Here are the top questions our clients ask before getting started." — gray, centered, ~520px max-width

**Accordion items:**
- Identical set of 5 questions as the homepage FAQ
- Max-width: ~820–860px, centered
- All collapsed state

**Questions:**
1. "How long does a typical carbon footprint assessment take?"
2. "What industries do you work with?"
3. "What if we already have some data or reports?"
4. "Do we even have the internal capability to pull this off?"
5. "What if the rules change or targets become impossible to meet?"

**Accordion item anatomy:**
- Question text: Left-aligned, ~17–18px, weight 500, near-black
- "+" button: Right-aligned, circular (~36px), very light gray background (~#f0f0f0), thin 1px border (~#d4d4d4), "+" symbol in near-black (~18px)
- Thin horizontal divider line between each item
- No background on rows — pure white
- Height per item: ~60–64px (generous touch target)

**Behavior (implied):**
- Click "+" expands the row, revealing answer text
- "+" rotates or transforms to "×" or "−" when expanded
- Smooth height animation (AnimatePresence or CSS transition)
- One item open at a time OR multiple — not specified from screenshots

---

### Section 3: FOOTER

**Identical to homepage and About page footer — no changes.**

- Dark forest green rounded-top card
- Left: Greenleaf logo + tagline + social icons (X, Instagram, LinkedIn, YouTube)
- Center: "Pages" nav (Home, About, Services, Blog)
- Right: "Information" nav (Contact, Privacy policy, Terms, 404)
- Bottom bar divider + copyright + "Built by James Hicks" + "Made in Framer"

---

## 3. DESIGN PATTERNS SPECIFIC TO CONTACT PAGE

### 3a. Dark Overlay Form Card on Photo Background
The form container uses a leaf photo as its background with a dark semi-transparent overlay. This is the most dramatic UI element in the entire Greenleaf template. Key characteristics:

- The photo background connects the form visually to the brand's organic/nature identity
- The dark overlay keeps form fields readable while hinting at the brand
- The light-colored input fields create a strong contrast layer system: white page → dark card with photo → light input fields → dark text
- This three-layer depth hierarchy (bg → card → fields) gives the form visual richness without decoration clutter

**Technical notes:**
- Likely implemented as: container with `background-image + background-size: cover`, then an `::after` or inner div overlay with `rgba(26, 53, 40, 0.75)` or similar dark-green transparent bg
- Input fields are NOT transparent — they have their own opaque light-gray background to ensure readability
- Submit button: same dark green as the overlay bg, so it feels native to the card

### 3b. Dual Path CTA Copy
The body text explicitly names two different paths:
- Path A: "Click below to schedule a call" → the button
- Path B: "drop us a message and we'll respond within 48 hours" → the form

This prevents confusion (users won't fill the form thinking it books a call, or click the button thinking it sends a message). The 48-hour response promise also reduces anxiety about the async path.

### 3c. Lean Form — 3 Fields Only
Name + Email + Message. No organization, no phone, no service interest, no budget. This is a deliberate conversion optimization: lower friction = higher submission rate. The implied philosophy: qualify leads in the follow-up conversation, not the form.

### 3d. No Final CTA Section
Unlike the homepage and About page which both end with the rounded gray "Ready to take climate action?" CTA card, the Contact page omits this entirely. The form itself is the CTA. Adding another CTA after the form would be redundant and potentially confusing.

### 3e. FAQ Without Pill Label
Every other section in the template has a section label pill above the heading. The Contact page FAQ skips it — the only instance of this in the template. This may be intentional (the FAQ is a secondary element, not a primary section) or simply a consistency oversight. Either way, the visual effect is more minimal.

---

## 4. TYPOGRAPHY NOTES SPECIFIC TO CONTACT PAGE

- "We'd love to hear from you" — the 3-line break at ~56–64px creates a very tall left column, which is why the form card's height (~500px) feels proportionate
- Form labels at ~14px are the smallest text on the page — appropriate for form context (metadata, not content)
- FAQ heading line break ("Frequently" / "asked questions") is natural at desktop width and looks intentional
- Validation message "Please fill out this field." appears to be in a slightly muted color — part of browser native or custom validation styling

---

## 5. FORM UX NOTES

- **Validation:** The textarea shows an inline validation message ("Please fill out this field.") — suggesting client-side validation before submit, not just server-side
- **Submit button:** Full-width button within the card is a strong design pattern — it's impossible to miss, requires no hunting, and reinforces that this is the primary action within the card
- **No honeypot or spam field visible** — either handled server-side or implemented as hidden field
- **No success state visible** in screenshots — would need to be implemented
- **No required field indicators** visible (no asterisks) — clean appearance, though accessibility implications exist
- **Placeholder text as instruction:** "Jane Smith" and "jane@greenleaf.com" use example-name format which is more friendly than generic "Enter your name" placeholders

---

## 6. ACCESSIBILITY OBSERVATIONS

- Form labels must be properly associated with inputs via `htmlFor`/`id` — not just visually above
- Dark form card: label text (white on dark green overlay) — contrast should be verified. White on ~#1a3528 overlay = very high contrast, likely passes AAA
- Light input fields: placeholder text (~#9ca3af) on light gray (~#f0f0f0) — ratio ~2.8:1, fails WCAG AA for placeholder text (considered informational, not content, but still a concern)
- Submit button (white on dark green): High contrast, passes
- FAQ "+" buttons: Should have `aria-label` like "Expand question about carbon footprint assessment"
- No visible focus styles in screenshots — need to add visible focus rings

---

## 7. IKIGAI ADAPTATION NOTES

**Direct mappings for Ikigai Contact page:**

| Greenleaf Element | Ikigai Equivalent |
|------------------|-------------------|
| "Contact us" pill | "Contact us" or "Begin the Conversation" |
| "We'd love to hear from you" heading | "Begin the Conversation" (current) — or adapt to be warmer |
| Dual-path body copy | Keep Ikigai's current dual-path: Calendly + form |
| "Book a free consultation" button | "Book a Strategy Call" (Calendly popup) |
| Dark photo overlay form card | High-impact visual upgrade for the contact form |
| 3-field form | Ikigai currently has 4 fields (Name, Org, Email, Challenge) — consider trimming to 3 |
| FAQ accordion (no pill label) | Could absorb Ikigai's "Common Concerns" into same FAQ |
| No final CTA section | Remove Ikigai's CalendarBookingSection from bottom — form IS the CTA |

**The dark overlay form card is the highest-impact lift from this page:**
- Currently Ikigai's form is a plain white form on a white background
- Adding a background image (architectural/building photo? Blueprint texture? Or a photo of Nilda at work?) with a dark overlay would dramatically elevate the visual quality
- For Ikigai: use Hunter Green (#355E3B) as the overlay color at ~75% opacity
- Keep light input fields for readability

**Form simplification consideration:**
- Current Ikigai form: Name, Organization, Email, Challenge (optional)
- Greenleaf approach: just 3 fields
- Recommendation: Keep Organization field (it's a meaningful qualifier for Ikigai's B2B context) but confirm the Challenge field as optional with lighter visual weight
- Could add "Book a Strategy Call" as an explicit secondary CTA within the form column (above or below) for users who prefer async first

**FAQ on Contact page:**
- Ikigai currently has "Common Concerns" accordion on Contact page with 4 objection-handling items
- Greenleaf's FAQ on Contact has 5 items, identical to homepage FAQ (content is reused)
- Consider: merge Ikigai's "Best Fit Organizations" cards and "Common Concerns" accordion into one clean FAQ section here, eliminating the "Best Fit" card layout entirely
