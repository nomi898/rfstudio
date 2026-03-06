import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Layers3,
  Rocket,
  Search,
  Sparkles,
  SquareStack,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router'

const whatWeDoCards = [
  {
    title: 'Digital Experience Studio',
    points: [
      'Custom websites, apps, and digital platforms',
      'E-commerce on Shopify, WooCommerce, Magento',
      'Agentic Commerce and AI-powered solutions',
    ],
    link: 'Explore Digital Experience',
    variant: 'wide',
  },
  {
    title: 'Rank Better (SEO/GEO)',
    points: [
      'Generative Engine Optimization Services (GEO)',
      'Search Engine Optimization services (SEO)',
      'Rank better on ChatGPT, Gemini, Perplexity',
    ],
    link: 'Explore Rank Better',
    variant: 'light',
  },
  {
    title: 'Growth Intelligence Engine',
    points: [
      'More wins per visitor, funnel acceleration',
      'Test, tweak, and optimize every step of your funnel',
      'Maximize Return on Investment',
    ],
    link: 'Explore Growth Engine',
    variant: 'dark',
  },
]

const processItems = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    body: 'We analyze your market, competitors, and goals to build a tailored growth roadmap that becomes your unfair advantage.',
    open: true,
  },
  {
    icon: SquareStack,
    title: 'Design / Develop / Build',
    body: 'Product, commerce, and marketing systems are built as one coherent experience instead of disconnected handoffs.',
    open: false,
  },
  {
    icon: Sparkles,
    title: 'Launch / Learn / Improve',
    body: 'We measure, optimize, and keep evolving the funnel after launch so growth compounds instead of stalling.',
    open: false,
  },
]

const valueCards = [
  {
    icon: Clock3,
    title: 'Focus on What Matters',
    body: 'Spend your time on innovation and customer relationships, while we handle the nuts and bolts of digital growth.',
  },
  {
    icon: Zap,
    title: 'Startup & Fintech Savvy',
    body: 'We specialize in helping startups, fintechs, and B2B companies navigate growth with strategies that make sense for your business.',
    featured: true,
  },
  {
    icon: Layers3,
    title: 'Build, Operate, Transfer',
    body: 'We offer a range of full-lifecycle AI services and products to help businesses adopt and own custom, high-impact AI systems.',
  },
]

const clientNames = ['Neuronics', 'Chemonics', 'Jalebi.io', 'PepsiCo', 'CCI', 'Techaccess']

const footerColumns = [
  {
    title: 'Growth Engine',
    items: [
      'Overview',
      'Conversion Rate Optimization',
      'Channel Optimization',
      'RevOps Tech',
      'Pricing Strategies',
      'Voice of Customer',
      'Location Intelligence',
    ],
  },
  {
    title: 'Digital Experience',
    items: ['Agentic Commerce', 'Digital Experience', 'E-Commerce', 'Shopify', 'WooCommerce', 'Magento'],
  },
  {
    title: 'Rank Better',
    items: ['Technical SEO', 'GEO: AI Optimization', 'Content Sprints', 'SEO Audit'],
  },
  {
    title: 'Resources',
    items: ['Guidebooks', 'Growth Blog', 'Events', 'Communities', 'Portfolio'],
  },
  {
    title: 'Company',
    items: ['Our Brands', 'Partners', 'Careers'],
  },
]

