import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Button from '../components/Button'
import Logo from '../components/Logo'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { business, whatsappLink } from '../data/business'
import { scrollToId } from '../lib/scroll'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-24">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-flame-600/15 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-display text-6xl leading-none tracking-wide sm:text-8xl">
            Hungry <span className="text-fire">yet?</span>
          </h2>
          <p className="mt-4 max-w-md text-stone-400">
            Your next favourite meal is one message away. Open every day, 9AM to 11PM.
          </p>
          <Button href={whatsappLink("Hi Jonrandos! I'd like to place an order.")} external className="mt-8">
            <WhatsAppIcon /> Order on WhatsApp
          </Button>
        </motion.div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-stone-500 md:flex-row">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span>
              © {new Date().getFullYear()} {business.name} · {business.address.line1}, {business.address.city}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${business.phone}`} className="hover:text-white">
              {business.phoneDisplay}
            </a>
            <button
              onClick={() => scrollToId('top')}
              aria-label="Back to top"
              className="glass flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="font-display pointer-events-none -mb-6 text-center text-[22vw] leading-none tracking-wider text-white/[0.03] select-none"
      >
        JONRANDOS
      </p>
    </footer>
  )
}
