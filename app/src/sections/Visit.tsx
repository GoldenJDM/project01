import { Reveal } from '@/lib/Reveal'
import { Clock, Instagram, MapPin, Phone } from 'lucide-react'

export function Visit() {
  return (
    <section id="visit" className="relative py-28 md:py-36 bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#c9a45c]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[#c9a45c] tracking-[0.4em] text-xs mb-4">بازدید حضوری</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              در <span className="text-gold-gradient">خلخال</span> منتظر شما هستیم
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-neutral-400 mt-6 max-w-xl mx-auto font-light leading-relaxed">
              چای‌تان را مهمان ما باشید؛ کلکسیون کامل فقط در گالری قابل مشاهده و لمس است.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <div className="h-full bg-[#0d0d0d] border border-white/5 hover:border-[#c9a45c]/40 transition-colors duration-700 p-8 text-center">
              <span className="inline-flex w-14 h-14 rounded-full border border-gold-faint items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#c9a45c]" strokeWidth={1.5} />
              </span>
              <h3 className="text-white font-bold text-lg mb-3">آدرس گالری</h3>
              <p className="text-neutral-400 text-sm font-light leading-loose">
                اردبیل، خلخال،
                <br />
                بازار سنتی، پاساژ جواهران، پلاک ۱۲
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full bg-[#0d0d0d] border border-white/5 hover:border-[#c9a45c]/40 transition-colors duration-700 p-8 text-center">
              <span className="inline-flex w-14 h-14 rounded-full border border-gold-faint items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#c9a45c]" strokeWidth={1.5} />
              </span>
              <h3 className="text-white font-bold text-lg mb-3">ساعات کاری</h3>
              <p className="text-neutral-400 text-sm font-light leading-loose">
                شنبه تا پنجشنبه: ۱۰ تا ۲۱
                <br />
                جمعه‌ها: ۱۶ تا ۲۱
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="h-full bg-[#0d0d0d] border border-white/5 hover:border-[#c9a45c]/40 transition-colors duration-700 p-8 text-center">
              <span className="inline-flex w-14 h-14 rounded-full border border-gold-faint items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-[#c9a45c]" strokeWidth={1.5} />
              </span>
              <h3 className="text-white font-bold text-lg mb-3">تماس و سفارش</h3>
              <p className="text-neutral-400 text-sm font-light leading-loose" dir="ltr">
                ۰۹۱۴ ۰۰۰ ۰۰ ۰۰
              </p>
              <p className="text-neutral-500 text-xs font-light mt-2">سفارش طرح دلخواه شما هم پذیرفته می‌شود</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} className="text-center mt-14">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-[#c9a45c]/50 text-[#c9a45c] px-10 py-4 text-sm tracking-wide hover:bg-[#c9a45c] hover:text-black transition-all duration-500"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
            ما را در اینستاگرام دنبال کنید
          </a>
        </Reveal>
      </div>
    </section>
  )
}
