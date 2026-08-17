import { Gem } from 'lucide-react'

const words = ['نقرهٔ ۹۲۵', 'فیروزهٔ نیشابور', 'عقیق یمن', 'دست‌ساز', 'طراحی اختصاصی', 'میراث ایرانی']

export function Marquee() {
  const row = [...words, ...words, ...words]
  return (
    <div className="border-y border-gold-faint bg-[#0a0a0a] py-5 overflow-hidden" dir="ltr">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 px-8 text-sm tracking-[0.25em] text-neutral-400">
            <span className="hover:text-[#c9a45c] transition-colors">{w}</span>
            <Gem className="w-3 h-3 text-[#c9a45c]/60" strokeWidth={1.5} />
          </span>
        ))}
      </div>
    </div>
  )
}
