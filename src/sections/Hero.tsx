import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Bike, Flame, Star, UtensilsCrossed } from 'lucide-react'
import { useRef } from 'react'
import Button from '../components/Button'
import Embers from '../components/Embers'
import OpenBadge from '../components/OpenBadge'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { business, photos, whatsappLink } from '../data/business'
import { scrollToId } from '../lib/scroll'

const ease = [0.22, 1, 0.36, 1] as const
const lines = [
  ['SESHEGO’S'],
  ['FLAME-GRILLED', 'fire'],
  ['FAVOURITE'],
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-flame-600/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-ember-600/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
        />
      </div>
      <Embers />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <OpenBadge />
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> {business.rating.toFixed(1)} on Google
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(3.25rem,7.2vw,6.75rem)] leading-[0.88] tracking-wide whitespace-nowrap">
            {lines.map(([word, style], i) => (
              <span key={word} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${style === 'fire' ? 'text-fire' : ''}`}
                  initial={{ y: '110%', rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 1.8 + i * 0.12, duration: 0.9, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-stone-300"
          >
            Juicy chicken, crispy chips and kasi flavour, grilled fresh every day at{' '}
            <span className="font-semibold text-white">Seshego Plaza, Zone 7</span>. Affordable prices. Delicious
            meals. No compromises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href={whatsappLink("Hi Jonrandos! I'd like to place an order.")} external>
              <WhatsAppIcon /> Order on WhatsApp
            </Button>
            <Button variant="ghost" onClick={() => scrollToId('menu')}>
              <UtensilsCrossed className="h-4 w-4" /> View Menu
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
            className="mt-12 flex flex-wrap gap-8 text-sm text-stone-400"
          >
            <div className="flex items-center gap-2">
              <Bike className="h-5 w-5 text-flame-400" /> Delivery available
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-flame-400" /> Open daily 9AM - 11PM
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.9, duration: 1.1, ease }}
          className="relative mx-auto aspect-square w-full max-w-[560px]"
        >
          <div className="absolute inset-6 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-flame-500/30" />
          <div className="bg-fire absolute inset-12 rounded-full opacity-30 blur-3xl" />
          <div className="absolute inset-12 overflow-hidden rounded-full border-4 border-coal-800 shadow-2xl shadow-black/60">
            <motion.img
              src={photos.hero}
              alt="Flame-grilled chicken at Jonrandos"
              style={{ y: imgY, scale: imgScale }}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>

          <motion.div
            className="glass absolute top-10 -left-2 flex items-center gap-3 rounded-2xl bg-coal-900/60 p-3 pr-5 sm:left-0"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="bg-fire flex h-11 w-11 items-center justify-center rounded-xl">
              <Star className="h-5 w-5 fill-white" />
            </span>
            <div>
              <p className="font-display text-2xl leading-none">5.0 RATED</p>
              <p className="text-xs text-stone-400">Google reviews</p>
            </div>
          </motion.div>

          <motion.div
            className="glass absolute -right-2 bottom-14 flex items-center gap-3 rounded-2xl bg-coal-900/60 p-3 pr-5 sm:right-0"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/90">
              <Bike className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-2xl leading-none">FAST DELIVERY</p>
              <p className="text-xs text-stone-400">Across Seshego</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-fire absolute right-10 top-4 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full text-center shadow-xl"
            animate={{ rotate: [12, -8, 12] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-[10px] font-bold tracking-widest">FROM</span>
            <span className="font-display text-3xl leading-none">R45</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId('about')}
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.3em] text-stone-500 md:flex"
      >
        SCROLL
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  )
}
