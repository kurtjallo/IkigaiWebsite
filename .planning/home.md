# Greenleaf Homepage — Full Design Analysis

Source: Framer Marketplace template "Greenleaf"
Captured: 14 screenshots covering full homepage scroll

---

## 1. OVERALL DESIGN PHILOSOPHY

**Aesthetic:** Clean, minimal, modern consultancy. Maximum whitespace, restrained color palette, generous typography. No clutter. Confidence through emptiness.

**Feeling:** Trustworthy, calm, premium but approachable. Not corporate-stiff — human-centered with a slightly editorial quality.

**Visual Language:** Organic nature photography (leaves, wood grain, roads) paired with ultra-clean sans-serif type and soft rounded UI elements. No icons overload, no gradients, no decorative borders. Everything earns its space.

---

## 2. DESIGN SYSTEM

### 2a. Typography

**Font Family:** Geometric sans-serif — appears to be DM Sans, Plus Jakarta Sans, or similar rounded-geometric typeface. Very friendly, not rigid. No serifs anywhere.

**Type Scale:**
- Hero heading: ~72–80px, weight 700, letter-spacing: -0.03em to -0.05em (very tight), line-height: ~1.1
- Section headings (H2): ~48–56px, weight 600–700, letter-spacing: -0.02em, line-height: ~1.15
- Card/subsection headings (H3): ~28–36px, weight 600, line-height: ~1.2
- Body text: ~16–18px, weight 400, line-height: ~1.6
- Section label pills: ~12–13px, weight 500, letter-spacing: +0.01em
- Caption/meta text (dates, tags): ~13–14px, weight 400–500

