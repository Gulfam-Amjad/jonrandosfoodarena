import { Flame } from 'lucide-react'

const items = [
  'Flame-Grilled Chicken',
  'Delivery',
  'Takeaway',
  'Open Daily 9AM - 11PM',
  'Card Accepted',
  'Seshego Plaza',
  'Affordable Prices',
  'Wheelchair Accessible',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-x-clip py-10">
      <div className="bg-fire -mx-10 -rotate-2 overflow-hidden py-5 shadow-[0_0_60px_-10px_rgb(249_115_22/0.6)]">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <span key={i} className="font-display flex items-center gap-6 px-6 text-3xl tracking-wider text-white sm:text-4xl">
              {t}
              <Flame className="h-6 w-6 text-gold-300" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
