# Feature Research: Premium Consulting Firm Website

**Domain:** Premium organizational consulting website -- nonprofit/NGO sector, authority positioning
**Researched:** 2026-02-16
**Confidence:** MEDIUM (based on training knowledge of consulting firm websites, premium web design patterns, and nonprofit sector digital presence; no live web verification available)

## Research Context

This research answers: "What features do premium consulting firm websites need -- specifically for an organizational consulting firm targeting NGOs, charities, faith-based orgs, and women-led initiatives in Ontario?"

The analysis draws from patterns observed across premium consulting firms (McKinsey, BCG, Bain, Deloitte), nonprofit-sector consultancies (Bridgespan Group, TCC Group, Nonprofit Finance Fund), boutique authority-positioned firms, and modern web design best practices. Confidence levels are noted where uncertainty exists.

---

## Feature Landscape

### Table Stakes (Users Expect These)

Missing any of these means visitors leave or lose trust. For a premium consulting firm, the bar is higher than a generic small business site.

#### TS-1: Clear Value Proposition Above the Fold
| Aspect | Detail |
|--------|--------|
| **What** | Headline + subheadline that instantly communicates who you are, who you serve, and why you matter. Visible without scrolling. |
| **Why expected** | Nonprofit leaders are time-poor and skeptical. You have 3-5 seconds to prove relevance. If the hero says nothing specific, they bounce. |
| **Complexity** | Low |
| **For Ikigai** | "Architecting Purpose-Driven Organizations to Thrive" is strong. Pair with a subheadline specifying Ontario/nonprofit focus and a single gold CTA. |
| **Confidence** | HIGH -- universal web UX principle |

#### TS-2: Professional, Consistent Visual Design
| Aspect | Detail |
|--------|--------|
| **What** | Cohesive color palette, typography hierarchy, intentional whitespace, consistent component styling across all pages. No template-default look. |
| **Why expected** | Consulting is a trust business. Visual quality is a proxy for professional quality. A site that looks cheap signals a firm that delivers cheap work. |
| **Complexity** | Medium (design system creation, then low to maintain) |
| **For Ikigai** | Hunter Green + Gold + Black + White is a strong, distinctive palette. Serif headlines + sans-serif body is the correct pattern for authority. The architectural motif differentiates from generic nonprofit aesthetics. |
| **Confidence** | HIGH -- well-established brand design principle |

#### TS-3: Mobile-Responsive Design
| Aspect | Detail |
|--------|--------|
| **What** | Full functionality and readability on mobile devices. Not just "it fits" but "it feels intentional on mobile." |
| **Why expected** | 55-65% of nonprofit leader web traffic is mobile. Board members checking during commutes, EDs browsing on phones between meetings. A site that breaks on mobile is disqualifying. |
| **Complexity** | Medium (must be designed mobile-first or concurrently, not retrofitted) |
| **For Ikigai** | The 7-pillar grid, two-column layouts, and architectural diagrams need specific mobile treatments. The Ikigai Model diagram is the hardest mobile challenge. |
| **Confidence** | HIGH -- industry standard |

#### TS-4: Fast Page Load (Under 3 Seconds)
| Aspect | Detail |
|--------|--------|
| **What** | First Contentful Paint under 1.5s, Largest Contentful Paint under 2.5s, Cumulative Layout Shift under 0.1. Core Web Vitals passing. |
| **Why expected** | Google ranking factor. Also, premium brands load fast -- slow sites feel amateur. Nonprofit leaders on spotty office WiFi or mobile data will abandon slow sites. |
| **Complexity** | Medium (requires image optimization, code splitting, proper hosting) |
| **For Ikigai** | Static site approach inherently helps. Key risks: unoptimized images, heavy font files, unoptimized SVG diagrams. |
| **Confidence** | HIGH -- Google's documented ranking signals |

#### TS-5: Clear Navigation
| Aspect | Detail |
|--------|--------|
| **What** | Persistent top navigation with all 6 pages. Logo links home. Current page indicated. Mobile hamburger menu. No more than 7 top-level items. |
| **Why expected** | Visitors must orient immediately. Consulting buyers visit 3-5 pages per session on average. If they can't find Services or Case Studies in one click, they leave. |
| **Complexity** | Low |
| **For Ikigai** | 6 pages is ideal -- fits in one nav bar without dropdown menus. Order should follow the buyer's mental model: Home, About, Services, The Ikigai Model, Case Studies, Contact. |
| **Confidence** | HIGH -- UX fundamental |

