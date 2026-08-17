import { Navigation } from '@/sections/Navigation'
import { Hero } from '@/sections/Hero'
import { Marquee } from '@/sections/Marquee'
import { Collections } from '@/sections/Collections'
import { Stats } from '@/sections/Stats'
import { Craft } from '@/sections/Craft'
import { Visit } from '@/sections/Visit'
import { Footer } from '@/sections/Footer'

export default function App() {
  return (
    <div className="bg-[#060606] text-neutral-100 min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Collections />
        <Stats />
        <Craft />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