const HomePage = () => {
  return (
    <div className="bg-[#f4f4f5] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#eef2ff]" id="growth-engine">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.24),transparent_24%),radial-gradient(circle_at_82%_74%,rgba(59,130,246,0.22),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0.82))]" />
        <div className="absolute -left-24 top-28 h-[28rem] w-[28rem] rounded-full border border-blue-200/60 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.9),rgba(99,102,241,0.08)_55%,transparent_70%)] blur-sm" />
        <div className="absolute -right-20 bottom-0 h-[24rem] w-[24rem] rounded-full border border-blue-200/50 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.86),rgba(96,165,250,0.16)_58%,transparent_70%)] blur-sm" />

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-[-0.05em] text-blue-700 sm:text-6xl lg:text-7xl">
              The <span className="italic">Growth</span> Intelligence Engine
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-2xl font-black leading-tight text-blue-700 sm:text-3xl">
              Win with speed. Scale with data. Dominate your market.
            </p>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-700 sm:text-xl">
              We build your unfair advantage: A living system that learns faster, experiments smarter, and compounds
              growth quarter after quarter.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center rounded-full bg-lime-400 px-10 py-5 text-xl font-black text-slate-950 shadow-[0_20px_50px_rgba(163,230,53,0.35)] transition hover:bg-lime-300"
                >
                  See How It Works?
                </a>
                <Link
                  to="/issues-solved"
                  className="inline-flex items-center rounded-full border-2 border-slate-900 bg-white px-10 py-5 text-xl font-black text-slate-950 transition hover:border-blue-700 hover:text-blue-700"
                >
                  Click For Issues Solved
                </Link>
              </div>
            </div>

            <p className="mt-24 text-xs font-black uppercase tracking-[0.42em] text-blue-500">Scroll</p>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              <span className="h-px w-11 bg-blue-700" />
              What We Do
            </div>
            <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Simplify your growth journey
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-slate-600">
              We offer a &quot;buffet&quot; of digital solutions to fuel your growth. We&apos;re a team of designers,
              developers, growth folks, and AI thinkers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {whatWeDoCards.map((card) => {
              const isWide = card.variant === 'wide'
              const isDark = card.variant === 'dark'

              return (
                <article
                  key={card.title}
                  className={`overflow-hidden rounded-[2rem] border p-8 shadow-[0_18px_55px_rgba(15,23,42,0.06)] ${
                    isWide
                      ? 'border-blue-100 bg-[#edf2ff] lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:items-center'
                      : isDark
                        ? 'border-blue-950 bg-[#05238c] text-white'
                        : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="min-w-0">
                    <h3 className={`text-3xl font-black tracking-[-0.04em] ${isWide ? 'text-blue-700' : ''}`}>
                      {card.title}
                    </h3>
                    <ul className={`mt-6 space-y-4 text-lg leading-8 ${isDark ? 'text-blue-50' : 'text-slate-600'}`}>
                      {card.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <Check className={`mt-1 h-5 w-5 shrink-0 ${isDark ? 'text-lime-300' : 'text-blue-700'}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={card.title.includes('Growth') ? '#growth-engine' : '#contact'}
                      className={`mt-8 inline-flex items-center gap-2 text-xl font-black ${
                        isDark ? 'text-lime-300' : 'text-blue-700'
                      }`}
                    >
                      {card.link}
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>

                  {isWide ? (
                    <div className="relative mt-10 flex h-72 items-center justify-center lg:mt-0">
                      <div className="absolute h-36 w-36 rounded-[2.2rem] border border-white/70 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.96),rgba(96,165,250,0.32))] shadow-[0_25px_70px_rgba(59,130,246,0.28)]" />
                      <div className="absolute translate-x-12 translate-y-12 rotate-[-16deg] rounded-[2rem] border border-slate-300 bg-white px-8 py-14 shadow-[0_32px_90px_rgba(15,23,42,0.16)]">
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 12 }).map((_, index) => (
                            <span
                              key={index}
                              className={`h-5 w-12 rounded-full ${
                                index % 4 === 0 ? 'bg-blue-700' : index % 3 === 0 ? 'bg-lime-300' : 'bg-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-slate-200 bg-white py-8">
        <div className="flex min-w-max animate-[marquee_24s_linear_infinite] gap-10 whitespace-nowrap text-4xl font-black tracking-[-0.05em] text-blue-700">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>Your ideas, our creativity</span>
              <span>✶</span>
              <span>Your ideas, our creativity</span>
              <span>✶</span>
              <span>Your ideas, our creativity</span>
              <span>✶</span>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(340px,0.9fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative hidden min-h-[42rem] lg:block">
            <div className="absolute inset-x-12 top-12 h-[34rem] rounded-[45%] border border-blue-100 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.92),rgba(96,165,250,0.16)_60%,transparent_75%)]" />
            <div className="absolute inset-x-0 bottom-0 top-28 rounded-[44%] border border-blue-100 bg-[radial-gradient(circle_at_48%_38%,rgba(255,255,255,0.88),rgba(59,130,246,0.22)_58%,transparent_76%)] shadow-[0_30px_80px_rgba(59,130,246,0.12)]" />
            <div className="absolute left-1/2 top-1/2 grid h-72 w-72 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[34%] border border-blue-200 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.95),rgba(147,197,253,0.34)_60%,rgba(37,99,235,0.08)_80%)]">
              <span className="text-[10rem] font-black leading-none text-blue-700/60">#</span>
            </div>
          </div>

          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              <span className="h-px w-11 bg-blue-700" />
              How It Works?
            </div>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-black leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Growth, Engineered for Tomorrow.
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              Get started right away, quick turn arounds, no surprises. You get more things done faster and better.
            </p>

            <div className="mt-10 space-y-5">
              {processItems.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white px-6 py-6 shadow-[0_16px_45px_rgba(15,23,42,0.04)]">
                    <button type="button" className="flex w-full items-center gap-4 text-left">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${item.open ? 'bg-blue-700 text-white' : 'bg-slate-100 text-blue-700'}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className={`flex-1 text-2xl font-black tracking-[-0.03em] ${item.open ? 'text-blue-700' : 'text-slate-950'}`}>
                        {item.title}
                      </span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition ${item.open ? 'rotate-180' : ''}`} />
                    </button>
                    {item.open ? <p className="ml-16 mt-5 max-w-2xl text-lg leading-9 text-slate-600">{item.body}</p> : null}
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="efficiency" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <h2 className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Where efficiency meets innovation
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-slate-600">
              No question is too basic, and <span className="font-black text-slate-700">no challenge is too complex.</span> By partnering with us, you get a team that&apos;s positive, hands-on, and truly cares about your success.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {valueCards.map((card) => {
              const Icon = card.icon
              return (
                <article
                  key={card.title}
                  className={`rounded-[2rem] border p-8 shadow-[0_18px_55px_rgba(15,23,42,0.06)] ${
                    card.featured ? 'border-blue-100 bg-white shadow-[0_22px_65px_rgba(29,78,216,0.12)]' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className={`grid h-16 w-16 place-items-center rounded-2xl ${card.featured ? 'bg-blue-700 text-white' : 'bg-slate-100 text-blue-700'}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-7 text-3xl font-black tracking-[-0.04em] text-slate-950">{card.title}</h3>
                  <p className="mt-5 text-lg leading-9 text-slate-600">{card.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#1644f4] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-200">Build. Grow. Elevate. Outshine.</p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              Let&apos;s Build Something Powerful, Together
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl bg-lime-400 px-9 py-5 text-xl font-black text-slate-950"
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="clients" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              <span className="h-px w-11 bg-blue-700" />
              Recent Clients
            </div>
          </div>

          <div className="mt-16 grid gap-8 text-center text-3xl font-black uppercase tracking-[-0.03em] text-slate-400 sm:grid-cols-2 lg:grid-cols-6">
            {clientNames.map((name) => (
              <div key={name} className="opacity-70">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.95fr)] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              <span className="h-px w-11 bg-blue-700" />
              Let&apos;s Build Better
            </div>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Your vision, <span className="italic text-blue-700">expertly</span> executed
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              See how RF Studio transforms your online presence into a powerful engine for business expansion. Book a
              discovery call to explore:
            </p>

            <ul className="mt-8 space-y-5 text-xl leading-9 text-slate-600">
              {[
                'How RF Studio works to amplify your digital footprint.',
                'Our development services turns visitor interest into valuable action.',
                "The project structure that best fits your company's ambitions.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-3 h-2.5 w-2.5 rounded-full bg-blue-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form className="grid gap-5 rounded-[2rem] bg-transparent">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-3 text-lg font-black text-slate-950">
                What&apos;s Your Email? <span className="text-red-500">*</span>
                <input
                  type="email"
                  placeholder="eg. you@wonderful.com"
                  className="h-16 rounded-3xl border border-slate-200 bg-white px-5 text-lg font-medium text-slate-700 outline-none transition focus:border-blue-700"
                />
              </label>
              <label className="grid gap-3 text-lg font-black text-slate-950">
                What&apos;s Your Phone Number?
                <input
                  type="tel"
                  placeholder="eg. +1 774 497 1024"
                  className="h-16 rounded-3xl border border-slate-200 bg-white px-5 text-lg font-medium text-slate-700 outline-none transition focus:border-blue-700"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex h-16 items-center justify-center rounded-3xl bg-[#1644f4] text-2xl font-black text-white shadow-[0_18px_50px_rgba(29,78,216,0.24)]"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>

      <footer id="footer" className="relative overflow-hidden rounded-t-[2rem] bg-[#112d8f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_80%,rgba(59,130,246,0.25),transparent_28%),radial-gradient(circle_at_85%_88%,rgba(96,165,250,0.22),transparent_25%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_repeat(5,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-3 text-3xl font-black uppercase tracking-[0.14em]">
              <Rocket className="h-8 w-8" />
              <span>RF Studio</span>
            </div>
            <p className="mt-8 max-w-sm text-lg leading-9 text-blue-100/80">
              Growth intelligence agency. We extract signals, prioritize by revenue impact, and execute growth
              experiments that compound, quarter after quarter.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-black uppercase tracking-[0.14em] text-white">{column.title}</h3>
              <ul className="mt-7 space-y-4 text-lg text-blue-100/75">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default HomePage
