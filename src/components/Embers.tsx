import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function Embers({ count = 28 }: { count?: number }) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 8,
        drift: (Math.random() - 0.5) * 120,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {embers.map((e) => (
        <motion.span
          key={e.id}
          className="absolute bottom-0 rounded-full bg-flame-400"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            boxShadow: '0 0 12px 2px rgb(249 115 22 / 0.8)',
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '-100vh', x: e.drift, opacity: [0, 1, 1, 0] }}
          transition={{ duration: e.duration, delay: e.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}
