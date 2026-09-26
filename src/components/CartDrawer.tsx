import { AnimatePresence, motion } from 'framer-motion'
import { Bike, Minus, Plus, ShoppingBag, Store, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { formatRand } from '../data/menu'
import { useCart } from '../lib/cart'
import { scrollToId, setScrollLocked } from '../lib/scroll'
import WhatsAppIcon from './WhatsAppIcon'

export default function CartDrawer() {
  const { open, setOpen, lines, total, add, remove, clear, orderLink } = useCart()
  const [name, setName] = useState('')
  const [mode, setMode] = useState<'Delivery' | 'Takeaway'>('Delivery')
  const [address, setAddress] = useState('')

  useEffect(() => {
    setScrollLocked(open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed top-0 right-0 z-[81] flex h-full w-full max-w-md flex-col border-l border-white/10 bg-coal-900"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 34 }}
            data-lenis-prevent
          >
            <header className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <h3 className="font-display text-4xl tracking-wide">Your order</h3>
                <p className="text-sm text-stone-400">Sent straight to our WhatsApp</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="glass flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="glass flex h-20 w-20 items-center justify-center rounded-full"
                >
                  <ShoppingBag className="h-8 w-8 text-flame-400" />
                </motion.div>
                <p className="font-display text-3xl">Your bag is hungry</p>
                <p className="text-sm text-stone-400">Add some flame-grilled goodness from the menu.</p>
                <button
                  onClick={() => {
                    setOpen(false)
                    setTimeout(() => scrollToId('menu'), 300)
                  }}
                  className="bg-fire mt-2 rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Browse menu
                </button>
              </div>
            ) : (
              <>
                <div className="min-h-[140px] flex-1 space-y-3 overflow-y-auto p-6">
                  <AnimatePresence initial={false}>
                    {lines.map(({ item, qty }) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40, height: 0 }}
                        className="glass flex items-center gap-4 rounded-2xl p-3"
                      >
                        <img src={item.image} alt="" className="h-16 w-16 rounded-xl object-cover" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-semibold">{item.name}</p>
                          <p className="text-sm text-flame-400">{formatRand(item.price * qty)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => remove(item.id)}
                            aria-label="Remove one"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-5 text-center font-semibold">{qty}</span>
                          <button
                            onClick={() => add(item.id)}
                            aria-label="Add one"
                            className="bg-fire flex h-8 w-8 items-center justify-center rounded-full"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <button
                    onClick={clear}
                    className="flex items-center gap-2 pt-2 text-xs text-stone-500 hover:text-ember-500"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Clear order
                  </button>
                </div>

                <div className="space-y-4 border-t border-white/10 p-6">
                  <div className="grid grid-cols-2 gap-2 rounded-full bg-white/5 p-1">
                    {(['Delivery', 'Takeaway'] as const).map((m) => (
                      <button
                        key={m}
                        onClick={() => setMode(m)}
                        className={`relative flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold ${
                          mode === m ? 'text-white' : 'text-stone-400'
                        }`}
                      >
                        {mode === m && (
                          <motion.span layoutId="mode-pill" className="bg-fire absolute inset-0 rounded-full" />
                        )}
                        <span className="relative flex items-center gap-2">
                          {m === 'Delivery' ? <Bike className="h-4 w-4" /> : <Store className="h-4 w-4" />}
                          {m}
                        </span>
                      </button>
                    ))}
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-stone-500 focus:border-flame-500"
                  />
                  <AnimatePresence initial={false}>
                    {mode === 'Delivery' && (
                      <motion.input
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Delivery address (e.g. Zone 4, Seshego)"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-stone-500 focus:border-flame-500"
                      />
                    )}
                  </AnimatePresence>
                  <div className="flex items-end justify-between">
                    <span className="text-stone-400">Total</span>
                    <motion.span key={total} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-4xl text-fire">
                      {formatRand(total)}
                    </motion.span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    href={orderLink(name, mode, address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] py-4 font-semibold text-white shadow-[0_10px_40px_-10px_#25D366]"
                  >
                    <WhatsAppIcon /> Send order on WhatsApp
                  </motion.a>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
