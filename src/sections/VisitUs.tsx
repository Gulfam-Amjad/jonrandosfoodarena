import { motion } from 'framer-motion'
import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import Button from '../components/Button'
import OpenBadge from '../components/OpenBadge'
import SectionHeading from '../components/SectionHeading'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { business, DAYS, whatsappLink } from '../data/business'
import { saNow } from '../lib/hours'

const order = [1, 2, 3, 4, 5, 6, 0]

export default function VisitUs() {
  const today = saNow().getDay()
  const { address } = business

  return (
    <section id="visit" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit us"
          title={
            <>
              Pull up to the <span className="text-fire">Arena</span>
            </>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass flex flex-col gap-8 rounded-[2rem] p-8"
          >
            <div className="flex gap-4">
              <span className="bg-fire flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl tracking-wide">Address</p>
                <p className="text-stone-300">{address.line1}</p>
                <p className="text-stone-400">
                  {address.city}, {address.postalCode}, {address.region}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="bg-fire flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl tracking-wide">Call or WhatsApp</p>
                <a href={`tel:${business.phone}`} className="text-stone-300 hover:text-flame-400">
                  {business.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="bg-fire flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <Clock className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="font-display text-2xl tracking-wide">Hours</p>
                  <OpenBadge className="text-xs" />
                </div>
                <ul className="space-y-1">
                  {order.map((d) => (
                    <li
                      key={d}
                      className={`flex justify-between rounded-lg px-3 py-1.5 text-sm ${
                        d === today ? 'bg-flame-500/15 font-semibold text-flame-300' : 'text-stone-400'
                      }`}
                    >
                      <span>
                        {DAYS[d]}
                        {d === today && ' (today)'}
                      </span>
                      <span>09:00 - 23:00</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
              <Button href={business.directionsUrl} external>
                <Navigation className="h-4 w-4" /> Get directions
              </Button>
              <Button href={whatsappLink('Hi Jonrandos!')} external variant="ghost">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10"
          >
            <iframe
              title="Jonrandos Food Arena location"
              src={business.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.3] invert-[0.92] hue-rotate-180"
            />
            <div className="glass pointer-events-none absolute top-5 left-5 rounded-2xl bg-coal-950/80 px-4 py-3">
              <p className="font-display text-xl tracking-wide">Jonrandos Food Arena</p>
              <p className="text-xs text-stone-400">{address.plusCode}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