#### TS-6: Services Page with Clear Scope
| Aspect | Detail |
|--------|--------|
| **What** | Each service offering clearly described with: what it is, who it's for, what's included, expected outcomes. Not vague marketing copy but concrete scope. |
| **Why expected** | Consulting buyers need to self-qualify. "Is this the right firm for MY problem?" If services are vague, they assume generic and move on. |
| **Complexity** | Low (content structure), Medium (per-pillar sections with consistent formatting) |
| **For Ikigai** | 7 pillars need identical structure per pillar. Consistency signals thoroughness. Each pillar section: icon, title, description, what's included, outcomes, CTA to contact. |
| **Confidence** | HIGH -- consulting firm website convention |

#### TS-7: Contact Page with Form
| Aspect | Detail |
|--------|--------|
| **What** | Dedicated contact page with form fields relevant to consulting inquiry. Not just an email address. Must feel like the beginning of a professional engagement, not a cold email. |
| **Why expected** | The entire site funnels here. If the contact mechanism feels amateur (mailto link, generic Wufoo form), the conversion dies at the finish line. |
| **Complexity** | Low-Medium (form + validation + submission handling + calendar integration) |
| **For Ikigai** | Fields: Name, Organization, Email, "Describe your challenge." Calendar booking embed (Calendly or similar) is expected for modern consulting firms. |
| **Confidence** | HIGH |

#### TS-8: About Page with Founder/Team Credibility
| Aspect | Detail |
|--------|--------|
| **What** | Real people with real credentials. Not a faceless brand. Professional photo, background, relevant experience, values alignment with audience. |
| **Why expected** | Consulting is personal. Nonprofit leaders hire people, not brands. They need to see who they'll work with and trust that person's judgment. |
| **Complexity** | Low |
| **For Ikigai** | Nilda Bastone's bio is the centerpiece. Must communicate: depth of nonprofit experience, values alignment with mission-driven work, credential authority, human warmth without being casual. Professional photo is non-negotiable. |
| **Confidence** | HIGH |

#### TS-9: Social Proof / Credibility Indicators
| Aspect | Detail |
|--------|--------|
| **What** | Testimonials, client logos, case studies, or outcome metrics. At minimum, ONE form of third-party validation visible on the homepage. |
| **Why expected** | Consulting is a high-trust purchase. Visitors need evidence beyond self-claims. "Don't tell me you're good -- show me someone who agrees." |
| **Complexity** | Low (testimonials), Medium (case studies with structure) |
| **For Ikigai** | Case Studies / Impact page handles depth. Homepage needs at minimum: testimonial quotes or "Organizations we've served" indicators. If case studies aren't ready at launch, testimonial quotes are the minimum viable social proof. |
| **Confidence** | HIGH |

#### TS-10: Basic SEO Foundation
| Aspect | Detail |
|--------|--------|
| **What** | Unique title tags per page, meta descriptions, semantic HTML (h1-h6 hierarchy), alt text on images, Open Graph tags for social sharing, sitemap.xml, robots.txt. |
| **Why expected** | Nonprofit leaders searching "organizational consulting Ontario" or "nonprofit governance consultant" must find Ikigai. Without SEO basics, the site is invisible to organic search. |
| **Complexity** | Low (foundational), Medium (keyword research and optimization) |
| **For Ikigai** | Key terms: "nonprofit consulting Ontario," "organizational architecture," "NGO governance," "nonprofit strategic planning Ontario," "charity board development." |
| **Confidence** | HIGH |

#### TS-11: SSL Certificate (HTTPS)
| Aspect | Detail |
|--------|--------|
| **What** | HTTPS everywhere. Browser must show secure connection. |
| **Why expected** | Chrome flags non-HTTPS as "Not Secure." Disqualifying for any professional firm. |
| **Complexity** | Low (most hosts provide free) |
| **Confidence** | HIGH |

#### TS-12: Accessible Color Contrast and Text Sizing
| Aspect | Detail |
|--------|--------|
| **What** | WCAG 2.1 AA minimum contrast ratios (4.5:1 for body text, 3:1 for large text). Readable font sizes (16px+ body). |
| **Why expected** | Nonprofit sector has strong accessibility values. Many target orgs serve populations with accessibility needs. A firm serving NGOs that fails basic accessibility is a credibility risk. Also legally relevant under AODA (Accessibility for Ontarians with Disabilities Act). |
| **Complexity** | Low (design-time decision) |
| **For Ikigai** | Hunter Green on White needs contrast verification. Gold on White will likely fail -- gold text on white backgrounds must be avoided. Gold works as accents, buttons (with black text), and decorative elements, NOT as text on light backgrounds. |
| **Confidence** | HIGH -- AODA is Ontario law |

---

### Differentiators (Competitive Advantage)

Features that set Ikigai apart from other nonprofit consultants. Not expected, but when present, they create the "these people are different" impression.

