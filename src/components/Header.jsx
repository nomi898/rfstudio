import {
  ArrowRightLeft,
  BarChart3,
  ChevronDown,
  CircleDollarSign,
  Menu,
  MessageSquareText,
  MonitorSmartphone,
  PackageSearch,
  PenTool,
  Rocket,
  SearchCheck,
  Store,
  Target,
  Users,
} from 'lucide-react'
import { NavLink } from 'react-router'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const desktopMenus = [
  {
    id: 'growth',
    label: 'Growth Intelligence',
    groups: [
      {
        heading: 'Optimize',
        items: [
          { label: 'Conversion Rate Optimization', detail: 'More wins per visitor', icon: BarChart3, href: '#growth-engine' },
          { label: 'Channel Optimization', detail: 'Maximize every marketing channel', icon: ArrowRightLeft, href: '#what-we-do' },
          { label: 'RevOps Tech', detail: 'Revenue operations infrastructure', icon: Rocket, href: '#how-it-works' },
        ],
      },
      {
        heading: 'Intelligence',
        items: [
          { label: 'Pricing Strategies & Modelling', detail: 'Data-driven pricing optimization', icon: CircleDollarSign, href: '#efficiency' },
          { label: 'Voice of Customer', detail: 'Customer insights & feedback loops', icon: MessageSquareText, href: '#contact' },
          { label: 'Location Intelligence', detail: 'Geo-targeted growth strategies', icon: Target, href: '#clients' },
        ],
      },
    ],
  },
  {
    id: 'digital',
    label: 'Digital Experience',
    groups: [
      {
        heading: 'Commerce',
        items: [
          { label: 'Shopify', detail: 'Fast storefront launches', icon: Store, href: '#what-we-do' },
          { label: 'WooCommerce', detail: 'Flexible WordPress commerce', icon: MonitorSmartphone, href: '#what-we-do' },
          { label: 'Magento', detail: 'Enterprise Adobe Commerce', icon: PackageSearch, href: '/magento' },
        ],
      },
      {
        heading: 'Build',
        items: [
          { label: 'Digital Experience', detail: 'Product and UX systems', icon: PenTool, href: '#how-it-works' },
          { label: 'Agentic Commerce', detail: 'AI-enhanced buying journeys', icon: Rocket, href: '#efficiency' },
          { label: 'Enterprise Delivery', detail: 'Complex integrated platforms', icon: Users, href: '#contact' },
        ],
      },
    ],
  },
  {
    id: 'rank',
    label: 'Rank Better',
    groups: [
      {
        heading: 'Visibility',
        items: [
          { label: 'Technical SEO', detail: 'Fix crawl and performance issues', icon: SearchCheck, href: '#efficiency' },
          { label: 'GEO / AI Optimization', detail: 'Show up in AI answers', icon: Target, href: '#efficiency' },
          { label: 'Content Sprints', detail: 'Publish faster with intent', icon: PenTool, href: '#contact' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    groups: [
      {
        heading: 'Learn',
        items: [
          { label: 'Guidebooks', detail: 'Frameworks and playbooks', icon: PackageSearch, href: '#clients' },
          { label: 'Growth Blog', detail: 'Ideas and execution notes', icon: PenTool, href: '#clients' },
          { label: 'Events', detail: 'Talks and live sessions', icon: Users, href: '#clients' },
        ],
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    groups: [
      {
        heading: 'Company',
        items: [
          { label: 'Our Brands', detail: 'The RF Studio ecosystem', icon: Rocket, href: '#footer' },
          { label: 'Partners', detail: 'Collaboration network', icon: Users, href: '/partners' },
          { label: 'Careers', detail: 'Join the team', icon: Target, href: '#footer' },
        ],
      },
    ],
  },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null)

  const activeMenu = desktopMenus.find((menu) => menu.id === activeDesktopMenu)

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur"
        onMouseLeave={() => setActiveDesktopMenu(null)}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl text-blue-700">
              <Rocket className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-lg font-black uppercase tracking-[0.16em] text-blue-700 sm:text-xl">
                RF Studio
              </p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex">
            {desktopMenus.map((item) => (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActiveDesktopMenu(item.id)}
                onFocus={() => setActiveDesktopMenu(item.id)}
                onClick={() => setActiveDesktopMenu((current) => (current === item.id ? null : item.id))}
                aria-expanded={activeDesktopMenu === item.id}
                className={`inline-flex items-center gap-1 text-sm font-bold transition ${
                  activeDesktopMenu === item.id ? 'text-blue-700' : 'text-slate-800 hover:text-blue-700'
                }`}
              >
                {item.label}
                <ChevronDown className={`h-4 w-4 transition ${activeDesktopMenu === item.id ? 'rotate-180' : ''}`} />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden h-11 items-center rounded-full border-2 border-slate-900 bg-white px-8 text-sm font-black text-slate-950 transition hover:border-blue-700 hover:text-blue-700 lg:inline-flex"
            >
              Get Started
            </a>

            <a
              href="#contact"
              className="inline-flex h-10 items-center rounded-full bg-blue-700 px-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(29,78,216,0.28)] transition hover:bg-blue-800 lg:hidden"
            >
              Get Started
            </a>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {activeMenu ? (
          <div className="pointer-events-none absolute inset-x-0 top-full hidden lg:block">
            <div className="mx-auto mt-0.5 w-full max-w-7xl px-6">
              <div className="pointer-events-auto max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
                <div
                  className={`grid gap-9 ${
                    activeMenu.groups.length > 1 ? 'grid-cols-2' : 'grid-cols-1 max-w-xl'
                  }`}
                >
                  {activeMenu.groups.map((group) => (
                    <div key={group.heading}>
                      <p className="border-b border-slate-200 pb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-400">
                        {group.heading}
                      </p>
                      <div className="mt-6 space-y-5">
                        {group.items.map((entry) => {
                          const Icon = entry.icon
                          return (
                            <a key={entry.label} href={entry.href} className="flex gap-4 rounded-2xl p-3 transition hover:bg-slate-50">
                              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-100 text-blue-700">
                                <Icon className="h-5 w-5" />
                              </span>
                              <span>
                                <span className="block text-[1.05rem] font-black text-slate-800">{entry.label}</span>
                                <span className="mt-1 block text-sm leading-6 text-slate-500">{entry.detail}</span>
                              </span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Header
