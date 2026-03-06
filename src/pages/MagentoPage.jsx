import { ArrowRight, CheckCircle2, LayoutPanelTop, ShieldCheck } from 'lucide-react'

const issueCards = [
  {
    icon: LayoutPanelTop,
    title: 'Centered mobile container',
    body: 'The hero now sits inside a fixed max-width wrapper with even side padding, which removes the one-sided spacing bug from the live Magento layout.',
  },
  {
    icon: ShieldCheck,
    title: 'No horizontal overflow',
    body: 'The page uses overflow-safe sections and controlled text widths so long headings and CTA rows do not push content off-screen.',
  },
  {
    icon: CheckCircle2,
    title: 'Cleaner CTA hierarchy',
    body: 'Primary and secondary actions are stacked clearly on mobile, matching the real Adobe Commerce page direction without breaking alignment.',
  },
]

const capabilityPoints = [
  'Multi-store and multi-brand architecture',
  'B2B workflows, account hierarchies, and pricing logic',
  'ERP, OMS, CRM, and inventory system integrations',
  'Migration, optimization, and growth support for Adobe Commerce',
]

const MagentoPage = () => {
  return (
    <div className="bg-[#f4f4f5] pb-16 text-slate-950">
      <section className="relative overflow-x-clip border-b border-slate-200 bg-[linear-gradient(180deg,#eef2ff_0%,#f5f7fb_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-[linear-gradient(90deg,rgba(148,163,184,0.14),transparent)] sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-[linear-gradient(270deg,rgba(148,163,184,0.14),transparent)] sm:w-24" />

        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-5xl flex-col items-center justify-center overflow-hidden px-0 text-center">
          <span className="inline-flex max-w-full items-center rounded-full bg-blue-100 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.16em] text-blue-700 sm:text-xs">
            Adobe Commerce / Magento Specialists
          </span>

          <h1 className="mt-8 max-w-4xl text-balance text-[2.8rem] font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
            Enterprise Commerce
            <br />
            <span className="italic">Without Compromise</span>
          </h1>

          <p className="mt-7 max-w-3xl text-xl font-black leading-8 text-blue-700 sm:text-2xl sm:leading-9">
            Multi-Store. B2B. High-Volume. Adobe Commerce built right.
          </p>

          <div className="mt-7 max-w-4xl space-y-4 text-lg leading-9 text-slate-600 sm:text-[1.35rem]">
            <p>
              When your e-commerce operation outgrows Shopify and WooCommerce, when you have multiple brands, B2B
              account hierarchies, complex catalog structures, and systems that need to talk to your store in real
              time, Magento / Adobe Commerce is where you land.
            </p>
            <p>
              We have built, migrated, and optimized enterprise Adobe Commerce deployments processing high-value
              transactions with fewer bottlenecks and cleaner customer journeys.
            </p>
          </div>

          <div className="mt-12 flex w-full max-w-2xl flex-col items-center gap-4">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-lime-400 px-6 py-5 text-center text-xl font-black text-slate-950 shadow-[0_20px_50px_rgba(163,230,53,0.32)] transition hover:bg-lime-300"
            >
              Start an Enterprise Commerce Conversation
            </a>
            <a
              href="#capabilities"
              className="inline-flex min-h-16 w-full items-center justify-center rounded-full border-2 border-slate-800 bg-white px-6 py-4 text-center text-xl font-black text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
            >
              See Our Capabilities
            </a>
          </div>

          <div className="mt-2 flex flex-col items-center text-blue-500">
            <p className="text-xs font-black uppercase tracking-[0.34em]">Scroll To Explore</p>
            <span className="mt-4 h-10 w-px bg-blue-500" />
          </div>
        </div>
      </section>

      <section id="capabilities" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.06)]">
            <div className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              <span className="h-px w-10 bg-blue-700" />
              Magento Focus
            </div>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Built for complex commerce operations
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              This version keeps the same visual tone as RF Studio, but the layout is constrained correctly on mobile
              so headings, body text, and buttons stay centered instead of drifting against one edge.
            </p>

            <ul className="mt-8 space-y-4">
              {capabilityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-lg leading-8 text-slate-700">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {issueCards.map((card) => {
              const Icon = card.icon

              return (
                <article key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{card.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pt-2 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-[2rem] bg-[#1644f4] px-6 py-8 text-white shadow-[0_28px_70px_rgba(29,78,216,0.24)] sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-200">Adobe Commerce Support</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Need a Magento build that scales without layout and UX friction?
            </h2>
          </div>
          <a
            href="mailto:hello@rfstudio.co"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-4 text-lg font-black text-slate-950"
          >
            hello@rfstudio.co
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default MagentoPage