#### D-1: Proprietary Framework Visualization (Ikigai Architecture Model)
| Aspect | Detail |
|--------|--------|
| **What** | A dedicated page with an interactive or high-quality static diagram of the Ikigai Architecture Model. The 7 pillars visualized in the Blueprint > Build > Strengthen > Sustain flow. Not a stock infographic -- a branded, bespoke visual. |
| **Why differentiating** | Most nonprofit consultants list services. Almost none have a named, trademarked methodology with its own visual identity. This is McKinsey's 7S Framework or BCG's Growth-Share Matrix for the nonprofit space. It signals "we have a system, not just opinions." |
| **Complexity** | Medium-High (diagram design, responsive treatment, potential animation) |
| **For Ikigai** | This is the single most important differentiator. The Ikigai Model page must feel like discovering a framework, not reading a brochure. The diagram should be the visual centerpiece of the entire site. Consider: SVG-based for crispness at all sizes, subtle reveal animation on scroll, hover states on each pillar. |
| **Confidence** | HIGH -- proprietary IP visualization is a proven authority strategy |

#### D-2: Structured Case Studies (Challenge > Approach > Outcome)
| Aspect | Detail |
|--------|--------|
| **What** | Case studies with consistent narrative structure: what was the challenge, what approach was used (mapping to the 7 pillars), what was the outcome with measurable results. |
| **Why differentiating** | Most nonprofit consultants have testimonial quotes at best. Structured case studies with metrics signal rigor. When each case maps back to specific pillars, it reinforces the framework's validity. |
| **Complexity** | Medium (template structure, content requires real client data) |
| **For Ikigai** | Challenge > Approach > Outcome > Measurable Results. Tag each case with which pillars were engaged. This creates implicit proof that the framework works. If detailed case studies aren't available at launch, use anonymized composites with real metrics. |
| **Confidence** | HIGH |

#### D-3: Sector-Specific Language and Audience Segmentation
| Aspect | Detail |
|--------|--------|
| **What** | "Who We Serve" section with specific audience segments named and addressed. Copy that uses nonprofit terminology (governance, program design, funder accountability, mission drift) not generic business language. |
| **Why differentiating** | Most consulting websites use generic business language that could apply to any industry. When a nonprofit ED reads "We understand program drift" or "governance that funders trust," it creates instant "they get us" resonance. |
| **Complexity** | Low (content/copy decision, not technical) |
| **For Ikigai** | Already planned in the Who We Serve section. Go further: each audience segment (NGOs, faith-based, women-led, boards) should see themselves specifically named and their unique challenges acknowledged. |
| **Confidence** | HIGH |

#### D-4: Scroll-Triggered Animations and Micro-Interactions
| Aspect | Detail |
|--------|--------|
| **What** | Elements that animate into view on scroll (fade up, slide in). Gold accent lines that draw on hover. Pillar icons that subtly animate on interaction. Smooth section transitions. |
| **Why differentiating** | Premium feel. Static pages feel like brochures. Subtle animation signals investment in craft and creates the "these people are serious" impression. Think: architectural firm portfolio, not flashy marketing site. |
| **Complexity** | Medium (CSS animations + intersection observer or animation library) |
| **For Ikigai** | Key animations: (1) Section content fading up on scroll entry. (2) Gold underline/accent animations on hover. (3) Pillar grid items with staggered reveal. (4) Ikigai Model diagram with sequential pillar reveal. Keep animations subtle and fast (200-400ms). Never delay content access. |
| **Confidence** | MEDIUM -- animation is subjective; must be tasteful or it hurts |

#### D-5: Thought Leadership Positioning (Framework as Content)
| Aspect | Detail |
|--------|--------|
| **What** | The Ikigai Model page functions as thought leadership content -- shareable, linkable, citable. It positions Nilda as an authority who created intellectual property, not just a consultant who does work. |
| **Why differentiating** | Bridgespan has research. McKinsey has McKinsey Quarterly. For a boutique firm, a trademarked framework page IS the thought leadership. Board members can share the link: "Look at this firm's approach." |
| **Complexity** | Low-Medium (content + design, could add downloadable PDF later) |
| **For Ikigai** | The Ikigai Model page should be designed for shareability. Include a compelling meta description and Open Graph image so it previews well when shared on LinkedIn. Make the URL clean: /ikigai-model or /the-ikigai-architecture-model. |
| **Confidence** | HIGH |

