import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import MenuCard from '../components/MenuCard'
import SectionHeading from '../components/SectionHeading'
import { formatRand, menu } from '../data/menu'
import { useCart } from '../lib/cart'

export default function Menu() {
  const [active, setActive] = useState(menu[0].id)
  const category = menu.find((c) => c.id === active)!
  const { count, total, setOpen } = useCart()

  return (
    <section id="menu" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-[500px] max-w-4xl rounded-full bg-flame-600/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The menu"
          title={
            <>
              Pick your <span className="text-fire">flavour</span>
            </>
          }
          subtitle="Build your order right here and send it straight to our kitchen on WhatsApp. No apps, no fees."
        />

        <div className="mb-12 flex justify-center">
          <div className="glass flex max-w-full gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none]">
            {menu.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === c.id ? 'text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                {active === c.id && (
                  <motion.span
                    layoutId="menu-pill"
                    className="bg-fire absolute inset-0 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {category.items.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-xs text-stone-500">
          * Sample menu and prices for demo purposes. Final menu to be supplied by Jonrandos.
        </p>
      </div>

      <AnimatePresence>
        {count > 0 && (
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            onClick={() => setOpen(true)}
            className="bg-fire fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-full whitespace-nowrap py-3 pr-6 pl-3 font-semibold shadow-[0_20px_50px_-10px_rgb(249_115_22/0.7)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <span>
              View order · {count} item{count > 1 ? 's' : ''}
            </span>
            <span className="font-display text-2xl">{formatRand(total)}</span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  )
}
