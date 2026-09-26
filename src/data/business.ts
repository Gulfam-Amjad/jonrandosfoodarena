export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const localPhoto = (name: string) => `/images/jonrandos/${name}.webp`

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
  hero: localPhoto('mixed-meat-grill'),
  about: localPhoto('outdoor-seating-wide'),
  aboutSmall: localPhoto('chicken-on-grill'),
}

export const gallery = [
  { src: localPhoto('mixed-meat-grill'), alt: 'Chicken and meat cooking over the braai' },
  { src: localPhoto('food-tripe-platter'), alt: 'A generous grilled offal and meat platter' },
  { src: localPhoto('chicken-on-grill'), alt: 'Chicken grilling fresh over the coals' },
  { src: localPhoto('outdoor-seating-wide'), alt: 'Jonrandos outdoor dining area' },
  { src: localPhoto('ribs-and-pap'), alt: 'Grilled ribs served with pap and gravy' },
  { src: localPhoto('morogo-on-grill'), alt: 'Morogo cooking beside the braai' },
  { src: localPhoto('outdoor-seating-close'), alt: 'Wooden tables at the Arena' },
  { src: localPhoto('outdoor-seating-night'), alt: 'The Arena seating area at night' },
]
