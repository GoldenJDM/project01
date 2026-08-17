import { Reveal } from '@/lib/Reveal'
import { Hammer, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Hammer,
    title: 'کاملاً دست‌ساز',
    desc: 'از ذوب نقره تا حکاکی نهایی، همهٔ مراحل در کارگاه نقیب و با دست انجام می‌شود.',
  },
  {
    icon: ShieldCheck,
    title: 'عیار تضمینی ۹۲۵',
    desc: 'هر قطعه با شناسنامهٔ اصالت و ضمانت عیار نقره تحویل داده می‌شود.',
  },
  {
    icon: Sparkles,
    title: 'نگین‌های اصیل',
    desc: 'فیروزهٔ نیشابور، عقیق یمن و سنگ‌های طبیعی با انتخاب چشم استادکار.',
  },
]

export function Craft() {
  return (
    <section id="craft" className="relative py-28 md:py-36 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      {/* soft gold glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#c9a45c]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <Reveal>
              <div className="relative border border-gold-faint p-3 bg-black/40">
                <img
                  src="/images/craft.png"
                  alt="هنر قلم‌زنی روی فلز"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={200} className="absolute -bottom-10 -right-4 md:-right-10 w-44 md:w-56 hidden sm:block">
              <div className="border border-gold-faint p-2 bg-[#060606] shadow-2xl animate-floaty">
                <img
                  src="/images/craft2.png"
                  alt="دستان استادکار نقره"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[#c9a45c]/40 pointer-events-none" />
          </div>

          {/* Text */}
          <div>
            <Reveal>
              <p className="text-[#c9a45c] tracking-[0.4em] text-xs mb-4">هنر دست</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                سه نسل،
                <br />
                یک <span className="text-gold-gradient">عشق</span>: نقره
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-neutral-400 font-light leading-loose mb-6">
                گالری نقرهٔ نقیب در شهر خلخال، حاصل سه نسل تجربه در هنر نقره‌کاری است.
                ما باور داریم جواهر واقعی در ویترین ساخته نمی‌شود؛ در دل کارگاه،
                با ضربه‌های پشت‌سرهم چکش و صبر استادکار زاده می‌شود.
              </p>
              <p className="text-neutral-400 font-light leading-loose mb-10">
                از قلم‌زنی سنتی تا ترکیب مدرن نقره با فیروزه و عقیق، هر اثر نقیب
                امضای یک هنرمند است — نه محصول یک خط تولید.
              </p>
            </Reveal>

            <div className="space-y-6">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={300 + i * 120}>
                  <div className="flex gap-5 items-start group">
                    <span className="shrink-0 w-12 h-12 border border-gold-faint flex items-center justify-center group-hover:border-[#c9a45c]/60 group-hover:bg-[#c9a45c]/5 transition-all duration-500">
                      <f.icon className="w-5 h-5 text-[#c9a45c]" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-white font-bold mb-1">{f.title}</h3>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
