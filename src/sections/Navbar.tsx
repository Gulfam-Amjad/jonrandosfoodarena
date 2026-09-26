import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu as MenuIcon, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import Logo from '../components/Logo'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { whatsappLink } from '../data/business'
import { useCart } from '../lib/cart'
import { scrollToId } from '../lib/scroll'

const links = [
  { id: 'about', label: 'About' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'visit', label: 'Visit' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobile, setMobile] = useState(false)
  const { count, setOpen } = useCart()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 40)
    setHidden(y > prev && y > 400 && !mobile)
  })

  const go = (id: string) => {
    setMobile(false)
    scrollToId(id)
  }

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? 'glass bg-coal-950/70 shadow-2xl shadow-black/40' : 'bg-transparent'
        }`}
      >
        <button onClick={() => go('top')} className="flex items-center gap-3">
          <Logo />
          <span className="font-display text-2xl tracking-wider">
            JONRANDOS <span className="text-fire hidden sm:inline">FOOD ARENA</span>
          </span>
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="group relative text-sm font-medium text-stone-300 transition-colors hover:text-white"
              >
                {l.label}
                <span className="bg-fire absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open order"
            className="glass relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5" />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="bg-fire absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[11px] font-bold"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <a
            href={whatsappLink("Hi Jonrandos! I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fire hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold sm:flex"
          >
            <WhatsAppIcon className="h-4 w-4" /> Order Now
          </a>
          <button
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
            className="glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          >
            {mobile ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            className="glass mx-auto mt-2 max-w-7xl rounded-2xl bg-coal-950/90 p-4 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(l.id)}
                className="block w-full rounded-xl px-4 py-3 text-left font-display text-3xl tracking-wide hover:bg-white/5"
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
