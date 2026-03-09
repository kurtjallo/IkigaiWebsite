# Greenleaf Privacy Policy Page — Full Design Analysis

Source: Framer Marketplace template "Greenleaf"
Captured: 3 screenshots covering full Privacy Policy page scroll
Note: Blue dashed borders visible in screenshots 1–2 are Framer's "Show UI" component boundary indicators — NOT part of the design.

---

## 1. PAGE OVERVIEW

**Purpose:** Legal/compliance page. GDPR-style privacy policy covering data collection, usage, sharing, rights, and cookies.

**Tone:** Clear and plain-language. No legalese jargon. Short paragraphs. Readable.

**Structural flow:**
1. Page hero (pill label + page title)
2. Intro paragraph
3. 8 numbered policy sections (H2 headings + body/bullets)
4. Final CTA card (same as all other pages)
5. Footer (same as all other pages)

**Key design observation:** Even a legal utility page gets the full brand treatment — same typography scale, same heading weight, same pill label, same CTA at the bottom. The template makes no visual distinction between "important" pages and utility pages.

---

## 2. LAYOUT STRUCTURE

**Page layout:** Single column, narrow reading width
**Content max-width:** ~520–560px
**Column position:** Left-aligned (not centered) — content starts at the left with standard page padding (~24–32px from edge), with significant white space on the right side
**Background:** White throughout (no section color changes)
**Top padding from nav:** ~80px

**Why narrow + left-aligned?**
Long-form text content (legal, blog posts) uses a constrained reading width (~55–65 characters per line) for comfort. Left-aligned rather than centered gives it a document/editorial feel rather than a landing page feel.

---

## 3. TYPOGRAPHY HIERARCHY

