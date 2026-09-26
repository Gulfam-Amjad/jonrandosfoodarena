export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const business = {
  name: 'Jonrandos Food Arena',
  shortName: 'Jonrandos',
  category: 'Poultry Restaurant',
  tagline: "Seshego's Flame-Grilled Favourite",
  phoneDisplay: '+27 76 487 3437',
  phone: '+27764873437',
  whatsapp: '27764873437',
  address: {
    line1: 'Seshego Plaza, Zone 7',
    city: 'Polokwane',
    region: 'Limpopo',
    postalCode: '0742',
    country: 'South Africa',
    plusCode: '49XH+58 Pietersburg',
  },
  coords: { lat: -23.8521225, lng: 29.3783202 },
  hours: { open: 9, close: 23 },
  rating: 5.0,
  features: ['Delivery', 'Takeaway', 'Card accepted', 'Wheelchair accessible'],
  review: {
    author: 'Albert TD Monaga',
    badge: 'Local Guide',
    text: 'Affordable prices and Delicious meals. I recommend to anyone to Dine with Jonrandos Food Arena.',
    scores: { Food: 5, Service: 5, Atmosphere: 5 },
    source: 'Google',
  },
  mapsUrl:
    'https://www.google.com/maps/place/Jonrandos+food+arena/data=!4m2!3m1!1s0x1ec727f6e7d2080b:0x15bb2820b78d8eab',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-23.8521225,29.3783202',
  mapEmbed: 'https://maps.google.com/maps?q=-23.8521225,29.3783202&z=16&output=embed',
}

export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const whatsappLink = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`

export const photos = {
  hero: img('1598103442097-8b74394b95c6', 1400),
  about: img('1604908176997-125f25cc6f3d', 1000),
  aboutSmall: img('1567620832903-9fc6debc209f', 600),
}

export const gallery = [
  { src: img('1626082927389-6cd097cdc6ec', 900), alt: 'Crispy fried chicken' },
  { src: img('1532550907401-a500c9a57435', 900), alt: 'Grilled chicken plate' },
  { src: img('1527477396000-e27163b481c2', 900), alt: 'Saucy chicken wings' },
  { src: img('1544025162-d76694265947', 900), alt: 'Flame-grilled platter' },
  { src: img('1573080496219-bb080dd4f877', 900), alt: 'Golden chips' },
  { src: img('1568901346375-23c9450c58cd', 900), alt: 'Loaded burger' },
  { src: img('1578985545062-69928b1d9587', 900), alt: 'Chocolate cake' },
  { src: img('1562967914-608f82629710', 900), alt: 'Chicken bucket' },
]
