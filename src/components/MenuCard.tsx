import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import type { MouseEvent } from 'react'
import { formatRand, type MenuItem } from '../data/menu'
import { useCart } from '../lib/cart'

export default function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { add, remove, lines } = useCart()
  const qty = lines.find((l) => l.item.id === item.id)?.qty ?? 0

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const reset = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group glass relative h-full overflow-hidden rounded-3xl bg-coal-900/50 transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgb(249_115_22/0.45)]"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal-900 via-coal-900/20 to-transparent" />
          {item.tag && (
            <span className="bg-fire absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase">
              {item.tag}
            </span>
          )}
          <span className="font-display absolute right-4 bottom-3 text-4xl text-white drop-shadow-lg">
            {formatRand(item.price).replace('.00', '')}
          </span>
        </div>

        <div className="p-6" style={{ transform: 'translateZ(30px)' }}>
          <h3 className="font-display text-3xl tracking-wide">{item.name}</h3>
          <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-stone-400">{item.description}</p>

          <div className="mt-5 flex items-center justify-between">
            {qty === 0 ? (
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => add(item.id)}
                className="bg-fire flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold"
              >
                <Plus className="h-4 w-4" /> Add to order
              </motion.button>
            ) : (
              <div className="flex w-full items-center justify-between rounded-full border border-flame-500/40 bg-flame-500/10 p-1">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => remove(item.id)}
                  aria-label="Remove one"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Minus className="h-4 w-4" />
                </motion.button>
                <motion.span key={qty} initial={{ scale: 1.6 }} animate={{ scale: 1 }} className="font-display text-2xl">
                  {qty} in order
                </motion.span>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => add(item.id)}
                  aria-label="Add one"
                  className="bg-fire flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
