import { ArrowRight } from 'lucide-react'
import PartnersSection from '../components/PartnersSection'

const PartnersPage = () => {
  return (
    <div className="pb-16">
      <section className="px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(229,238,255,0.95))] px-6 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-8 lg:px-12 lg:py-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">Partners page demo</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Responsive partner storytelling that does not break on mobile
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This page preserves the RF Studio visual language while fixing the illustration overlap bug by stacking
                copy above the artwork on smaller screens and keeping the image inside a constrained container.
              </p>
            </div>

            <a
              href="/magento"
              className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white px-5 py-3 text-base font-bold text-slate-700"
            >
              Magento Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <PartnersSection />
    </div>
  )
}

export default PartnersPage
