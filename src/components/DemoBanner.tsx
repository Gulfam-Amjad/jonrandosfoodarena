import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'
import { useState } from 'react'

export default function DemoBanner() {
  const [show, setShow] = useState(true)
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ delay: 3.2, type: 'spring', stiffness: 200, damping: 22 }}
          className="glass fixed bottom-5 left-5 z-40 hidden items-center gap-3 rounded-full bg-coal-950/80 py-2 pr-2 pl-4 text-xs text-stone-300 md:flex"
        >
          <Sparkles className="h-4 w-4 text-gold-400" />
          Concept website designed for Jonrandos Food Arena
          <button
            onClick={() => setShow(false)}
            aria-label="Dismiss"
            className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
