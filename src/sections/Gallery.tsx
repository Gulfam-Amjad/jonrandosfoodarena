import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import SectionHeading from '../components/SectionHeading'
import { gallery } from '../data/business'

const spans = ['row-span-2', '', '', 'row-span-2', '', 'row-span-2', 'row-span-2', '']

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Eat with your <span className="text-fire">eyes</span>
            </>
          }
          subtitle="A taste of what's coming out of the Arena kitchen."
        />
        <div className="grid grid-flow-dense auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.button
              key={g.src}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl ${spans[i]}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/0 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-display text-2xl tracking-wide">{g.alt}</span>
                <span className="bg-fire flex h-10 w-10 items-center justify-center rounded-full">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox images={gallery} index={index} onChange={setIndex} />
    </section>
  )
}