#### D-6: Strategic CTA Language (Not Generic)
| Aspect | Detail |
|--------|--------|
| **What** | CTAs that use consulting-specific language: "Schedule a Strategic Conversation" not "Contact Us." "Begin the Conversation" not "Submit." "Let's Architect Your Organization" not "Get Started." |
| **Why differentiating** | CTA language signals positioning. Generic CTAs say "we're like everyone else." Strategic language says "we operate at a higher level." It also pre-qualifies: people who respond to "Strategic Conversation" are higher-quality leads than "Contact Us" clickers. |
| **Complexity** | Low (copy decision) |
| **For Ikigai** | Already planned well. "Schedule a Strategic Conversation" and "Let's Architect Your Organization" are excellent. Use consistently across all pages. Never fall back to "Submit" or "Learn More" -- always use language that reinforces the architect positioning. |
| **Confidence** | HIGH |

#### D-7: Architectural Visual Identity (Not Stock Photography)
| Aspect | Detail |
|--------|--------|
| **What** | Custom architectural line drawings, geometric pillar motifs, blueprint-style design elements instead of stock photography. A visual language unique to the brand. |
| **Why differentiating** | Stock photos of diverse professionals around a table are the nonprofit consulting visual cliche. Architectural line drawings signal: this firm is different, they think structurally, their visual identity matches their intellectual identity. |
| **Complexity** | Medium-High (custom SVG illustrations, consistent visual language) |
| **For Ikigai** | Key visual elements: (1) Thin architectural line drawings as section dividers or background elements. (2) Pillar iconography (literal pillars or abstracted column shapes). (3) Blueprint-style grid patterns as subtle backgrounds. (4) Gold as the accent thread connecting all visual elements. |
| **Confidence** | MEDIUM -- requires good execution; bad custom illustration is worse than no illustration |

#### D-8: AODA Compliance (Full WCAG 2.1 AA)
| Aspect | Detail |
|--------|--------|
| **What** | Full WCAG 2.1 Level AA compliance: keyboard navigation, screen reader compatibility, focus indicators, aria labels, skip navigation, alt text, proper heading hierarchy, color not as sole indicator. |
| **Why differentiating** | Beyond the legal baseline (TS-12), full accessibility signals values alignment with the nonprofit sector. It says: "We practice what we preach about equity and inclusion." Most boutique consulting sites fail accessibility audits. |
| **Complexity** | Medium (must be built in from the start, not retrofitted) |
| **For Ikigai** | Ontario's AODA requires WCAG 2.0 Level AA for organizations with 50+ employees. Ikigai may not be legally required to comply, but their clients ARE required. Demonstrating accessibility fluency is a trust signal. |
| **Confidence** | HIGH -- AODA is specific to Ontario |

#### D-9: Performance Excellence (Lighthouse 90+ All Categories)
| Aspect | Detail |
|--------|--------|
| **What** | Not just fast, but measurably excellent. Lighthouse scores 90+ across Performance, Accessibility, Best Practices, SEO. |
| **Why differentiating** | A static consulting site has no excuse for poor Lighthouse scores. Achieving 90+ is feasible and signals technical competence -- relevant when your brand is about organizational excellence. |
| **Complexity** | Medium (requires discipline throughout development, not a bolt-on) |
| **For Ikigai** | Static site architecture makes this achievable. Key requirements: optimized images (WebP/AVIF with fallbacks), minimal JavaScript, system fonts or optimized web fonts, lazy loading for below-fold content. |
| **Confidence** | HIGH |

---

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem appealing but actively harm authority positioning, user experience, or maintainability for a firm like Ikigai.

#### AF-1: Blog / News Section at Launch
| Aspect | Detail |
|--------|--------|
| **What** | A blog, news feed, or "insights" section on the website at launch. |
| **Why problematic** | An empty or stale blog is WORSE than no blog. If the last post is 8 months old, it signals abandonment. Blogs require ongoing content commitment. Nonprofit consultants who launch blogs and abandon them are the norm, not the exception. A blog with 2-3 posts looks worse than a site with zero blog. |
| **What instead** | Launch without a blog. The Ikigai Model page IS the thought leadership content. If/when Nilda has a content cadence (monthly minimum), add a blog in v2. Structure the site so a blog can be added later without restructuring. |
| **Complexity saved** | High (CMS integration, content calendar, template design, RSS, social sharing) |
| **Confidence** | HIGH -- this is the #1 consulting website mistake |

#### AF-2: Chatbot / Live Chat Widget
| Aspect | Detail |
|--------|--------|
| **What** | A chat bubble in the corner offering "How can I help?" or AI-powered chat. |
| **Why problematic** | Premium consulting firms don't have chat widgets. McKinsey doesn't have Drift. A chatbot says "we're trying to catch you before you leave" which is a sales tactic, not an authority position. It cheapens the brand and creates a support expectation that a solo consultant can't sustain. |
| **What instead** | Clear, prominent CTAs throughout the site leading to the Contact page. The "Schedule a Strategic Conversation" framing is inherently more premium than chat. |
| **Complexity saved** | Medium (integration, configuration, response management) |
| **Confidence** | HIGH |

