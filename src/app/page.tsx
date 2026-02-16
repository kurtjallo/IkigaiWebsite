import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Divider } from '@/components/ui/divider'
import { Container } from '@/components/ui/container'

const hunterGreenPalette = [
  { shade: '50', hex: '#F0F5F1', className: 'bg-hunter-green-50' },
  { shade: '100', hex: '#D4E2D6', className: 'bg-hunter-green-100' },
  { shade: '200', hex: '#A8C5AD', className: 'bg-hunter-green-200' },
  { shade: '300', hex: '#7DA884', className: 'bg-hunter-green-300' },
  { shade: '400', hex: '#517B57', className: 'bg-hunter-green-400' },
  { shade: '500', hex: '#355E3B', className: 'bg-hunter-green-500' },
  { shade: '600', hex: '#2A4B2F', className: 'bg-hunter-green-600' },
  { shade: '700', hex: '#1F3823', className: 'bg-hunter-green-700' },
  { shade: '800', hex: '#152618', className: 'bg-hunter-green-800' },
  { shade: '900', hex: '#0A130C', className: 'bg-hunter-green-900' },
]

const goldPalette = [
  { shade: '50', hex: '#FBF6EC', className: 'bg-gold-50' },
  { shade: '100', hex: '#F5E9CC', className: 'bg-gold-100' },
  { shade: '200', hex: '#EBD399', className: 'bg-gold-200' },
  { shade: '300', hex: '#E1BD66', className: 'bg-gold-300' },
  { shade: '400', hex: '#D4A843', className: 'bg-gold-400' },
  { shade: '500', hex: '#B8902E', className: 'bg-gold-500' },
  { shade: '600', hex: '#937324', className: 'bg-gold-600' },
  { shade: '700', hex: '#6E561B', className: 'bg-gold-700' },
  { shade: '800', hex: '#493A12', className: 'bg-gold-800' },
  { shade: '900', hex: '#241D09', className: 'bg-gold-900' },
]

