import { useEffect, useState } from 'react'

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="گردنبند نقره با فیروزه"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#060606]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.65)_100%)]" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-32">
        <p
          className={`text-[#c9a45c] tracking-[0.5em] text-xs md:text-sm mb-8 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          گالری جواهرات نقره · خلخال
        </p>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[1.15] mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-silver-gradient">گالری نقره</span>
          <br />
          <span className="text-gold-gradient animate-shine">نقیب</span>
        </h1>

        <p
          className={`text-neutral-300 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          جایی که نقره، نفس می‌کشد. آثار دست‌ساز با فیروزهٔ نیشابور و عقیق یمن،
          در قلب خلخال — برای کسانی که خاص بودن را انتخاب می‌کنند.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#collection"
            className="bg-[#c9a45c] text-black px-10 py-4 text-sm font-bold tracking-wide hover:bg-[#e0bd74] transition-colors duration-500"
          >
            مشاهده کلکسیون
          </a>
          <a
            href="#craft"
            className="border border-white/25 text-white px-10 py-4 text-sm tracking-wide hover:border-[#c9a45c] hover:text-[#c9a45c] transition-all duration-500"
          >
            داستان هنر ما
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-6 h-11 rounded-full border border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#c9a45c] animate-scroll-dot" />
        </div>
        <span className="text-[10px] tracking-[0.3em] text-neutral-500">اسکرول</span>
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-24 right-8 w-16 h-16 border-t border-r border-[#c9a45c]/30 hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-b border-l border-[#c9a45c]/30 hidden lg:block" />
    </section>
  )
}
