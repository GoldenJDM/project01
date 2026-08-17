import { Gem } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gold-faint bg-black py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full border border-gold-faint flex items-center justify-center">
              <Gem className="w-5 h-5 text-[#c9a45c]" strokeWidth={1.5} />
            </span>
            <div className="leading-tight">
              <p className="text-white font-bold">گالری نقره نقیب</p>
              <p className="text-[10px] tracking-[0.35em] text-[#c9a45c]/70">KHALKHAL · SILVER GALLERY</p>
            </div>
          </div>

          <nav className="flex items-center gap-8 text-sm text-neutral-400">
            <a href="#home" className="hover:text-[#c9a45c] transition-colors">خانه</a>
            <a href="#collection" className="hover:text-[#c9a45c] transition-colors">کلکسیون</a>
            <a href="#craft" className="hover:text-[#c9a45c] transition-colors">هنر دست</a>
            <a href="#visit" className="hover:text-[#c9a45c] transition-colors">تماس</a>
          </nav>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 text-center">
          <p className="text-neutral-500 text-xs font-light">
            © ۱۴۰۵ گالری نقره نقیب — خلخال. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  )
}
