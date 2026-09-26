import { img } from './business'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  image: string
  tag?: string
}

export type MenuCategory = { id: string; label: string; items: MenuItem[] }

export const menu: MenuCategory[] = [
  {
    id: 'chicken',
    label: 'Chicken',
    items: [
      {
        id: 'quarter',
        name: 'Quarter Chicken & Chips',
        description: 'Flame-grilled quarter leg, basted in house peri-peri, with golden chips.',
        price: 65,
        image: img('1604908176997-125f25cc6f3d', 700),
        tag: 'Best seller',
      },
      {
        id: 'half',
        name: 'Half Chicken',
        description: 'Juicy half bird, grilled over flame. Choose lemon & herb, mild or hot.',
        price: 95,
        image: img('1532550907401-a500c9a57435', 700),
      },
      {
        id: 'full',
        name: 'Full Chicken Feast',
        description: 'Whole flame-grilled chicken, large chips and two sides. Feeds the family.',
        price: 185,
        image: img('1598103442097-8b74394b95c6', 700),
        tag: 'Family',
      },
      {
        id: 'crispy',
        name: 'Crispy Fried Pieces (4pc)',
        description: 'Hand-breaded, double-crunch fried chicken with secret spice blend.',
        price: 70,
        image: img('1626082927389-6cd097cdc6ec', 700),
      },
    ],
  },
  {
    id: 'combos',
    label: 'Combos',
    items: [
      {
        id: 'arena',
        name: 'Arena Combo',
        description: 'Quarter chicken, chips, coleslaw and a 440ml cold drink.',
        price: 89,
        image: img('1562967914-608f82629710', 700),
        tag: 'Value',
      },
      {
        id: 'burger-combo',
        name: 'Chicken Burger Combo',
        description: 'Grilled fillet burger, cheese, lettuce, peri mayo, chips and a drink.',
        price: 79,
        image: img('1568901346375-23c9450c58cd', 700),
      },
      {
        id: 'bucket',
        name: 'Sharing Bucket (10pc)',
        description: '10 crispy pieces, 2 large chips, 2L cold drink. Made for the squad.',
        price: 249,
        image: img('1529692236671-f1f6cf9683ba', 700),
        tag: 'Share',
      },
    ],
  },
  {
    id: 'wings',
    label: 'Wings',
    items: [
      {
        id: 'wings6',
        name: '6 Flame Wings',
        description: 'Charred, sticky, finger-licking. Sweet chilli, BBQ or peri-peri.',
        price: 55,
        image: img('1567620832903-9fc6debc209f', 700),
      },
      {
        id: 'wings12',
        name: '12 Flame Wings',
        description: 'Double up. Mix any two sauces.',
        price: 99,
        image: img('1527477396000-e27163b481c2', 700),
        tag: 'Hot',
      },
      {
        id: 'wings24',
        name: 'Wing Platter (24)',
        description: '24 wings, chips and dipping sauces. Perfect for match day.',
        price: 189,
        image: img('1608039829572-78524f79c4c7', 700),
      },
    ],
  },
  {
    id: 'kota',
    label: 'Kota & Sides',
    items: [
      {
        id: 'kota',
        name: 'Arena Kota',
        description: 'Quarter loaf loaded with chips, polony, russian, cheese, egg and atchar.',
        price: 45,
        image: img('1571091718767-18b5b1457add', 700),
        tag: 'Kasi classic',
      },
      {
        id: 'chips',
        name: 'Large Chips',
        description: 'Crispy, salted and dusted with our chicken spice.',
        price: 30,
        image: img('1573080496219-bb080dd4f877', 700),
      },
      {
        id: 'pap',
        name: 'Pap & Chakalaka',
        description: 'Smooth pap with spicy home-style chakalaka.',
        price: 25,
        image: img('1512621776951-a57141f2eefd', 700),
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      {
        id: 'cooldrink',
        name: 'Cold Drink 440ml',
        description: 'Coke, Fanta, Sprite or Stoney.',
        price: 18,
        image: img('1622483767028-3f66f32aef97', 700),
      },
      {
        id: 'cooldrink2l',
        name: 'Cold Drink 2L',
        description: 'Share the fizz with the table.',
        price: 35,
        image: img('1437418747212-8d9709afab22', 700),
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        id: 'cake',
        name: 'Chocolate Cake Slice',
        description: 'Rich, moist, decadent. The perfect finish.',
        price: 35,
        image: img('1578985545062-69928b1d9587', 700),
        tag: 'Sweet',
      },
    ],
  },
]

export const allItems = menu.flatMap((c) => c.items)

export const formatRand = (n: number) => `R${n.toFixed(2)}`
