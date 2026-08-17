import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/lib/Reveal'

const stats = [
  { value: 30, suffix: '+', label: 'سال تجربه' },
  { value: 200, suffix: '+', label: 'طرح اختصاصی' },
  { value: 925, suffix: '', label: 'عیار نقره' },
  { value: 100, suffix: '٪', label: 'دست‌ساز' },
]

// Persian digits
function toFa(n: number) {
  return n.toLocaleString('fa-IR')
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect()
          const duration = 1800
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(target * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-gold-gradient">
      {toFa(value)}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="border-y border-gold-faint bg-[#080808] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div>
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-neutral-400 text-sm mt-3 tracking-wide">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
