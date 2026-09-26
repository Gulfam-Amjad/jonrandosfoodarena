import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'fire' | 'ghost'
  className?: string
  external?: boolean
}

export default function Button({ children, href, onClick, variant = 'fire', className = '', external }: Props) {
  const base =
    'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors'
  const styles =
    variant === 'fire'
      ? 'bg-fire text-white shadow-[0_10px_40px_-10px_rgb(249_115_22/0.7)]'
      : 'glass text-stone-100 hover:bg-white/10'
  const props = {
    className: `group ${base} ${styles} ${className}`,
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
  }
  const shine = variant === 'fire' && (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  )

  if (href)
    return (
      <motion.a href={href} {...props} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {shine}
        {children}
      </motion.a>
    )
  return (
    <motion.button type="button" onClick={onClick} {...props}>
      {shine}
      {children}
    </motion.button>
  )
}