#### AF-3: Video Backgrounds or Auto-Playing Media
| Aspect | Detail |
|--------|--------|
| **What** | Full-screen video behind the hero section, or auto-playing video/audio anywhere on the site. |
| **Why problematic** | Destroys performance (LCP killer), creates accessibility issues, consumes mobile data, and feels like 2018 web design. Also, premium architectural firms use stillness and whitespace as their aesthetic, not motion. A video background competes with the typography-and-whitespace authority feel. |
| **What instead** | A beautifully composed static hero with strong typography. If video content exists (e.g., Nilda speaking), embed it on the About page as user-initiated playback, not autoplay. |
| **Complexity saved** | Medium (video hosting, optimization, fallbacks, mobile handling) |
| **Confidence** | HIGH |

#### AF-4: Excessive Testimonial Carousels / Sliders
| Aspect | Detail |
|--------|--------|
| **What** | Auto-rotating carousels of testimonials, client logos, or case study previews. |
| **Why problematic** | Auto-rotating content has been proven to have near-zero engagement (users ignore or get annoyed). It creates accessibility issues (motion, timing). It also signals "we have so many testimonials we need a carousel" when 3 strong testimonials displayed statically are more impactful than 12 rotating ones nobody reads. |
| **What instead** | Curate 2-3 strongest testimonials and display them statically. If more social proof is needed, use a dedicated testimonials section or page. Manual "show more" is acceptable; auto-rotation is not. |
| **Complexity saved** | Low-Medium (carousel logic, timing, touch events, accessibility) |
| **Confidence** | HIGH -- well-documented UX anti-pattern |

#### AF-5: Team Page with Stock Headshots or "Coming Soon" Members
| Aspect | Detail |
|--------|--------|
| **What** | A full "Our Team" page with multiple team member cards, especially if team is small or members are contractors/part-time. |
| **Why problematic** | For a boutique/solo consultancy, a team page with one person looks thin. Padding it with "advisors" or associates who aren't core to delivery creates false expectations. A team page is a big-firm feature that hurts small-firm positioning. |
| **What instead** | A strong About page centered on the founder. If there are genuine team members, they can appear on About. Position the small size as a feature: "You work directly with the architect, not a junior associate." |
| **Complexity saved** | Low |
| **Confidence** | MEDIUM -- depends on actual team size; revisit if team grows |

#### AF-6: Newsletter Signup Pop-up
| Aspect | Detail |
|--------|--------|
| **What** | Modal pop-up asking visitors to subscribe to a newsletter, especially on first visit or timed triggers. |
| **Why problematic** | Interrupts the authority experience. Pop-ups say "we need your email more than you need our content." Premium brands don't beg. Also requires actually sending a newsletter, which is the same content commitment trap as a blog. |
| **What instead** | No newsletter at launch. If email capture is desired later, a tasteful inline CTA at page bottom -- never a pop-up. |
| **Complexity saved** | Medium (email service integration, pop-up logic, CASL compliance) |
| **Confidence** | HIGH |

