import { motion } from 'framer-motion'
import { Accessibility, Bike, CreditCard, ShoppingBag } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const features = [
  { icon: Bike, title: 'Delivery', text: 'Hot food brought to your door across Seshego and surrounds.' },
  { icon: ShoppingBag, title: 'Takeaway', text: 'Order ahead on WhatsApp, skip the queue, grab and go.' },
  { icon: CreditCard, title: 'Card accepted', text: 'Tap, swipe or cash. Paying is as easy as eating.' },
  { icon: Accessibility, title: 'Wheelchair accessible', text: 'Everyone is welcome at the Arena. Easy access for all.' },
]

export default function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Jonrandos"
          title={
            <>
              Made <span className="text-fire">easy</span> for you
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              className="group glass relative overflow-hidden rounded-3xl p-8"
            >
              <div className="bg-fire absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
              <motion.div
                variants={{ hover: { rotate: [0, -12, 12, 0], scale: 1.1 } }}
                transition={{ duration: 0.6 }}
                className="bg-fire mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg shadow-flame-500/30"
              >
                <Icon className="h-7 w-7" />
              </motion.div>
              <h3 className="font-display text-3xl tracking-wide">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{text}</p>
              <span className="font-display absolute right-6 bottom-4 text-7xl text-white/[0.04]">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
