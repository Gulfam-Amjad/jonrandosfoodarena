import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = { eyebrow: string; title: ReactNode; subtitle?: string; center?: boolean }

export default function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}
    >
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-flame-400 uppercase">
        <span className="h-px w-8 bg-flame-500" />
        {eyebrow}
        {center && <span className="h-px w-8 bg-flame-500" />}
      </span>
      <h2 className="font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl md:text-7xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-stone-400">{subtitle}</p>}
    </motion.div>
  )
}
