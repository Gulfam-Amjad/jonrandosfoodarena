import { business } from '../data/business'

/** Current time in South Africa (UTC+2, no DST), regardless of the visitor's timezone. */
export function saNow() {
  const now = new Date()
  return new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 2 * 3600000)
}

export function getOpenStatus() {
  const d = saNow()
  const h = d.getHours() + d.getMinutes() / 60
  const { open, close } = business.hours
  const isOpen = h >= open && h < close
  const label = isOpen
    ? close - h <= 1
      ? `Closing soon · ${close - 12}PM`
      : `Open now · until ${close - 12}PM`
    : `Closed · opens ${open}AM`
  return { isOpen, label, day: d.getDay() }
}
