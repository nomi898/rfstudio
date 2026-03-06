import { ChevronDown, Menu, Rocket } from 'lucide-react'
import { NavLink } from 'react-router'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const desktopMenus = [
  { label: 'Growth Intelligence', href: '#growth-engine' },
  { label: 'Digital Experience', href: '#what-we-do' },
  { label: 'Rank Better', href: '#efficiency' },
  { label: 'Resources', href: '#clients' },
  { label: 'About', href: '#footer' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
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
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1 text-sm font-bold text-slate-800 transition hover:text-blue-700"
              >
                {item.label}
                <ChevronDown className="h-4 w-4" />
              </a>
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
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Header