**Color Treatment on Text:**
- Primary text: Near-black (#111111 or #1a1a1a)
- Body/secondary text: Medium gray (~#6b7280 or #71717a)
- Faded/scroll-reveal text: Light gray (~#c4c4c4 to #a0a0a0) — used in the About section heading where earlier words are lighter and key words arrive in dark color (scroll-triggered contrast fade effect)
- All caps: Not used anywhere

### 2b. Color Palette

| Role | Approx. Value | Usage |
|------|--------------|-------|
| Background | #FFFFFF | Page background everywhere except cards and footer |
| Near-black | #111111 | All headings, primary text |
| Body gray | #6b7280 | Paragraphs, captions, secondary text |
| Card surface | #f3f4f6 or #f5f5f5 | Benefit cards, FAQ rows, testimonial cards |
| CTA button + footer | #1a3528 or #1e3a2f | Primary dark forest green — used exclusively for buttons, footer bg |
| Button text | #FFFFFF | White text on dark green buttons only |
| Section label pill bg | #f0f0f0 or #ebebeb | Very light gray, subtle |
| Section label pill border | ~#d4d4d4 | Thin 1px border |
| Star rating | #d97706 (amber) | Review stars in testimonials and benefits counter |
| Tag: Strategy | #16a34a-area green | Green pill tag on blog posts |
| Tag: Reporting | Blue | Blue pill tag |
| Tag: Communication | Purple | Purple pill tag |
| Tag: Measurement | Gray | Gray pill tag |
| Footer background | #192e22 or similar deep forest green | Footer card bg — matches CTA buttons but slightly darker |

**Key design rule:** Color is used extremely sparingly. The entire page is essentially white + near-black + one dark green. Tags and star ratings are the only secondary accent colors, and they're content-driven (not decorative).

### 2c. Spacing & Layout

**Max content width:** ~1200px
**Page side padding:** 24–32px mobile, 48–64px desktop
**Section vertical padding:** 80–120px (py-20 to py-32 equivalent)
**Gap between sections:** Very generous — 80–160px of empty white space between sections acts as visual breathing room

**Border Radius:**
- Buttons: Fully pill-shaped (border-radius: 9999px)
- Image cards: ~16px (~rounded-2xl in Tailwind)
- Benefit bento cards: ~20–24px
- Section label pills: Fully rounded (pill)
- Testimonial cards: ~16px
- Final CTA container: ~24px
- Footer card: ~24px on top-left and top-right corners only (bottom is flush/flat)
- Blog image thumbnails: ~12–16px

### 2d. Buttons

**Primary CTA Button:**
- Shape: Fully rounded pill (border-radius: 9999px)
- Background: Dark forest green (#1a3528)
- Text: White, ~15–16px, weight 600
- Arrow: "→" appended with slight left margin
- Padding: ~14–16px vertical, ~28–32px horizontal
- **Signature shadow effect:** Directly beneath each CTA button is a blurred shadow that mimics a floating element casting a shadow on a flat surface — NOT a standard box-shadow. Appears as a soft, spread blur (blur: ~20px, opacity ~30–40%, offset: 8–12px downward) creating a "hovering" illusion. This is one of the most distinctive brand elements.
- No border, no outline

**Secondary/nav CTA:** None visible — all CTAs use the same pill button style

**Icon button (service card link):** Small circular button with ↗ arrow, white bg, 1px border, positioned top-right of service images

### 2e. Section Label Pills

Consistent pattern used above EVERY section heading:
- Small oval/pill shape
- Very light gray background
- Thin gray border
- Short text in gray: "About", "Services", "Benefits", "Testimonials", "Resources & insights", "FAQ"
- Positioned centered above heading (or left-aligned in blog section)
- Acts as a visual chapter marker / section identifier

---

## 3. NAVIGATION

**Style:** Fixed/sticky top bar
**Background:** White, very subtle or no visible shadow/border at top
**Height:** ~60–64px
**Left:** Leaf icon (single leaf SVG, dark) + "Greenleaf" wordmark in dark near-black, weight 600
**Center:** Empty
**Right:** Nav links: Home | Services | About | Blog | Contact | search icon (magnifying glass)
- Links: ~15px, weight 400–500, near-black, hover state not visible in screenshots
- Search: simple icon, no button treatment
- No CTA button in nav (unlike many templates)
- No mobile hamburger visible (screenshots are desktop)

---

## 4. SECTION-BY-SECTION BREAKDOWN

### Section 1: HERO

**Layout:** Single column, centered, full-width
**Vertical height:** Appears to be ~85–90vh (content + images begin to appear at bottom of fold)

**Elements (top to bottom):**

1. **Scarcity/urgency badge:**
   - Pill shape, gray border, very light gray bg
   - Content: "• 1 spot left this month" (bullet + text)
   - Font: ~13px, gray
   - Position: Centered, ~60–80px above heading

2. **Hero Heading:**
   - "Carbon consultants for savvy SMEs"
   - Size: ~72–80px, weight 700, tight letter-spacing
   - Color: Near-black (#111111)
   - Alignment: Center
   - Line breaks: 2 lines — "Carbon consultants" / "for savvy SMEs"
   - Width: constrained to ~700–800px

3. **Subheading/descriptor:**
   - "We help small and growing businesses cut carbon, boost credibility, and move forward with confidence. Your low-carbon journey starts here."
   - Size: ~17–18px, gray (#6b7280), line-height 1.6
   - Max-width: ~520–560px, centered
   - ~24px gap below heading

4. **CTA Button:**
   - "Book my free consultation →"
   - Dark green pill, white text
   - Centered
   - ~40–48px gap below subheading
   - Signature floating shadow beneath

5. **Image strip (bottom of section):**
   - 4 large images arranged horizontally, equal width
   - Images bleed to bottom of section, slightly cropped/cut off
   - Rounded top corners (~16px), no rounded bottom (they flow off screen)
   - Gap between images: ~8–12px
   - Images: dark leaf texture | woman consultant | tree rings cross-section | male consultant
   - No captions

---

### Section 2: IMAGE GALLERY (standalone visual break)

**Layout:** 4-column grid, full viewport width
**Height:** Very tall — images are ~400–480px tall
**Gap:** ~8–12px between images
**Border radius:** ~16px on all corners
**No text overlay, no captions**
**Purpose:** Purely visual — humanizes the brand, establishes authority through person photography

Images in order:
1. Extreme close-up of leaf veins (dark green)
2. Female consultant, arms crossed, dark green bg
3. Cross-section of tree trunk showing growth rings (warm brown)
4. Male consultant, arms crossed, dark bg

**Transition from hero:** These images appear to begin at the bottom of the hero (partially cut off) and continue as a full bleed section — creating a cinematic scroll effect.

---

### Section 3: ABOUT TEASER

**Layout:** Single column, centered
**Background:** White
**Top padding from image gallery:** ~80–100px

**Elements:**

1. **Section label pill:** "About" — centered

2. **Large scroll-animated heading:**
   - "We're a small team of passionate carbon experts helping forward-thinking companies prepare for the future."
   - Size: ~48–56px, weight 600–700
   - **Key visual effect:** Words/phrases appear at different opacities — early words ("We're a small team of passionate") appear lighter gray while key words ("carbon experts", "forward-thinking", "companies") arrive in near-black. This creates a scroll-triggered text reveal where words "activate" as you scroll. The effect is a cinematic gradient across the sentence.
   - Alignment: Center
   - Max-width: ~820–900px
   - Line-height: ~1.2

3. **CTA button:**
   - "Learn more →" (dark green pill, same style)
   - Centered
   - ~32–40px below heading

---

### Section 4: SERVICES

**Layout:** 2-column asymmetric — LEFT STICKY (35–40% width) + RIGHT SCROLLING (55–60% width)
**Background:** White

**Left column (sticky, stays fixed while right scrolls):**
- "Services" pill label
- "Your guide for the road ahead" — ~48–56px heading, weight 700, dark, left-aligned
- Body text: "We help small and mid-sized businesses navigate the path to sustainability. Whether you're setting out or refining your route, we'll guide you every step of the way" — ~16px gray, left-aligned, ~240–280px wide

**Right column (scrolling service cards):**
Each service card contains:
1. Large image (~100% width of right column, ~400–480px tall, border-radius ~16px)
   - ↗ icon button positioned top-right of image (links to service page)
2. Service title: ~32–36px, weight 600, dark, below image
3. Service description: ~16px gray, below title

**Services shown:**
1. "Carbon footprinting & reporting" — aerial desert road photograph
   - Desc: "Measure your emissions with clarity—laying the foundation for smarter action."
2. "Net-zero strategy & roadmapping" — aerial forest road photograph
   - Desc: "Set meaningful goals and create a step-by-step plan to reach them."
   (More services implied below scroll)

**Key UX Pattern:** Sticky left + scrolling right is a sophisticated scroll storytelling pattern. The user reads the section intro once, then browses multiple services without the context disappearing.

---

### Section 5: BENEFITS ("Why choose us?")

**Layout:** Center-aligned heading + Bento grid of asymmetric cards
**Background:** White
**Top padding:** ~80–100px

**Header block:**
- "Benefits" pill label — centered
- "Why choose us?" — ~56px heading, centered
- Sub-text: "Sustainability can be a confusing space. We help you cut through the noise and focus on your business." — gray, centered, ~520px max-width

**Bento Grid Layout (asymmetric cards):**

The grid uses a 3-column base with varying spans:

**Row 1:**
- Card A (large, ~65% width, left): "Get ahead of regulation"
  - Sub: "Future-proof your business for a low carbon economy."
  - Visual element: Two horizontal black lines with circular icons at the end — a minimalist progress/process graphic (like a slider or timeline indicator with two steps)
  - Background: Very light gray (#f5f5f5)
  - Border-radius: ~20px
  - Height: ~320–360px

- Card B (tall, right, ~30% width): "Win more contracts"
  - Sub: "Sign new clients who are increasingly demanding sustainability."
  - Visual: Product-photography style hand holding a pen, signing — clean white isolated background
  - Same light gray bg
  - Height: Spans row 1 + row 2 (tall card)

**Row 2 (left portion):**
- Card C (large, ~65% width): "Boost your [avatar] team"
  - **Special design detail:** The word "team" is preceded by an inline circular avatar image of a team member (40x40px circle) embedded directly within the headline text — the avatar sits between "your" and "team" as if it IS a word in the heading. Extremely novel typographic treatment.
  - Sub: "Think of us like your in-house carbon experts."
  - No imagery beyond the inline avatar
  - Same light gray bg
  - Height: ~220–260px

- Card D (continuing right): "Create real impact"
  - Visual: Abstract semi-circular gauge/dial — a gray arc with a dark green filled semicircle, suggesting a meter at ~70% full. Very minimal, geometric.
  - Height: ~240px

**Row 3:**
- Card E (~35% width): "Award winning"
  - Visual: Photo of a silver trophy cup (product/object photography, clean)
  - No description text visible
  - Light gray bg

- Card F (~30% width): Stars + counter
  - 4.5 gold stars (amber)
  - "54+" in very large type (~56px)
  - "Happy clients" in gray below
  - Light gray bg

- Card G: "Create real impact" (continued from above or duplicate section)

**Bento Grid Principles:**
- All cards: light gray bg, ~20–24px border radius, no borders
- No drop shadows on cards
- Cards have generous internal padding (~32px)
- The asymmetry (different widths/heights) creates visual interest without chaos
- Imagery in cards is always object/product/abstract — never gratuitous

---

### Section 6: TESTIMONIALS

**Layout:** Center header + 3-column card grid
**Background:** White
**Top padding:** ~80px

**Header:**
- "Testimonials" pill label — centered
- "What our clients say" — ~56px, weight 700, centered
- Sub-text: "Climate action is a long-term commitment so we're building lasting relationships to match." — gray, centered, ~500px max-width

**Testimonial Cards (3 equal-width):**
- Background: Very light gray (~#f5f5f5)
- Border-radius: ~16px
- Internal padding: ~32px
- No borders or shadows

Each card contains (top to bottom):
1. Star rating — 5 filled stars (leftmost card appears to have 1 filled + rest empty, but likely 5 stars — screenshot ambiguity)
2. Quote text: ~17–18px, near-black, line-height 1.6, ~200–240px wide
3. Navigation arrows: Left card has ← (left arrow), right card has → (right arrow) — these are carousel navigation controls embedded within the card layout (previous/next)
4. Avatar + Name + Company block at bottom:
   - Circular avatar image (~40px diameter)
   - Name: ~16px, weight 600, near-black
   - Company: ~14px, gray

**Testimonials:**
1. Mark D., Avora Foods: "Their guidance gave us the confidence to commit to bold targets—and the roadmap to get there."
2. Ben F., Crafter & Co.: "We were worried about greenwashing. GreenLeaf gave us the clarity and credibility we needed."
3. Rachal E., NineTwenty: "GreenLeaf doesn't just give you a report—they give you insight and momentum."

**CTA below testimonials:** "Book my free consultation →" — dark green pill button centered with signature shadow

---

### Section 7: BLOG / RESOURCES

**Layout:** Mixed — featured row (left text + right image cards) + 3-column grid below
**Background:** White
**Top padding:** ~80–100px

**Section header (left-aligned, 2-column header row):**
- Left: "Resources & insights" pill label + "Fresh thinking for a low-carbon future" heading (~48px, weight 700)
- Right: "View all →" link (plain text, dark, ~14px, weight 500, right-aligned to same row)

**Featured blog posts (2-column):**

Left column:
- "Strategy" tag pill (green bg, white text, ~12px, rounded-full)
- Date: "May 11, 2025" — gray, ~13px
- Heading: "How to create a credible net-zero strategy" — ~32px, weight 600, dark
- Excerpt: "More and more businesses are announcing net-zero goals—but not all of them hold up to scrutiny." — ~16px gray
- Image below (pine branches, dark green) — fills ~400px wide, ~260px tall, border-radius ~16px

Right column:
- Large image first (blue flower with water droplets) — takes ~full column height initially
- "Reporting" tag pill (blue bg)
- Date: "May 4, 2025"
- Heading: "Your 2025 carbon reporting checklist" — ~28px, weight 600
- Excerpt: "The rules are changing—and smart businesses are preparing now. Get started with our new checklist."

**Secondary blog grid (3-column, equal width):**
Each card (image-first):
1. Purple flower image + "Communication" (purple pill) + "Mar 16, 2025" + "Sustainability vs. green hype"
2. Black rose image + "Measurement" (gray pill) + "Apr 6, 2025" + "7 Signs your ready for carbon footprint"
3. Dark green leaves image + "Strategy" (green pill) + "Mar 28, 2025" + "The SME guide to science-based targets"

**Blog card anatomy:**
- Image at top (~200px height, border-radius ~16px)
- Tag pill + date on same line below
- Heading: ~24px, weight 600, dark
- No explicit excerpt in secondary grid cards (just heading)
- No CTA/arrow — entire card implied as clickable

---

### Section 8: FAQ

**Layout:** Single column, centered header + full-width accordion list
**Background:** White
**Top padding:** ~80px

**Header:**
- "FAQ" pill label — centered
- "Frequently asked questions" — ~56px, weight 700, centered
- Sub-text: "Here are the top questions our clients ask before getting started." — gray, centered, ~480px max-width

**Accordion items (5 total):**
- Full width (~1000–1100px max)
- Each row: Question text (left-aligned, ~18px, weight 500, near-black) + circular "+" button (right-aligned, ~36px diameter, very light gray bg, thin border)
- Thin divider line between each item
- Very minimal — no background on rows, just clean separation
- All collapsed by default
- On expand: "+" rotates to "×" or transforms to "−", content slides down

**Questions:**
1. "How long does a typical carbon footprint assessment take?"
2. "What industries do you work with?"
3. "What if we already have some data or reports?"
4. "Do we even have the internal capability to pull this off?"
5. "What if the rules change or targets become impossible to meet?"

---

### Section 9: FINAL CTA

**Layout:** 2-column inside a rounded card container
**Container style:** Light gray background (#f3f4f6), border-radius ~24px, ~full width with ~24–32px margin on sides
**Height:** ~400–500px

**Left column (~50% width):**
- "Ready to take climate action?" — ~48px, weight 700, dark, left-aligned
- Sub-text: "Book a free consultation to speak with a carbon expert and discuss your goals. Let's build a smarter, greener future for your business." — ~17px gray, ~300px wide
- CTA button: "Book my free consultation →" — dark green pill, left-aligned (not centered)
- Signature shadow beneath button

**Right column (~50% width):**
- Image collage — 2 sub-columns, 3 rows = 6 image slots
- Images: leaf texture, man in dark green shirt, smiling woman on phone, tree rings cross-section, another leaf/plant
- Each image: rounded corners ~12–16px, small gap between images (~8px)
- Images overflow the container top edge slightly (they extend above the card)

---

### Section 10: FOOTER

**Container style:** Dark forest green background (~#192e22 or #1a2e23), border-radius on TOP corners only (~24px), bottom corners sharp/flush with page edge
**Width:** Full viewport width
**Padding:** ~48–64px vertical, ~64–80px horizontal

**Layout:** Left brand column + right nav columns

**Left column (~30% width):**
- Leaf icon (white SVG) + "Greenleaf" wordmark (white, ~22px, weight 600)
- Tagline: "Carbon consultants for savvy SMEs." — ~14px, light gray/white at reduced opacity
- Social icons row: X (Twitter), Instagram, LinkedIn, YouTube — white outline icon style, ~20px each, ~16px gap

**Center column:**
- "Pages" — column heading, ~14px, weight 600, light gray
- Links: Home, About, Services, Blog — ~15px, white, ~8px gap between

**Right column:**
- "Information" — column heading, same style
- Links: Contact, Privacy policy, Terms, 404 — ~15px, white

**Footer bottom bar:**
- Full-width horizontal divider line (white at ~15% opacity)
- Left: "© 2025 GreenLeaf, All rights reserved" — ~13px, gray
- Center: "Built by James Hicks" — ~13px, gray
- Right: "Made in Framer" — ~13px, gray

---

## 5. KEY DESIGN PATTERNS & SIGNATURE ELEMENTS

### 5a. The Floating Button Shadow
Every CTA button has a distinctive blurred shadow directly beneath it — not a standard box-shadow but a soft, spread blur that creates the illusion the button is floating above the surface. The shadow is:
- Color: Dark green (same as button) or near-black
- Blur radius: ~20–28px
- Spread: ~30–40px wide
- Vertical offset: ~8–14px below button
- Opacity: ~25–35%
- Effect: Button appears to hover/float

### 5b. Section Label Pills
Every section follows the same hierarchy:
1. Small pill badge (gray, "About" / "Services" / "Benefits" / etc.)
2. Large heading
3. Sub-description paragraph
This creates extreme visual consistency — the user always knows where they are.

### 5c. Scroll-Triggered Text Fade
The About section heading uses a scroll-triggered opacity reveal where individual words/phrases appear at different opacities. Words already passed appear light gray; the word/phrase at the current scroll position appears near-black. Creates a cinematic "reading with a spotlight" effect.

### 5d. Inline Avatar in Heading
"Boost your [circular photo] team" — an avatar image is embedded inline as if it were a text character within the H2. This is a unique, memorable typographic flourish.

### 5e. Sticky Scroll Services Section
Left content is position:sticky while right service cards scroll past. The section is taller than the viewport, creating a multi-card browsing experience without navigating away.

### 5f. Bento Grid for Benefits
Benefits are displayed in a non-uniform grid of cards with varying widths and heights. Mixed content types: text-only, text+photo, text+illustration, text+number. The irregularity signals creativity while the consistent card style (gray bg, rounded, padded) maintains cohesion.

### 5g. Rounded Footer Card
Footer is not a traditional dark band — it's a rounded-corner card sitting at the bottom of the page, visually similar to the final CTA section's container. Creates a "finished" bookend feeling.

### 5h. Photography Style
All photography falls into specific categories:
- Nature/organic macro: leaf textures, wood grain, flower closeups, pine branches
- Human subjects: consultants/professionals, arms crossed, clean backgrounds (dark green or neutral)
- Aerial/drone landscape: roads through desert, forest — metaphors for "journey" and "guidance"
- Object/product: pen signing, trophy cup
- Abstract: water droplets on flowers (for blog posts)
No stock photo clichés (no handshakes, no laptops in coffee shops). Very intentional image selection.

---

## 6. ANIMATION & MOTION NOTES

Observable from screenshots (implied from Framer's typical behavior):
- **Page load:** Hero content likely fades/slides up
- **Scroll reveal:** Sections fade in as they enter viewport
- **About text:** Scroll-triggered word-by-word opacity animation (dark to light gradient across sentence)
- **Button hover:** Likely subtle scale up + shadow intensification
- **FAQ accordion:** Smooth height animation on expand/collapse, "+" rotation
- **Testimonial carousel:** Horizontal slide between cards
- **Service cards:** Right column scrolls while left is sticky (CSS position:sticky)
- **Nav hover:** Underline or opacity shift on links
- All animations appear to use ease curves (not linear) — smooth, not bouncy

---

## 7. ACCESSIBILITY OBSERVATIONS

- High contrast: Near-black (#111) on white — passes WCAG AAA
- Body gray (#6b7280) on white — approximately 4.6:1, passes WCAG AA
- White text on dark green CTA — passes AAA
- Light gray text on light gray cards — potential WCAG issue (body text in cards needs checking)
- FAQ accordion uses "+" button — should have aria-expanded
- Images are decorative-dominant — alt text dependency
- No skip navigation visible
- Font size: 16px+ for body — accessible baseline

---

## 8. RESPONSIVE CONSIDERATIONS (inferred)

**Mobile breakpoints (not visible in screenshots but inferable):**
- Hero: Single column, text scales down, button full-width
- Image gallery: Likely 2-column or horizontal scroll
- Services: Unsticks left column, becomes stacked single column
- Benefits bento: Collapses to single column cards
- Testimonials: 1 card visible at a time with swipe
- Blog: 1-column stack
- Footer: Single column stack

---

## 9. IKIGAI ADAPTATION NOTES

When adapting this design language for Ikigai Consulting:

**Keep from Greenleaf:**
- Pill section labels above every heading (replace current gold accent line)
- Generous whitespace / white-dominant backgrounds
- The floating button shadow effect
- Sticky services scroll pattern
- Bento grid for benefits/differentiators
- Testimonial card layout (3-col)
- Final CTA as a rounded card (not full-bleed)
- Footer as a rounded dark card
- Image collage pattern in CTA section
- Blog/insights section layout

**Adapt for Ikigai brand:**
- Replace dark forest green (#1a3528) with Ikigai Hunter Green (#355E3B)
- Reintroduce Gold (#D4A843) as accent — Greenleaf has none
- Restore serif headlines (Playfair Display) — Greenleaf is all sans-serif
- Ikigai uses architectural/structural motifs (pillars, blueprints) instead of organic nature
- Keep sans-serif for body but maintain serif for H1/H2
- Adjust button to gold bg + black text (Ikigai standard) vs. Greenleaf's dark green + white
- Replace leaf imagery with architectural imagery (or Nilda's actual photos + organizational imagery)
- The scroll-triggered text fade in About section is directly applicable to Ikigai

**Sections to build (Ikigai homepage mapped to Greenleaf structure):**

| Greenleaf Section | Ikigai Equivalent |
|------------------|-------------------|
| Scarcity badge | Credibility strip ("20+ years / 85% board attendance") |
| Hero heading | "Architecting Purpose-Driven Organizations to Thrive" |
| Image gallery row | Nilda + team + client event photography |
| About teaser | "We Are Organizational Architects." scroll reveal |
| Services (sticky scroll) | 7 Pillars browsing (sticky intro + scrolling pillar cards) |
| Benefits bento | Why Ikigai bento (Expertise / Full-Cycle / Results / Sector depth) |
| Testimonials | Margaret Chen + other testimonials |
| Blog/resources | (future — not currently in site) |
| FAQ | Common Concerns (already exists on Contact page — move to homepage) |
| Final CTA card | "Let's Build Something That Lasts" |
| Footer | Same structure, Ikigai brand |
