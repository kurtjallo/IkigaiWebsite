export default function Home() {
  return (
    <main>
      {/* Section 1: White background -- Typography proof */}
      <section className="bg-white px-6 py-section">
        <div className="mx-auto max-w-container-content">
          <h1 className="text-h1 text-neutral-900">
            Ikigai Consulting Group
          </h1>
          <p className="mt-4 max-w-container-narrow text-body-lg text-neutral-600">
            Organizational Architects for Purpose-Driven Organizations.
            This paragraph renders in Inter (font-sans) at body-lg size (1.125rem)
            with relaxed line-height. Headings above render in Playfair Display
            (font-serif).
          </p>
        </div>
      </section>

      {/* Gold divider line */}
      <div className="mx-auto max-w-container-content px-6">
        <hr className="border-t-2 border-gold" />
      </div>

      {/* Section 2: Hunter Green background -- Color proof */}
      <section className="bg-hunter-green px-6 py-section">
        <div className="mx-auto max-w-container-content">
          <h2 className="text-h2 text-white">
            Architecting Purpose-Driven Organizations to Thrive
          </h2>
          <p className="mt-4 max-w-container-narrow text-body text-hunter-green-100">
            This section proves hunter green (#355E3B) renders as a section
            background. White text on hunter green provides strong contrast.
            Gold accents appear as decorative elements -- never as text on
            light backgrounds.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block rounded bg-gold px-8 py-3 text-h4 font-semibold text-black transition-colors hover:bg-gold-500"
            >
              Schedule a Strategic Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Light green (secondary) background -- Alternation proof */}
      <section className="bg-hunter-green-50 px-6 py-section">
        <div className="mx-auto max-w-container-content">
          <h2 className="text-h2 text-neutral-900">
            Design Token Proof
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Color swatches */}
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="mb-3 h-16 w-full rounded bg-hunter-green" />
              <h3 className="text-h4 text-neutral-900">Hunter Green</h3>
              <p className="text-sm text-neutral-500">#355E3B</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="mb-3 h-16 w-full rounded bg-gold" />
              <h3 className="text-h4 text-neutral-900">Gold</h3>
              <p className="text-sm text-neutral-500">#D4A843</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="mb-3 h-16 w-full rounded bg-black" />
              <h3 className="text-h4 text-neutral-900">Black</h3>
              <p className="text-sm text-neutral-500">#000000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: White background -- Type scale proof */}
      <section className="bg-white px-6 py-section">
        <div className="mx-auto max-w-container-content">
          <h2 className="text-h2 text-neutral-900">Type Scale</h2>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm text-neutral-400">display (4.5rem)</p>
              <p className="text-display text-neutral-900">Display Heading</p>
            </div>
            <div>
              <p className="text-sm text-neutral-400">h1 (3.5rem)</p>
              <p className="text-h1 text-neutral-900">Heading One</p>
            </div>
            <div>
              <p className="text-sm text-neutral-400">h2 (2.5rem)</p>
              <p className="text-h2 text-neutral-900">Heading Two</p>
            </div>
            <div>
              <p className="text-sm text-neutral-400">h3 (1.75rem)</p>
              <p className="text-h3 text-neutral-900">Heading Three</p>
            </div>
            <div>
              <p className="text-sm text-neutral-400">h4 (1.25rem)</p>
              <p className="text-h4 text-neutral-900">Heading Four</p>
            </div>
            <div>
              <p className="text-sm text-neutral-400">body-lg (1.125rem)</p>
              <p className="text-body-lg text-neutral-700">
                Body large text for introductory paragraphs and lead copy.
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-400">body (1rem / 16px)</p>
              <p className="text-body text-neutral-700">
                Standard body text at 16px base size. This confirms A11Y-07
                minimum body text size. Line height is 1.7 for comfortable
                reading.
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-400">sm (0.875rem)</p>
              <p className="text-sm text-neutral-500">
                Small text for captions, labels, and metadata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="mx-auto max-w-container-content px-6">
        <hr className="border-t-2 border-gold" />
      </div>

      {/* Section 5: Spacing proof */}
      <section className="bg-white px-6 py-section">
        <div className="mx-auto max-w-container-narrow text-center">
          <h2 className="text-h2 text-neutral-900">
            Generous White Space
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600">
            Each section has 6rem (96px) vertical padding via the section
            spacing token. This page demonstrates the premium, elevated feel
            that comes from intentional white space.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block rounded bg-gold px-8 py-3 text-h4 font-semibold text-black transition-colors hover:bg-gold-500"
            >
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
