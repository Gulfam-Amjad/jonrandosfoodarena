import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { business, whatsappLink } from '../data/business'
import { allItems, formatRand, type MenuItem } from '../data/menu'

type CartLine = { item: MenuItem; qty: number }

type CartCtx = {
  lines: CartLine[]
  count: number
  total: number
  open: boolean
  setOpen: (v: boolean) => void
  add: (id: string) => void
  remove: (id: string) => void
  clear: () => void
  orderLink: (name: string, mode: 'Delivery' | 'Takeaway', address: string) => string
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [qty, setQty] = useState<Record<string, number>>({})
  const [open, setOpen] = useState(false)

  const value = useMemo<CartCtx>(() => {
    const lines = Object.entries(qty)
      .filter(([, q]) => q > 0)
      .map(([id, q]) => ({ item: allItems.find((i) => i.id === id)!, qty: q }))
    const total = lines.reduce((s, l) => s + l.item.price * l.qty, 0)
    return {
      lines,
      total,
      count: lines.reduce((s, l) => s + l.qty, 0),
      open,
      setOpen,
      add: (id) => setQty((p) => ({ ...p, [id]: (p[id] ?? 0) + 1 })),
      remove: (id) => setQty((p) => ({ ...p, [id]: Math.max(0, (p[id] ?? 0) - 1) })),
      clear: () => setQty({}),
      orderLink: (name, mode, address) => {
        const body = lines.map((l) => `• ${l.qty} x ${l.item.name} - ${formatRand(l.item.price * l.qty)}`).join('\n')
        const msg =
          `Hi ${business.shortName}! I'd like to order:\n\n${body}\n\n*Total: ${formatRand(total)}*\n` +
          `${mode}${mode === 'Delivery' && address ? ` to: ${address}` : ''}` +
          `${name ? `\nName: ${name}` : ''}`
        return whatsappLink(msg)
      },
    }
  }, [qty, open])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useCart() {
  const c = useContext(Ctx)
  if (!c) throw new Error('useCart must be used inside CartProvider')
  return c
}