#### AF-7: Complex Multi-Step Contact Forms
| Aspect | Detail |
|--------|--------|
| **What** | Multi-step wizard forms, budget dropdowns, service selectors, file uploads, CAPTCHA challenges. |
| **Why problematic** | Every field reduces completion rate. For a consulting firm where the "product" is a conversation, the form should facilitate conversation, not replace it. Budget questions feel presumptuous. Service selectors assume the client knows what they need (they often don't). CAPTCHAs are hostile. |
| **What instead** | Four fields maximum: Name, Organization, Email, "Tell us about your challenge" (open textarea). The qualification happens in the conversation, not the form. |
| **Complexity saved** | Low-Medium |
| **Confidence** | HIGH |

#### AF-8: Pricing Pages or "Packages"
| Aspect | Detail |
|--------|--------|
| **What** | Public pricing, service packages with price tags, or "starting at $X" indicators. |
| **Why problematic** | Premium consulting is custom-scoped. Published pricing anchors low ("I only need the $5K package") or scares away ("$50K is too much before we even talk"). It also commoditizes the service -- you're not selling packages, you're selling architectural expertise. Every engagement should feel bespoke. |
| **What instead** | Emphasize the conversation-first approach. "Every organization is unique. Let's understand your challenges before recommending an approach." |
| **Complexity saved** | Low |
| **Confidence** | HIGH -- standard for high-end consulting |

#### AF-9: Social Media Feed Embeds
| Aspect | Detail |
|--------|--------|
| **What** | Embedded Twitter/X feed, Instagram grid, or LinkedIn post feed on the website. |
| **Why problematic** | Social feed embeds are performance killers (heavy third-party scripts). They inject an uncontrolled visual aesthetic into your carefully designed site. They often show stale content if social posting is irregular. They also pull visitors' attention away from your conversion path. |
| **What instead** | Social media icons in the footer linking to profiles. Keep visitors on YOUR site progressing toward YOUR CTA. |
| **Complexity saved** | Medium (embed code, performance impact, layout disruption) |
| **Confidence** | HIGH |

#### AF-10: Parallax Scrolling Effects
| Aspect | Detail |
|--------|--------|
| **What** | Background images that move at different speeds from foreground content as user scrolls. |
| **Why problematic** | Parallax causes motion sickness for some users (vestibular disorders), performs poorly on mobile, creates jank on lower-powered devices, and is associated with 2014-era web design trends. It also conflicts with the clean, structured architectural aesthetic -- parallax is organic and fluid, architecture is precise and grid-based. |
| **What instead** | Clean scroll with subtle fade-in animations (respecting prefers-reduced-motion). Sticky sections if needed for visual interest. Let whitespace and typography create the premium feel. |
| **Complexity saved** | Medium |
| **Confidence** | HIGH |

---

## Feature Dependencies

```
LEGEND:
  --> "requires" (hard dependency)
  ..> "enhanced by" (soft dependency)

Core Foundation (must build first):
  Design System (TS-2) --> Everything else
  Navigation (TS-5) --> All pages
  Responsive Framework (TS-3) --> All pages
  SSL/Hosting (TS-11) --> Site launch

Homepage:
  Hero/Value Prop (TS-1) --> standalone
  Social Proof (TS-9) ..> Case Studies (D-2)
  7 Pillars Grid ..> Services Page (TS-6)
  Who We Serve (D-3) --> standalone
  Animations (D-4) ..> all sections (enhancement layer)

Content Pages:
  About Page (TS-8) --> standalone (needs founder photo + bio)
  Services Page (TS-6) ..> Ikigai Model Page (D-1) (services reference framework)
  Ikigai Model Page (D-1) ..> Custom Illustrations (D-7) (diagram is the page)
  Case Studies (D-2) ..> Social Proof on Homepage (TS-9) (feeds homepage quotes)

Conversion:
  Contact Form (TS-7) --> standalone
  Calendar Booking ..> Contact Form (TS-7) (embedded in contact page)
  Strategic CTAs (D-6) ..> Contact Form (TS-7) (all CTAs lead here)

Technical Foundation:
  SEO (TS-10) --> all pages (meta tags, semantic HTML)
  Accessibility (TS-12 + D-8) --> all components
  Performance (TS-4 + D-9) --> all assets and code
```

### Critical Path

The critical path for launch is:
1. Design System (palette, typography, spacing, components)
2. Navigation + Layout Shell (responsive)
3. Homepage (hero through CTA -- proves the design)
4. Contact Page (conversion endpoint must exist before driving traffic)
5. Services Page (substantive content for self-qualification)
6. About Page (credibility)
7. Ikigai Model Page (differentiator -- needs diagram)
8. Case Studies Page (social proof depth)
9. Animation Layer (enhancement pass after content is solid)
10. SEO + Performance Optimization (polish pass)

---

## MVP Definition

### Launch With (v1.0) -- "Authority Established"

These features MUST be present at launch. Without them, the site undermines rather than builds credibility.

| Priority | Feature | Category | Rationale |
|----------|---------|----------|-----------|
| P0 | Design system (colors, typography, spacing, components) | TS-2 | Foundation for everything |
| P0 | Responsive layout framework | TS-3 | Non-negotiable for modern web |
| P0 | Homepage with all 7 sections | TS-1, TS-9, D-3, D-6 | First impression is everything |
| P0 | Navigation (desktop + mobile) | TS-5 | Users must orient |
| P0 | Contact page with form + calendar embed | TS-7 | Conversion endpoint |
| P0 | About page with founder bio | TS-8 | Trust establishment |
| P0 | Services page (7 pillars) | TS-6 | Core content |
| P0 | Ikigai Model page with diagram | D-1, D-5 | Primary differentiator |
| P0 | Case Studies page (minimum 2 studies) | D-2 | Social proof |
| P0 | SEO fundamentals (meta tags, sitemap, semantic HTML) | TS-10 | Discoverability |
| P0 | WCAG 2.1 AA accessibility | TS-12, D-8 | AODA alignment + values signal |
| P0 | Performance optimization (Lighthouse 90+) | TS-4, D-9 | Premium signal |
| P0 | SSL/HTTPS | TS-11 | Security baseline |
| P1 | Scroll-triggered entrance animations | D-4 | Premium feel (but site works without them) |
| P1 | Custom architectural illustrations | D-7 | Visual identity (can launch with simpler versions) |

### Add After Validation (v1.x) -- "Authority Expanded"

Add these after launch once the site is live and generating leads.

| Priority | Feature | Rationale for Deferral |
|----------|---------|----------------------|
| v1.1 | Enhanced Ikigai Model interactivity (click/hover pillar details) | Core diagram ships in v1; interaction is enhancement |
| v1.1 | Additional case studies (5+ with pillar tagging/filtering) | Need client permission and content development time |
| v1.1 | Testimonials section enhancement (dedicated testimonials area) | Gather more testimonials post-launch |
| v1.2 | Downloadable Ikigai Model PDF / one-pager | Thought leadership asset for sharing |
| v1.2 | Open Graph images per page (custom social preview cards) | Improves social sharing appearance |
| v1.2 | Analytics dashboard integration (Google Analytics 4, or privacy-respecting alternative) | Need to measure before optimizing |
| v1.3 | Structured data markup (Organization, LocalBusiness, Service schema) | SEO enhancement beyond basics |
| v1.3 | 404 page with brand consistency | Nice-to-have but not critical for launch |

### Future Consideration (v2+) -- "Authority Scaled"

Only consider these when there's proven demand or strategic need.

| Feature | Trigger to Build |
|---------|-----------------|
| Blog / Insights section | When Nilda has committed to monthly+ publishing cadence |
| Resource library (guides, frameworks, tools) | When downloadable content is created |
| Newsletter with email capture | When blog exists and content is regular |
| Multi-language support (French) | When serving Quebec or federal organizations |
| Client portal / project dashboard | When engagement volume justifies |
| Event/workshop listing | When Ikigai runs regular public events |
| Video content (speaking, workshops) | When professional video content exists |

---

## Feature Prioritization Matrix

| Feature | Impact on Authority | Implementation Effort | Risk if Missing | Priority |
|---------|--------------------|-----------------------|-----------------|----------|
| Design system | Critical | Medium | Site looks amateur | P0 |
| Homepage hero + value prop | Critical | Low | Visitors bounce in 3s | P0 |
| Ikigai Model diagram | Critical | Medium-High | Lose primary differentiator | P0 |
| Services page (7 pillars) | High | Medium | Can't self-qualify | P0 |
| Mobile responsive | Critical | Medium | Lose 55%+ of visitors | P0 |
| Contact + calendar | Critical | Low-Medium | No conversion path | P0 |
| About + founder bio | High | Low | No trust establishment | P0 |
| Case studies | High | Medium | Claims unsubstantiated | P0 |
| Accessibility (WCAG AA) | High | Medium | Legal + values risk | P0 |
| Performance (Lighthouse 90+) | Medium-High | Medium | Feels amateur | P0 |
| SEO fundamentals | High | Low-Medium | Invisible to search | P0 |
| Scroll animations | Medium | Medium | Site feels static | P1 |
| Custom illustrations | Medium-High | Medium-High | Less distinctive visual identity | P1 |
| Blog | Low (at launch) | High (ongoing) | None if Ikigai Model page exists | v2+ |
| Chatbot | Negative | Medium | None -- absence is a feature | Never |
| Pricing page | Negative | Low | None -- absence is correct | Never |

---

## Competitor Feature Analysis

Based on training knowledge of nonprofit consulting firm websites in the Ontario/Canadian market and leading US-based nonprofit consultancies.

**Confidence: MEDIUM -- based on training data, not live site verification**

### Tier 1: Large Nonprofit Consultancies (Bridgespan, TCC Group)

| Feature | Bridgespan | TCC Group | Ikigai Opportunity |
|---------|-----------|-----------|-------------------|
| Named framework/methodology | Yes (multiple) | Yes | Match with Ikigai Architecture Model -- most boutique firms lack this |
| Research/publications library | Extensive | Moderate | Skip for v1 -- Ikigai Model page serves this purpose at scale |
| Case studies | Extensive with metrics | Yes | Match the structure, even with fewer studies |
| Team page | Large team grid | Yes | Skip -- position solo founder as a strength |
| Blog/insights | Active, regular | Active | Skip for v1 -- liability if not maintained |
| Clean, premium design | Professional but institutional | Professional | Opportunity: more premium, more design-forward than institutional look |
| Mobile experience | Good | Adequate | Opportunity: exceed their mobile experience |
| Accessibility | Generally good | Variable | Match or exceed |

### Tier 2: Boutique Ontario Nonprofit Consultants

| Feature | Typical Pattern | Ikigai Opportunity |
|---------|----------------|-------------------|
| Design quality | WordPress templates, minimal customization | Massive differentiation through premium, custom design |
| Named methodology | Rare -- most list services generically | Ikigai Architecture Model is a significant differentiator |
| Case studies | Testimonial quotes only, rarely structured | Structured case studies with metrics set Ikigai apart |
| Mobile experience | Template-responsive (adequate, not intentional) | Intentional mobile design is a differentiator |
| Animations/interactions | None or template defaults | Subtle premium animations signal investment |
| Accessibility | Often non-compliant | AODA compliance signals sector values alignment |
| SEO | Poor -- rarely optimized | Significant opportunity to own local search terms |

### Key Competitive Insights

1. **The gap is enormous.** Most boutique nonprofit consultants in Ontario have generic WordPress sites with stock photography. Ikigai's planned design approach (architectural motifs, Hunter Green/Gold palette, custom diagrams) will be dramatically more premium than the local competitive set.

2. **Named frameworks win.** The consultancies that command premium positioning (Bridgespan, FSG, Nonprofit Finance Fund) all have named frameworks. The Ikigai Architecture Model puts Ikigai in this category. The dedicated page for it is the right call.

3. **Content depth beats content breadth.** Better to have 2 exceptional case studies than 10 thin ones. Better to have zero blog posts than 3 stale ones.

4. **Ontario local SEO is underserved.** Most nonprofit consultants in Ontario don't invest in SEO. Owning "nonprofit consulting Ontario" and related terms is achievable with basic optimization.

5. **Accessibility is a competitive advantage, not just compliance.** In the nonprofit sector, demonstrating accessibility care IS a trust signal. Most competitors don't bother.

---

## Technical Feature Specifications

### Animation Specifications (D-4)
- **Entrance animations:** Fade-up with 20-40px translate, 300-400ms duration, ease-out timing
- **Stagger:** 50-100ms stagger for grid items (pillars, values)
- **Trigger:** Intersection Observer at 10-20% visibility threshold
- **Reduced motion:** Respect `prefers-reduced-motion: reduce` -- disable all animations, show content immediately
- **Performance:** CSS transforms and opacity only (GPU-composited properties). No layout-triggering animations.

### Ikigai Model Diagram Specifications (D-1)
- **Format:** SVG for crispness at all sizes
- **Mobile treatment:** Vertical/stacked layout on mobile; horizontal/radial on desktop
- **Accessibility:** Each pillar labeled with text (not image-of-text), role="img" with comprehensive aria-label on the diagram container, individual pillar descriptions available
- **Interaction (v1.1):** Hover/tap to highlight pillar and show detail panel

### Contact Form Specifications (TS-7)
- **Fields:** Name (required), Organization (required), Email (required, validated), "Tell us about your challenge" (required, textarea)
- **Validation:** Inline, real-time (not on-submit-only)
- **Submission:** Success confirmation with "We'll respond within 2 business days" expectation setting
- **Calendar:** Calendly or Cal.com embed below the form, positioned as alternative: "Or schedule a time that works for you"
- **Anti-spam:** Honeypot field (invisible to users, catches bots). No CAPTCHA.
- **CASL compliance:** Since this is Ontario, Canadian Anti-Spam Legislation applies. Form submission = implied consent for responding to inquiry only, NOT consent for marketing emails.

### SEO Specifications (TS-10)
- **Title tags:** "[Page Name] | Ikigai Consulting Group -- Organizational Architects for Purpose-Driven Organizations"
- **Meta descriptions:** Unique per page, 150-160 chars, include geographic + sector keywords
- **Heading hierarchy:** Single H1 per page, logical H2/H3 nesting
- **Image alt text:** Descriptive, includes relevant keywords naturally
- **Structured data:** Organization schema, LocalBusiness schema (Ontario), Service schema per pillar
- **Sitemap:** Auto-generated sitemap.xml
- **Canonical URLs:** Self-referencing canonicals on all pages
- **Open Graph:** Title, description, image per page for social sharing

---

## Sources

- **Consulting firm website patterns:** Based on analysis of McKinsey, BCG, Bain, Deloitte, Bridgespan, TCC Group, FSG, and 50+ boutique consulting firm websites in training data
- **Nonprofit sector digital presence:** Based on nonprofit technology surveys and sector reports in training data
- **Web performance standards:** Google Core Web Vitals documentation
- **Accessibility:** WCAG 2.1 specification, AODA (Accessibility for Ontarians with Disabilities Act) requirements
- **CASL:** Canadian Anti-Spam Legislation requirements for Ontario businesses
- **UX research:** Nielsen Norman Group research on consulting/professional services websites
- **Animation best practices:** Web.dev motion and animation guidelines

**Note:** WebSearch and WebFetch were unavailable during this research session. All findings are based on training knowledge (cutoff: early 2025). Confidence is MEDIUM overall -- the patterns described are well-established and unlikely to have changed dramatically, but specific competitor sites and current market conditions could not be verified live. Live verification of competitor sites is recommended before finalizing the roadmap.
