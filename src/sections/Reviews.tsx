import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { business } from '../data/business'

export default function Reviews() {
  const { review } = business
  return (
    <section id="reviews" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              Rated <span className="text-fire">5.0</span> on Google
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14"
        >
          <div className="bg-fire absolute -top-32 -left-32 h-64 w-64 rounded-full opacity-20 blur-3xl" />
          <Quote className="absolute top-8 right-8 h-24 w-24 text-flame-500/15" />

          <div className="mb-6 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 260, damping: 14 }}
              >
                <Star className="h-7 w-7 fill-gold-400 text-gold-400" />
              </motion.span>
            ))}
          </div>

          <blockquote className="font-display text-4xl leading-tight tracking-wide sm:text-5xl md:text-6xl">
            “Affordable prices and <span className="text-fire">delicious meals.</span> I recommend to anyone to dine
            with Jonrandos Food Arena.”
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-fire flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl">
                {review.author
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-stone-400">
                  {review.badge} · via {review.source}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {Object.entries(review.scores).map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-white/5 px-4 py-2 text-center">
                  <p className="font-display text-2xl text-fire">{v}/5</p>
                  <p className="text-xs text-stone-400">{k}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-stone-400">Enjoyed your meal? Help your neighbours find us.</p>
          <Button href={business.mapsUrl} external variant="ghost">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> Leave us a Google review
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
