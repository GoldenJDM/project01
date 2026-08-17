import { useEffect, useState } from 'react'
import { Gem, Menu, X } from 'lucide-react'

const links = [
  { label: 'خانه', href: '#home' },
  { label: 'کلکسیون', href: '#collection' },
  { label: 'هنر دست', href: '#craft' },
  { label: 'تماس', href: '#visit' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-gold-faint py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-full border border-gold-faint flex items-center justify-center bg-black/40 group-hover:border-[#c9a45c]/60 transition-colors">
            <Gem className="w-5 h-5 text-[#c9a45c]" strokeWidth={1.5} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-white">گالری نقره نقیب</span>
            <span className="block text-[10px] tracking-[0.35em] text-[#c9a45c]/80">KHALKHAL · SILVER</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-300 hover:text-[#c9a45c] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="text-sm border border-[#c9a45c]/50 text-[#c9a45c] px-5 py-2 hover:bg-[#c9a45c] hover:text-black transition-all duration-500"
          >
            رزرو بازدید
          </a>
        </nav>

        <button
          className="md:hidden text-neutral-200"
          onClick={() => setOpen(!open)}
          aria-label="منو"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gold-faint px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-neutral-200 hover:text-[#c9a45c] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