function ColorSwatch({
  shade,
  hex,
  className,
  dark,
}: {
  shade: string
  hex: string
  className: string
  dark: boolean
}) {
  return (
    <div className="text-center">
      <div
        className={`${className} mx-auto h-16 w-16 rounded-sm shadow-sm`}
      />
      <p className={`mt-2 font-mono text-sm ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>
        {shade}
      </p>
      <p className={`font-mono text-sm ${dark ? 'text-neutral-500' : 'text-neutral-400'}`}>
        {hex}
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* ============================================================= */}
      {/* 1. TYPOGRAPHY SECTION -- White background                      */}
      {/* ============================================================= */}
      <Section background="white">
        <SectionHeading
          heading="Design System"
          tagline="Phase 1 Complete"
          description="Ikigai Consulting Group UI primitives, design tokens, and component showcase. Every element on this page is rendered using the shared design system."
          headingAs="h1"
        />

        <div className="mt-12 space-y-8">
          <div>
            <p className="text-sm text-neutral-400">display -- 4.5rem / Playfair Display</p>
            <p className="font-serif text-display text-neutral-900">Display Heading</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">h1 -- 3.5rem / Playfair Display</p>
            <p className="font-serif text-h1 text-neutral-900">Heading One</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">h2 -- 2.5rem / Playfair Display</p>
            <p className="font-serif text-h2 text-neutral-900">Heading Two</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">h3 -- 1.75rem / Playfair Display</p>
            <p className="font-serif text-h3 text-neutral-900">Heading Three</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">h4 -- 1.25rem / Playfair Display</p>
            <p className="font-serif text-h4 text-neutral-900">Heading Four</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">body-lg -- 1.125rem / Inter</p>
            <p className="text-body-lg text-neutral-700">
              Body large text for introductory paragraphs and lead copy. Renders in Inter at
              1.125rem with 1.7 line-height for comfortable reading.
            </p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">body -- 1rem (16px) / Inter</p>
            <p className="text-body text-neutral-700">
              Standard body text at 16px base size. This meets the accessibility requirement
              for minimum body text size. Line height is 1.7 for comfortable reading across
              all screen sizes.
            </p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">sm -- 0.875rem / Inter</p>
            <p className="text-sm text-neutral-500">
              Small text for captions, labels, and metadata.
            </p>
          </div>
        </div>
      </Section>

      {/* Divider between sections */}
      <Container>
        <Divider />
      </Container>

      {/* ============================================================= */}
      {/* 2. COLOR PALETTE SECTION -- Light green background             */}
      {/* ============================================================= */}
      <Section background="light-green">
        <SectionHeading
          heading="Color Palette"
          tagline="Brand Colors"
          description="Hunter Green and Gold form the primary palette. Gold is decorative only -- never used as text on light backgrounds."
        />

        <div className="mt-12">
          <h3 className="font-serif text-h3 text-neutral-900">Hunter Green</h3>
          <div className="mt-4 grid grid-cols-5 gap-4 md:grid-cols-10">
            {hunterGreenPalette.map((color) => (
              <ColorSwatch key={color.shade} {...color} dark={false} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-h3 text-neutral-900">Gold</h3>
          <div className="mt-4 grid grid-cols-5 gap-4 md:grid-cols-10">
            {goldPalette.map((color) => (
              <ColorSwatch key={color.shade} {...color} dark={false} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex gap-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-sm bg-black shadow-sm" />
            <p className="mt-2 font-mono text-sm text-neutral-500">Black</p>
            <p className="font-mono text-sm text-neutral-400">#000000</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-sm border border-neutral-200 bg-white shadow-sm" />
            <p className="mt-2 font-mono text-sm text-neutral-500">White</p>
            <p className="font-mono text-sm text-neutral-400">#FFFFFF</p>
          </div>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* 3. BUTTONS ON LIGHT BACKGROUND -- White background             */}
      {/* ============================================================= */}
      <Section background="white">
        <SectionHeading
          heading="Buttons"
          tagline="Interactive Elements"
          description="The gold variant is the primary CTA. Black text on gold background ensures strong contrast on any background."
        />

        <div className="mt-12">
          <h3 className="mb-6 font-serif text-h3 text-neutral-900">
            Gold Variant (all sizes)
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 font-serif text-h3 text-neutral-900">
            Button as Link
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#buttons">Link Button (gold)</Button>
            <Button href="#buttons" size="lg">
              Large Link Button
            </Button>
          </div>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* 4. BUTTONS ON DARK BACKGROUND -- Hunter green background       */}
      {/* ============================================================= */}
      <Section background="hunter-green">
        <SectionHeading
          heading="Buttons on Dark Backgrounds"
          tagline="Contrast Verified"
          description="Outline and ghost variants use gold text, which meets WCAG AA contrast on dark backgrounds."
          dark
        />

        <div className="mt-12">
          <h3 className="mb-6 font-serif text-h3 text-white">
            All Variants on Hunter Green
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="gold">Gold (primary)</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 font-serif text-h3 text-white">
            Size Comparison (outline)
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="sm">Small Outline</Button>
            <Button variant="outline" size="md">Medium Outline</Button>
            <Button variant="outline" size="lg">Large Outline</Button>
          </div>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* 5. CARD GRID -- Light green background                         */}
      {/* ============================================================= */}
      <Section background="light-green">
        <SectionHeading
          heading="Cards"
          tagline="Content Containers"
          description="Cards provide structured containers with subtle shadows. Hover to see the gold accent border."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="font-serif text-h3 text-neutral-900">
              Strategic Architecture
            </h3>
            <Divider className="my-4" />
            <p className="text-body text-neutral-600">
              We design the strategic scaffolding that transforms vision into a
              clear, actionable roadmap. No more plans sitting on shelves.
            </p>
          </Card>

          <Card>
            <h3 className="font-serif text-h3 text-neutral-900">
              Governance Architecture
            </h3>
            <Divider className="my-4" />
            <p className="text-body text-neutral-600">
              We build governance structures that balance oversight with agility,
              ensuring boards and leadership teams work in concert.
            </p>
          </Card>

          <Card>
            <h3 className="font-serif text-h3 text-neutral-900">
              Operational Architecture
            </h3>
            <Divider className="my-4" />
            <p className="text-body text-neutral-600">
              We architect operational systems that create efficiency, reduce
              waste, and align day-to-day work with mission outcomes.
            </p>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-serif text-h4 text-neutral-900">
            Card without hover effect
          </h3>
          <Card hover={false}>
            <p className="text-body text-neutral-600">
              This card has <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm">hover=false</code> -- no gold border on hover, static shadow only.
            </p>
          </Card>
        </div>
      </Section>

      {/* Divider */}
      <Container>
        <Divider />
      </Container>

      {/* ============================================================= */}
      {/* 6. SECTION BACKGROUNDS -- All 4 variants in sequence           */}
      {/* ============================================================= */}
      <Section background="white">
        <SectionHeading
          heading="Section Backgrounds"
          tagline="Visual Rhythm"
          description="Four background options create the alternating rhythm that gives the site its premium, structured feel."
          align="center"
        />
      </Section>

      <Section background="white">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-hunter-green-600">
            Background: White
          </p>
          <p className="mt-2 text-body text-neutral-600">
            Default background. Dark text on white. Used for primary content sections.
          </p>
        </div>
      </Section>

      <Section background="light-green">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-hunter-green-600">
            Background: Light Green
          </p>
          <p className="mt-2 text-body text-neutral-600">
            Hunter green 50 (#F0F5F1). Subtle warmth. Alternates with white sections.
          </p>
        </div>
      </Section>

      <Section background="hunter-green">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Background: Hunter Green
          </p>
          <p className="mt-2 text-body text-hunter-green-100">
            Primary brand color (#355E3B). White text. Gold accents are safe here.
          </p>
        </div>
      </Section>

      <Section background="black">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Background: Black
          </p>
          <p className="mt-2 text-body text-neutral-400">
            Near-black (#0a0a0a). White text. Used sparingly for dramatic emphasis.
          </p>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* 7. SPACING DEMONSTRATION -- White background                   */}
      {/* ============================================================= */}
      <Section background="white">
        <SectionHeading
          heading="Spacing and Layout"
          tagline="Generous White Space"
          description="Each section uses py-16 (4rem) on mobile scaling to py-24 (6rem) on desktop. Content is constrained to a 72rem (1152px) max-width Container. The narrow Container variant constrains to 48rem (768px) for text-heavy content."
          align="center"
        />

        <div className="mt-12 text-center">
          <Button href="#" size="lg">
            Book Your Strategy Call
          </Button>
        </div>

        <div className="mt-16 rounded-sm border-2 border-dashed border-neutral-200 p-8 text-center">
          <p className="text-sm text-neutral-400">
            This dashed border shows the Container boundary (72rem max-width).
            On screens wider than 72rem, content is centered with auto margins.
          </p>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* 8. SECTION HEADING VARIANTS -- Light green background          */}
      {/* ============================================================= */}
      <Section background="light-green">
        <SectionHeading
          heading="SectionHeading Variants"
          tagline="Component Options"
        />

        <div className="mt-12 space-y-16">
          <div className="rounded-sm border border-neutral-200 bg-white p-8">
            <p className="mb-4 text-sm text-neutral-400">Left aligned, with tagline and accent line (default)</p>
            <SectionHeading
              heading="We Are Organizational Architects"
              tagline="Our Approach"
              description="We design the systems that transform purpose into measurable impact."
            />
          </div>

          <div className="rounded-sm border border-neutral-200 bg-white p-8">
            <p className="mb-4 text-sm text-neutral-400">Center aligned, h3, no accent line</p>
            <SectionHeading
              heading="Built for Leaders Who Carry Mission"
              headingAs="h3"
              align="center"
              accentLine={false}
              description="NGOs, social service agencies, faith-based organizations, women-led initiatives, and boards."
            />
          </div>

          <div className="rounded-sm bg-hunter-green p-8">
            <p className="mb-4 text-sm text-gold/60">Dark mode variant (on hunter green)</p>
            <SectionHeading
              heading="Let Us Architect Your Organization"
              tagline="Get Started"
              description="Schedule a strategic conversation to explore how we can strengthen your organization."
              dark
              align="center"
            />
          </div>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* FINAL CTA -- Hunter green background                           */}
      {/* ============================================================= */}
      <Section background="hunter-green">
        <div className="text-center">
          <SectionHeading
            heading="Design System Complete"
            description="All UI primitives are built, styled, and verified. Ready for Phase 2: Layout Chrome (Navigation + Footer)."
            dark
            align="center"
          />
          <div className="mt-8">
            <Button variant="gold" size="lg">
              Phase 1 Verified
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}
