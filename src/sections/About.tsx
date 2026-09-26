import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { useRef } from 'react'
import Counter from '../components/Counter'
import SectionHeading from '../components/SectionHeading'
import { photos } from '../data/business'

const stats = [
  { to: 5, decimals: 1, suffix: '★', label: 'Google rating' },
  { to: 7, suffix: '', label: 'Days a week' },
  { to: 14, suffix: 'h', label: 'Open daily' },
]

const points = ['Grilled fresh on order', 'Kasi prices, premium taste', 'Dine in, takeaway or delivery']

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 120])

  return (
    <section id="about" ref={ref} className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative h-[480px] sm:h-[560px]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 left-0 h-[80%] w-[75%] overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img
              src={photos.about}
              alt="Jonrandos outdoor dining area"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 to-transparent" />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute right-0 bottom-0 h-[50%] w-[52%] overflow-hidden rounded-[2rem] border-4 border-coal-950 shadow-2xl"
          >
            <img
              src={photos.aboutSmall}
              alt="Chicken grilling over the coals at Jonrandos"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 0.3 }}
            className="glass absolute top-[58%] left-[8%] rounded-2xl bg-coal-900/70 px-5 py-4"
          >
            <p className="font-display text-5xl leading-none text-fire">100% KASI</p>
            <p className="text-sm text-stone-400">Proudly Seshego</p>
          </motion.div>
        </div>

        <div>
          <SectionHeading
            center={false}
            eyebrow="Our story"
            title={
              <>
                Real flavour. <span className="text-fire">Real Seshego.</span>
              </>
            }
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="-mt-6 text-lg leading-relaxed text-stone-300"
          >
            Jonrandos Food Arena is the go-to chicken spot at Seshego Plaza, Zone 7. We keep it simple: quality
            chicken, flame-grilled with our own spice, served hot and priced for everyone. Whether you're grabbing a
            quick lunch, feeding the family or ordering in for the game, we've got you.
          </motion.p>

          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="flex items-center gap-3 text-stone-200"
              >
                <span className="bg-fire flex h-6 w-6 items-center justify-center rounded-full">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {p}
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <p className="font-display text-5xl text-fire">
                  <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-stone-400">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
