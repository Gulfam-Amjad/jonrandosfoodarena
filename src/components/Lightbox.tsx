import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import { setScrollLocked } from '../lib/scroll'

type Props = {
  images: { src: string; alt: string }[]
  index: number | null
  onChange: (i: number | null) => void
}

export default function Lightbox({ images, index, onChange }: Props) {
  const open = index !== null

  useEffect(() => {
    setScrollLocked(open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null)
      if (e.key === 'ArrowRight') onChange((index! + 1) % images.length)
      if (e.key === 'ArrowLeft') onChange((index! - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index, images.length, onChange])

  const step = (d: number) => onChange((index! + d + images.length) % images.length)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[85] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onChange(null)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index].src}
              alt={images[index].alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-stone-400">
            {images[index].alt} · {index + 1} / {images.length}
          </p>
          <button
            aria-label="Close"
            className="glass absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full"
          >
            <X />
          </button>
          {[-1, 1].map((d) => (
            <button
              key={d}
              aria-label={d < 0 ? 'Previous' : 'Next'}
              onClick={(e) => {
                e.stopPropagation()
                step(d)
              }}
              className={`glass absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full hover:bg-white/10 ${
                d < 0 ? 'left-4' : 'right-4'
              }`}
            >
              {d < 0 ? <ChevronLeft /> : <ChevronRight />}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
