export default function Logo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-g" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#dc2626" />
          <stop offset="0.6" stopColor="#f97316" />
          <stop offset="1" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#1f1a17" />
      <path
        d="M32 8c4 9 14 14 14 27a14 14 0 0 1-28 0c0-7 4-11 7-14 0 5 2 8 5 9-1-8 0-15 2-22z"
        fill="url(#logo-g)"
      />
    </svg>
  )
}
