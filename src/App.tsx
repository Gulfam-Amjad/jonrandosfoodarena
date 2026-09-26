import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import CartDrawer from './components/CartDrawer'
import DemoBanner from './components/DemoBanner'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { CartProvider } from './lib/cart'
import { initSmoothScroll } from './lib/scroll'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Menu from './sections/Menu'
import WhyUs from './sections/WhyUs'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import VisitUs from './sections/VisitUs'
import Footer from './sections/Footer'

/** Set to false before handing the site over to the client. */
const SHOW_DEMO_BANNER = true

export default function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <CartProvider>
      <div className="grain">
        <Loader />
        <ScrollProgress />
        <Cursor />
        {SHOW_DEMO_BANNER && <DemoBanner />}
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Menu />
          <WhyUs />
          <Gallery />
          <Reviews />
          <VisitUs />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  )
}
