# Greenleaf About Page — Full Design Analysis

Source: Framer Marketplace template "Greenleaf"
Captured: 9 screenshots covering full About page scroll

---

## 1. PAGE OVERVIEW

**Purpose:** Establish trust, credibility, and human connection. Introduce the company mission, values, team, and social proof.

**Tone:** Warm but professional. The page moves from company-level story → values → proof (stats) → human faces (team) → client validation.

**Structural flow:**
1. Page hero (title)
2. About GreenLeaf (company intro + logo trust bar) — 2-column with photo
3. Mission & values (2x2 card grid)
4. Stats bar (4 raw numbers, no containers)
5. Team profiles (alternating 2-column, 2 founders)
6. Featured standalone testimonial
7. Final CTA card (same as homepage)
8. Footer (same as homepage)

---

## 2. SECTION-BY-SECTION BREAKDOWN

### Section 1: PAGE HERO

**Layout:** Single column, centered, white background
**Vertical padding:** ~100–120px top

**Elements:**

1. **Section label pill:**
   - "About us" — gray pill, centered
   - Same styling as homepage pills (light gray bg, thin border, ~13px text)

2. **Page heading:**
   - "Our story so far"
   - Size: ~72–80px, weight 700, near-black (#111111)
   - Letter-spacing: -0.03em to -0.05em (very tight)
   - Alignment: Center
   - Single line (fits on one line at desktop width)

3. **Sub-description:**
   - "Meet the team and learn about our mission."
   - Size: ~17px, color: gray (#6b7280), center-aligned
   - Max-width: ~440px
   - ~20–24px gap below heading

**Notable:** No CTA button in the hero. The hero is purely a navigational/orienting element — not a conversion point.

---

### Section 2: ABOUT GREENLEAF ("Who we are")

**Layout:** 2-column asymmetric — LEFT text (~42%) + RIGHT large photo (~52%), ~6% gap
**Background:** White
**Top padding from hero:** ~80–100px

**Left column:**

1. **Section label pill:**
   - "Who we are" — left-aligned (not centered, unlike most sections)
   - Same gray pill styling

2. **Heading:**
   - "About GreenLeaf"
   - Size: ~48px, weight 700, near-black
   - Left-aligned
   - ~12px gap below pill

3. **Body text:**
   - "GreenLeaf is a carbon consultancy helping SMEs turn climate ambition into action. We provide practical, data-driven support for decarbonisation and ESG reporting—empowering businesses to stay ahead and build lasting value."
   - Size: ~16–17px, gray (#6b7280), line-height ~1.65
   - Max-width: ~440px
   - Left-aligned

4. **"Trusted by:" label:**
   - Small inline label: "Trusted by:"
   - Size: ~14px, weight 500, near-black
   - ~24–32px gap below body text

5. **Logo/trust bar:**
   - Horizontally arranged client/partner logos
   - All logos rendered in grayscale (desaturated, no color)
   - Logos visible: [partial name ending 'ave'], Boltshift, Capsule, Ephemeral, [more cut off to right]
   - Each logo: icon + wordmark side-by-side, ~16–20px height
   - Spacing between logos: ~24–32px
   - Appears to be either static row or slow-scrolling marquee (implied by logos being cut off at right edge)
   - No "trusted by" badge/border container — just raw logos on white

**Right column:**

1. **Large portrait photograph:**
   - Subject: Young man with curly dark hair, beige/tan knit sweater, smiling, working on a laptop
   - Background: Dark navy/slate (#1e2a3a or similar deep dark blue-gray)
   - Image dimensions: ~52% of row width, ~560–600px tall
   - Border-radius: ~16–20px (rounded-2xl)
   - No drop shadow visible on image itself

2. **Floating overlay pill badges (KEY DESIGN ELEMENT):**
   - Two pill-shaped text badges are overlaid ON the photograph, positioned mid-image
   - Badge style:
     - Background: Very dark near-black or dark green (~#1a1a1a or #1a3528)
     - Text: White, ~13–14px, weight 500
     - Shape: Fully rounded pill
     - Padding: ~8–10px vertical, ~16–20px horizontal
     - No border
     - Very subtle shadow to lift from photo
   - Badge 1: "Impact-obsessed" — positioned left-center of image (~45% down, ~20% from left edge)
   - Badge 2: "Carbon experts" — positioned right-center of image (~35% down, ~55% from left edge)
   - These are NOT tooltips or hover states — they are permanently visible decorative overlays describing the company/person ethos
   - The overlapping placement feels natural, not like a diagram

**Layout note:** Left column is vertically top-aligned (pill + heading + body + logo bar stacks naturally). Right column photo is taller and the badges provide visual weight so the layout feels balanced without forcing vertical centering.

---

### Section 3: MISSION & VALUES

**Layout:** Center-aligned header + 2x2 equal-width card grid
**Background:** White
**Top padding:** ~80–100px

**Header block:**

1. **Section label pill:**
   - "Mission & values" — centered
   - Same gray pill styling

2. **Heading:**
   - "We're on a mission..."
   - Size: ~56px, weight 700, near-black
   - Centered
   - The ellipsis ("...") is intentional — it creates a visual cliffhanger

3. **Sub-text:**
   - "…to empower small and mid-sized businesses to thrive in a low-carbon economy. Along the way, we hold these values true."
   - Size: ~17px, gray, centered, max-width ~520px
   - The "…" at the START continues the sentence from the heading — the heading + sub-text together form one complete sentence split across two elements. This is a playful, editorial typographic technique.

**Values Grid (2x2):**

Grid: 2 columns, equal width (~48% each), ~16–24px gap
All cards identical in styling:
- Background: Very light gray (~#f3f4f6 or #f0f0f0)
- Border-radius: ~20px
- Padding: ~32–40px
- No border, no drop shadow

Each card anatomy (top to bottom):
1. **Icon chip:**
   - Shape: Square with rounded corners (~12px radius), approximately 44x44px
   - Background: White
   - Shadow: Very subtle soft box-shadow (like a slight lift off the card surface)
   - Icon: Black, ~20–22px, filled/solid style (not line icons)
   - Positioned top-left of card

2. **Large whitespace:** ~60–80px between icon and title (creates breathing room)

3. **Title:** ~28–32px, weight 600, near-black, left-aligned within card

4. **Description:** ~15–16px, gray (#6b7280), left-aligned, ~1 line of text

**The 4 values:**

| Card | Icon | Title | Description |
|------|------|-------|-------------|
| Top-left | Rocket | Ambitious | "We help clients lead, not lag, on climate action" |
| Top-right | Wrench/tool | Practical | "Clear, grounded advice that fits your business" |
| Bottom-left | Lightning bolt | Impactful | "Designed to deliver measurable, lasting results" |
| Bottom-right | Group/people | Collaborative | "Built on trust, insight, and long-term partnership" |

**Icon style note:** The icons appear to be black filled/bold emoji-style or Phosphor Bold icons — solid shapes, not thin-stroke outline icons like Lucide. They have a weightier, more grounded appearance.

---

### Section 4: STATS BAR

**Layout:** 4 columns, equal width, horizontal row
**Background:** White (no card container, no background color change)
**Top padding from values grid:** ~80px
**Max-width:** ~1000–1100px, centered

**Stats displayed:**

| Number | Label |
|--------|-------|
| 70+ | Carbon footprints |
| 25+ | Net-zero targets set |
| 50+ | Reports published |
| 50+ | Clients making reductions |

**Typography — critical detail:**
- **Number:** ~64–72px, weight **300** (very light/thin weight — this is unusual and intentional)
- **"+" symbol:** Same size as number, same thin weight
- **Label:** ~13–14px, weight 400, gray (#6b7280)
- **Gap between number and label:** ~4–8px (tight stacking)

**Layout note:** Numbers are NOT in cards or containers. They float directly on the white background. No dividers between stats. The raw typographic treatment — no boxes, no backgrounds, just big thin numbers — feels editorial and confident rather than dashboard-y.

**Alignment:** All 4 stats left-aligned within their column (not centered), creating a slight grid feel rather than symmetrical centering.

---

### Section 5: TEAM PROFILES

**Layout:** Alternating 2-column per founder — first card: photo LEFT, text RIGHT; second card: text LEFT, photo RIGHT
**Background:** White
**Top padding:** ~80–100px

**Header block:**
- "Team" pill label — centered
- "Meet our founders" — ~56px, weight 700, near-black, centered
- Large whitespace (~60–80px) between header and first profile

**Profile Card Template:**

Each founder gets a full "row" that spans the content width. Layout:
- Photo column: ~55% of row width
- Text column: ~38% of row width
- Gap: ~7%
- Photo and text block are vertically centered to each other

**Photo treatment:**
- Size: ~600px wide × ~480–520px tall
- Border-radius: ~20px (rounded corners, no harsh edges)
- No caption, no overlay text (unlike the "About GreenLeaf" photo which has badge overlays)
- Photography style: Warm, natural, editorial — subjects in casual-professional attire, interiors with ambient light, smiling/approachable

**Text block anatomy (top to bottom):**
1. **Name:** ~36–40px, weight 600, near-black (#111111)
2. **Title/role:** ~18–20px, weight 400, gray (#6b7280), ~4px gap below name
3. **Bio paragraph:** ~15–16px, gray, line-height ~1.65, ~3–4 lines, ~20px top gap
4. **Social icons:** X (Twitter) + LinkedIn — small outline/line icon style, ~20px, near-black, ~12–16px gap between icons, ~20px top gap

**Founder 1: John Nichols**
- **Position:** Photo LEFT, Text RIGHT
- **Photo:** Man, brown/reddish hair, light gray button-down shirt, dark navy background, warm ambient golden light (lamp visible in upper-left of frame), smiling looking slightly off-camera, seated at desk
- **Name:** John Nichols
- **Title:** Co-founder & lead strategist
- **Bio:** "John has over 5 years' experience in sustainability and strategy. He's helped companies from tech to manufacturing create actionable net-zero plans. John focuses on making climate strategy clear and empowering SMEs to lead with confidence."
- **Socials:** X icon + LinkedIn icon

**Founder 2: Laura Hall**
- **Position:** Text LEFT, Photo RIGHT (ALTERNATED from Founder 1)
- **Photo:** Woman, curly brown hair in loose updo, sage/dusty green sweater, green-toned environment background with plant, laptop visible, warm smile, well-lit
- **Name:** Laura Hall
- **Title:** Co-founder & technical director
- **Bio:** "Laura is a carbon accounting expert with a background in environmental science. She's supported global clients with emissions reporting and compliance. At GreenLeaf, she ensures all work is technically sound, transparent, and results-driven."
- **Socials:** X icon + LinkedIn icon

**Key alternating pattern:** The left↔right flip between founders creates visual rhythm down the page. The eye travels: left (photo) → right (text) → left (text) → right (photo). This zigzag scanning pattern keeps the page engaging for multiple profiles.

**Gap between profiles:** ~80–100px of whitespace (very generous) so each profile is a distinct visual unit.

---

### Section 6: STANDALONE FEATURED TESTIMONIAL

**Layout:** Single column, centered, no card/container — raw text on white background
**Background:** White
**Top padding from last profile:** ~80–100px

**Elements (top to bottom):**

1. **Stars:**
   - 5 filled stars (amber/gold, ~#d97706)
   - ~24px each, centered
   - No partial/empty star — full 5/5

2. **Large quote:**
   - "GreenLeaf helped us not just meet reporting requirements—but actually use our carbon data to drive change. We now have a strategy that excites our board and resonates with customers."
   - Size: ~22–24px, near-black (#111111), weight 400
   - Line-height: ~1.6
   - Max-width: ~680–720px, centered
   - NO quotation marks styled as large decorative elements — quote marks are standard inline (curly quotes)
   - ~20px gap below stars

3. **Attribution row:**
   - Circular avatar image (~48px diameter, small photo of Hannah Reid)
   - **Vertical divider line** — thin 1px gray line, ~40px tall, ~24px horizontal margin on each side
   - Company logo: Capsule icon (small circular logo icon) + "Capsule" text (~15px gray)
   - "Hannah Reid" — ~16px, weight 600, near-black (left of divider)
   - "Capsule" below her name: ~13px, gray (client's company name)
   - All centered on the row, equal visual weight

**Key design detail:** This testimonial has NO card container. It sits directly on white with only the stars, quote text, and attribution. This treatment makes it feel like a featured editorial pull quote — more authoritative than the 3-card carousel on the homepage. The lack of a box implies total confidence in the content.

**Contrast with homepage testimonials:** Homepage uses 3 gray cards side-by-side; About page uses 1 large open-format quote. Two different visual registers for the same content type.

---

### Section 7: FINAL CTA CARD

**Identical to homepage Final CTA section — no changes.**

- Light gray rounded container (~24px border-radius, full-width with ~24px margins)
- Left: "Ready to take climate action?" heading + body + dark green pill CTA button "Book my free consultation →"
- Right: 2×3 image collage (leaf, man, woman, tree rings, leaf) with ~8px gap and ~12px border-radius per image
- Same floating button shadow effect

---

### Section 8: FOOTER

**Identical to homepage footer — no changes.**

- Dark forest green rounded-top card
- Left: Greenleaf logo + tagline + social icons
- Center-right: Pages + Information nav columns
- Bottom bar: copyright + built by + made in Framer

---

## 3. DESIGN PATTERNS SPECIFIC TO ABOUT PAGE

### 3a. Floating Image Overlay Badges
The "About GreenLeaf" photo has two descriptive pill badges overlaid directly on the image. These are semi-transparent dark pills that describe company DNA:
- Not pointers/callouts — no lines or arrows
- Placed organically on the photo (not perfectly aligned to a grid)
- Creates a "profile annotation" feel — like someone tagged the photo
- Highly distinctive, memorable UI element
- Could be applied to any portrait photo to add personality/branding context

### 3b. Logo Trust Bar with "Trusted by:" Label
Rather than a separate "trusted by" section, the logos appear inline within the company description section, directly under the body copy. The "Trusted by:" label is styled as inline body text (not a heading or pill) — making it conversational rather than formal.

### 3c. Sentence Split Across Heading + Sub-text
"We're on a mission..." (heading) + "…to empower small and mid-sized businesses..." (sub-text) — the sub-text COMPLETES the heading sentence. This is a deliberate copywriting/typography technique:
- Creates curiosity in the heading (what mission?)
- Forces the reader's eye to the sub-text to complete the thought
- The ellipsis on both ends acts as a visual connector

### 3d. Editorial Stats (No Containers)
The stats row uses very large, very THIN (~weight 300) numbers directly on white — no cards, no backgrounds, no borders. This is an editorial choice:
- Feels like a magazine spread, not a dashboard
- The thinness of the weight makes the large size feel graceful rather than aggressive
- No container means the numbers feel like they ARE the content, not presented content

### 3e. Alternating Team Profile Layout
Two founders alternate left/right placement of photo vs. text. Rules:
- First profile: Photo left, text right
- Second profile: Text left, photo right
- Pattern would continue for subsequent team members
- Generous whitespace (80–100px) separates each profile
- No card containers on profiles — photo and text float on white

### 3f. Standalone Quote vs. Card Carousel
The testimonial is presented as a single large featured quote (no card), versus the homepage's 3-card carousel. The About page treatment signals this is THE most important testimonial — a featured endorsement from a key client. The open-format treatment (no box) conveys confidence.

---

## 4. TYPOGRAPHY NOTES SPECIFIC TO ABOUT PAGE

- Page heading ("Our story so far") uses same hero scale as homepage (~72–80px) — consistent page entry point
- The values card titles (~28–32px) are the smallest H3-level headings seen so far in the template
- Quote text at ~22–24px is larger than standard body but smaller than headings — a distinct "pullquote" scale
- Stats numbers at weight 300 is the thinnest weight used anywhere in the template (all other text is 400–700)

---

## 5. PHOTOGRAPHY NOTES SPECIFIC TO ABOUT PAGE

**3 distinct photo contexts used:**

1. **Company/team photo (right-aligned section):**
   - Dark navy background (same as homepage gallery photos)
   - Subject at work (laptop), confident, casual
   - Portrait orientation, tall crop

2. **Founder headshots (alternating sections):**
   - Both have environmental backgrounds (not pure studio white)
   - John Nichols: Dark interior, warm gold ambient light from lamp — feels professional/thoughtful
   - Laura Hall: Green-toned natural background with plant — feels approachable/warm
   - Both have laptop visible — signals active, working professionals
   - Both have direct or near-direct eye contact — builds trust

3. **Featured testimonial avatar:**
   - Small circular crop (~48px), Hannah Reid
   - Contextual: shown alongside company logo (Capsule) with divider

**Photography philosophy:** Every human photo on the About page conveys warmth and competence simultaneously. No stiff corporate headshots, no plain white backgrounds (except the homepage gallery). Environments are chosen to reinforce the company character.

---

## 6. ACCESSIBILITY OBSERVATIONS

- Logo bar grayscale treatment may cause issues for logos that rely on color for recognition
- Floating overlay badges on photo need alt text strategy
- Stats row (no containers, no structure) needs semantic HTML (dl/dt/dd or similar) for screen readers
- Team profile layout — alternating direction may confuse screen reader if not in document order
- Quote attribution divider line: decorative, should be aria-hidden
- All icon chips in values cards: icons appear to be decorative (labels explain them) — need aria-hidden if SVG

---

## 7. IKIGAI ADAPTATION NOTES

**Direct mappings for Ikigai About page:**

| Greenleaf Element | Ikigai Equivalent |
|------------------|-------------------|
| "Our story so far" hero | "Architect of Purpose-Driven Organizations" or similar |
| "Who we are" 2-col with floating badge photo | Nilda bio section with floating credential badges ("20+ years" / "Nonprofit expert") |
| Floating overlay badges | Replace with: "20+ Years Experience" / "Ontario NGO Expert" on Nilda's photo |
| "Trusted by:" logo bar | "Organizations We've Served" — placeholder until real logos available |
| Mission statement with ellipsis split | Ikigai mission statement split technique |
| 2x2 values grid | Ikigai's 5 values — could expand to 2x3 or keep 4 core values in 2x2 |
| Values icon chips | Replace emoji icons with Lucide icons (already in Ikigai stack) |
| Stats bar (weight 300 numbers) | Ikigai stats: "20+ yrs" / "85% attendance" / "$200K funding" / "8 programs" |
| Alternating team profiles | Nilda as solo founder — single profile (left photo, right text), not alternating |
| Standalone large testimonial | Margaret Chen or most powerful Ikigai testimonial |
| Final CTA card | "Let's Build Something That Lasts" rounded card |

**What to change for Ikigai:**
- Single founder (not multiple) — no alternating needed, but same 2-col photo + text layout
- Swap floating badge text from soft skills ("Impact-obsessed") to hard credentials ("20+ Years" / "Catholic Community Services of York Region")
- Values: Use all 5 Ikigai values (Integrity, Accountability, Social Justice, Excellence, Courageous Leadership) — requires 2x3 grid or different layout
- Stats weight: The editorial "weight 300" numbers could work beautifully for Ikigai's credibility strip
- No social media icons for Nilda (TBD based on client preference)
- Logo trust bar: Use logos of organizations served once available; placeholder text in interim
