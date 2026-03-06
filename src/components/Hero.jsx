const Hero = ({ eyebrow, title, accent, description, primaryCta, secondaryCta, summaryCards = [] }) => {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="mx-auto grid w-full max-w-7xl gap-8 overflow-x-clip rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,rgba(229,238,255,0.95),rgba(255,255,255,1))] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:p-12">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
            {title} <span className="text-blue-700">{accent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-lime-400 px-6 py-3 text-base font-black text-slate-950 shadow-[0_18px_40px_rgba(163,230,53,0.28)] transition hover:bg-lime-300"
            >
              {primaryCta}
            </a>
            <a
              href="#fixes"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
            >
              {secondaryCta}
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {summaryCards.map((card) => (
            <article key={card.title} className="rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-[0_18px_50px_rgba(59,130,246,0.12)]">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">{card.kicker}</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950">{card.title}</h2>
              <p className="mt-2 text-base leading-7 text-slate-600">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
