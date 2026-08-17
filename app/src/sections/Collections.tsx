import { Reveal } from '@/lib/Reveal'

interface Product {
  name: string
  desc: string
  price: string
  image: string
  tag?: string
}

const products: Product[] = [
  {
    name: 'انگشتر فیروزهٔ نیشابور',
    desc: 'نقرهٔ ۹۲۵ با نگین فیروزهٔ دست‌تراش و حکاکی سنتی',
    price: '۴٬۸۰۰٬۰۰۰ تومان',
    image: '/images/product-ring.png',
    tag: 'پرفروش',
  },
  {
    name: 'گردنبند مخراج‌کاری',
    desc: 'زنجیر نقره با آویز فیروزه و ظرافت مخراج‌کاری اصیل',
    price: '۹٬۲۰۰٬۰۰۰ تومان',
    image: '/images/product-necklace.png',
  },
  {
    name: 'گوشوارهٔ فیروزه',
    desc: 'گوشوارهٔ آویز نقره با قطره‌های فیروزه، سبک و درخشان',
    price: '۳٬۹۰۰٬۰۰۰ تومان',
    image: '/images/product-earrings.png',
    tag: 'جدید',
  },
  {
    name: 'دستبند النگویی فیروزه',
    desc: 'النگوی نقرهٔ دست‌ساز با پنج نگین فیروزهٔ درخشان',
    price: '۷٬۵۰۰٬۰۰۰ تومان',
    image: '/images/product-bracelet.png',
  },
  {
    name: 'انگشتر عقیق یمن',
    desc: 'رکاب سنگین نقره با عقیق سرخ یمن — مردانه و خاص',
    price: '۵٬۶۰۰٬۰۰۰ تومان',
    image: '/images/product-men.png',
  },
  {
    name: 'سرویس نقرهٔ عروس',
    desc: 'ست کامل گردنبند و گوشواره، انتخابی ماندگار برای شب عروسی',
    price: '۱۸٬۰۰۰٬۰۰۰ تومان',
    image: '/images/product-set.png',
    tag: 'ویژه',
  },
]

export function Collections() {
  return (
    <section id="collection" className="relative py-28 md:py-36 bg-[#060606]">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <p className="text-[#c9a45c] tracking-[0.4em] text-xs mb-4">کلکسیون</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              آثاری که <span className="text-gold-gradient">داستان</span> دارند
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-neutral-400 mt-6 max-w-xl mx-auto font-light leading-relaxed">
              هر قطعه در کارگاه ما با دست ساخته می‌شود؛ تک‌نسخه، اصیل و همراه با شناسنامهٔ اصالت.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 120}>
              <article className="group relative bg-[#0d0d0d] border border-white/5 hover:border-[#c9a45c]/40 transition-colors duration-700 card-zoom gold-frame">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {p.tag && (
                    <span className="absolute top-4 right-4 z-10 bg-[#c9a45c] text-black text-[11px] font-bold px-3 py-1">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c9a45c] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-[#c9a45c] font-semibold text-sm">{p.price}</span>
                    <a
                      href="#visit"
                      className="text-xs text-neutral-400 hover:text-white tracking-wide transition-colors"
                    >
                      استعلام و خرید ←
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <p className="text-neutral-500 text-sm font-light">
            بیش از ۲۰۰ طرح دیگر در گالری منتظر شماست — حضوری تشریف بیاورید.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
