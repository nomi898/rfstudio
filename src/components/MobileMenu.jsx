import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'

const sections = [
  {
    id: 'growth',
    label: 'Growth Intelligence',
    items: ['Conversion Rate Optimization', 'Channel Optimization', 'RevOps Tech'],
  },
  {
    id: 'digital',
    label: 'Digital Experience',
    items: ['Shopify', 'WooCommerce', 'Magento'],
  },
  {
    id: 'rank',
    label: 'Rank Better',
    items: ['Technical SEO', 'GEO: AI Optimization', 'Content Sprints'],
  },
  {
    id: 'resources',
    label: 'Resources',
    items: ['Guidebooks', 'Growth Blog', 'Events'],
  },
  {
    id: 'about',
    label: 'About',
    items: ['Our Brands', 'Partners', 'Careers'],
  },
]

const MobileMenu = ({ open, onClose }) => {
  const [openSection, setOpenSection] = useState('digital')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-slate-950/35 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-[88vw] max-w-sm flex-col bg-[#f7f7f8] shadow-[-24px_0_60px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
          <NavLink to="/magento" onClick={onClose} className="text-lg font-black uppercase tracking-[0.14em] text-blue-700">
            RF Studio
          </NavLink>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full text-slate-900"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {sections.map((section) => {
            const expanded = openSection === section.id

            return (
              <div key={section.id} className="border-b border-slate-200 py-2">
                <button
                  type="button"
                  onClick={() => setOpenSection(expanded ? null : section.id)}
                  className={`flex w-full items-center justify-between gap-4 py-4 text-left text-[1.08rem] font-bold ${
                    expanded ? 'text-blue-700' : 'text-slate-900'
                  }`}
                >
                  <span>{section.label}</span>
                  {expanded ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <ul className="min-h-0 space-y-1 overflow-hidden pb-4">
                    {section.items.map((item) => (
                      <li key={item}>
                        <a
                          href={item === 'Magento' ? '/magento' : item === 'Partners' ? '/partners' : '#'}
                          onClick={onClose}
                          className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="border-t border-slate-200 px-5 py-5">
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#ffd500] px-5 py-4 text-lg font-black text-slate-950"
          >
            Get Started
          </a>
        </div>
      </aside>
    </div>
  )
}

export default MobileMenu
