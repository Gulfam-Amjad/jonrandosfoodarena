import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = { to: number; decimals?: number; suffix?: string; duration?: number }

export default function Counter({ to, decimals = 0, suffix = '', duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: setValue })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
