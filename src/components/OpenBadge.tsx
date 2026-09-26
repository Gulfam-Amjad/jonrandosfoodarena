import { useEffect, useState } from 'react'
import { getOpenStatus } from '../lib/hours'

export default function OpenBadge({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState(getOpenStatus)

  useEffect(() => {
    const t = setInterval(() => setStatus(getOpenStatus()), 60000)
    return () => clearInterval(t)
  }, [])

  return (
    <span
      className={`glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${className}`}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          status.isOpen ? 'animate-pulse-ring bg-green-500' : 'bg-ember-500'
        }`}
      />
      {status.label}
    </span>
  )
}