**Page title (H1):**
- "Privacy policy"
- Size: ~72px, weight 700, near-black (#111111)
- Letter-spacing: -0.03em
- Left-aligned
- Same scale as homepage hero heading — consistent across ALL page types

**Section headings (H2):**
- Examples: "1. Information we collect", "2. How we use your information"
- Size: ~40–44px, weight 700, near-black
- Left-aligned
- Letter-spacing: -0.02em
- Top margin from preceding content: ~40–48px
- Note: These are notably LARGE for legal content — most sites use 18–22px for policy section headings. Greenleaf uses ~40–44px, consistent with the overall bold typographic approach

**Body text:**
- Size: ~16px, weight 400, gray (#6b7280)
- Line-height: ~1.65
- Max-width: inherits ~520–560px column

**Bullet list items:**
- Character: "•" (bullet dot) with manual spacing before text
- Size: ~16px, gray
- Leading terms in some bullets are **bold** (weight 600) in near-black, inline
- No indentation beyond the bullet character
- Line-height: ~1.6

**Inline bold terms in bullets:**
- "**Personal Information:**" — bold, near-black, followed by regular gray text
- "**Business Data:**" — bold, near-black
- "**Website Usage Data:**" — bold, near-black (appears faded/gray in screenshot — may be the "Website Usage Data" term itself being intentionally gray to signal it's less critical, OR it's a screenshot rendering artifact)

---

## 4. SECTION-BY-SECTION CONTENT

### Header

**Section label pill:**
- "Policies" — left-aligned gray pill, same styling as all other section pills
- ~12px gap above H1

**H1:** "Privacy policy"

**Intro paragraph:**
"At GreenLeaf, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you engage with our consultancy services, visit our website, or communicate with us."

---

### Section 1: Information we collect

**H2:** "1. Information we collect"

**Intro:** "We may collect the following types of information:"

**Bullet list:**
- **Personal Information:** such as your name, email address, phone number, job title, and company name when you contact us or sign up for our services.
- **Business Data:** such as energy usage, operational practices, and other environmental data shared for consultancy purposes.
- **Website Usage Data:** including IP address, browser type, pages visited, and other analytics collected via cookies or similar tracking technologies.

---

### Section 2: How we use your information

**H2:** "2. How we use your information"
(Wraps to 2 lines at ~520px column width: "2. How we use" / "your information")

**Intro:** "We use the information we collect to:"

**Bullet list:**
- Provide and manage our consultancy services
- Communicate with you about your project or our offerings
- Improve our website and service delivery
- Meet legal and regulatory obligations

---

### Section 3: Sharing your information

**H2:** "3. Sharing your information"

**Body:** "We do not sell, rent, or trade your personal information. We may share data with trusted third-party providers who help us operate our business, such as IT support or cloud storage services, under strict confidentiality agreements."

---

### Section 4: Data security

**H2:** "4. Data security"

**Body:** "We take reasonable measures to protect your information from loss, misuse, and unauthorized access. Our data is stored securely, and access is limited to personnel who need it to perform their roles."

---

### Section 5: Your rights

**H2:** "5. Your rights"

**Intro:** "Depending on your location, you may have rights to:"

**Bullet list:**
- Access the personal data we hold about you
- Request correction or deletion of your data
- Object to or restrict certain types of data processing
- Withdraw consent at any time (where processing is based on consent)

**Closing line:** "To exercise your rights, please contact us using the information below."

---

### Section 6: Cookies

**H2:** "6. Cookies"

**Body:** "Our website may use cookies to improve user experience and gather usage data. You can manage your cookie preferences through your browser settings."

---

### Section 7: Retention

**H2:** "7. Retention"

**Body:** "We retain personal and business information only as long as necessary for the purposes described in this policy or as required by law."

---

### Section 8: Changes to this policy

**H2:** "8. Changes to this policy"

**Body:** "We may update this Privacy Policy periodically. Changes will be posted on our website with the updated effective date."

---

## 5. FINAL CTA CARD

**Identical to all other pages — no changes.**

- Light gray rounded container (~24px border-radius)
- "Ready to take climate action?" heading
- Body text + "Book my free consultation →" dark green pill button
- 2×3 image collage on right (leaf, man, woman, tree rings, leaf, man)

**Notable:** Including the Final CTA on a legal page is an unusual choice. It keeps the commercial flow alive even on utility pages. For Ikigai, this may or may not be appropriate — legal pages are usually visited by people checking compliance, not prospects. Consider removing it from the Privacy Policy page for cleanliness.

---

## 6. FOOTER

**Identical to all other pages — no changes.**

---

## 7. DESIGN PATTERNS SPECIFIC TO POLICY PAGE

### 7a. Brand Typography on Legal Content
The H2 section headings at ~40–44px are 2–3x larger than typical policy page headings. This has two effects:
- Generous visual breathing room between sections (headings act as spacers)
- Brand consistency — the page never "looks" like a terms page even though it is one
- Tradeoff: Longer page (more scroll) than a compact policy page would be

### 7b. No Visual Breaks Between Sections
Unlike every other page in the template (which uses alternating section backgrounds, cards, or bento grids), the policy page is pure continuous content — no background color changes, no cards, no dividers. The section headings (large, bold) serve as the only visual separators. This is appropriate for long-form reading content.

### 7c. Bullet Style
Uses "•" characters rather than styled HTML list bullets. The inline bold terms at the start of some bullets (Personal Information:, Business Data:) create a definition-list reading pattern without using `<dl>` — scannable at a glance.

### 7d. Narrow Column with Wide Right Margin
The ~520–560px reading column with white space on the right is an editorial/document convention. It:
- Optimizes line length for reading (~65–75 characters)
- Signals that this is a different kind of content from the landing pages
- Feels like a document, not a pitch

---

## 8. IKIGAI ADAPTATION NOTES

**Current state:** Ikigai already has a `src/app/privacy/page.tsx` with a PIPEDA-compliant privacy policy (Canadian law, not GDPR). This is correct for an Ontario-based nonprofit consultant.

**Layout adaptation from Greenleaf:**
- Adopt the narrow left-aligned column (~560px max-width)
- Use the same large H2 section headings (~40–44px, matching overall type scale)
- Keep "Policies" pill label above the H1
- Keep "Privacy policy" at the same H1 scale (~72px) as other page titles
- Add the Final CTA card at bottom (or omit — see note above)

**Content differences to maintain for Ikigai (PIPEDA vs GDPR):**
- Replace "Your rights" bullet list with PIPEDA-specific rights (access, correction, complaint to OPC)
- Reference PIPEDA/CASL instead of GDPR
- Update third-party section to reference Ontario/Canada-based providers
- Data retention: Reference applicable Ontario nonprofit regulations

**The Greenleaf policy page is essentially a minimal template:** clean structure, plain language, brand-consistent typography. The content itself is Greenleaf-specific and would be replaced entirely with Ikigai's PIPEDA policy.
