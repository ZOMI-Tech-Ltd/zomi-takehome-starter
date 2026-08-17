// Fictional dish fixtures (provided). Illustrative content only.

export type Dish = {
  id: string
  name: string
  image: string
  merchant: { name: string; distance: string }
  popularType: string // badge label, e.g. "Popular", "Featured"
  cardType: 'original' | 'featured'
}

export const DISHES: Dish[] = [
  {
    id: '1',
    name: 'Miso Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    merchant: { name: 'Haru & Co.', distance: '1.2km' },
    popularType: 'Popular',
    cardType: 'featured',
  },
  {
    id: '2',
    name: 'Mala Crispy Chicken',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    merchant: { name: 'Saffron Alley', distance: '2.6km' },
    popularType: 'Popular',
    cardType: 'featured',
  },
  {
    id: '3',
    name: 'Aburi Salmon Donburi',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    merchant: { name: 'Marito House', distance: '0.9km' },
    popularType: 'Trending',
    cardType: 'featured',
  },
  {
    id: '4',
    name: 'Strawberry Matcha',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800',
    merchant: { name: 'Lumen Café', distance: '2.4km' },
    popularType: 'Popular',
    cardType: 'original',
  },
  {
    id: '5',
    name: 'Pistachio Croissant',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    merchant: { name: 'Kinami Bakery', distance: '1.1km' },
    popularType: 'New',
    cardType: 'original',
  },
  {
    id: '6',
    name: 'Black Sesame Tiramisu',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
    merchant: { name: 'Lumen Café', distance: '2.4km' },
    popularType: 'Popular',
    cardType: 'original',
  },
  {
    id: '7',
    name: 'Truffle Udon',
    image: 'https://images.unsplash.com/photo-1618889482923-38250401a84e?w=800',
    merchant: { name: 'Haru & Co.', distance: '1.2km' },
    popularType: 'Chef pick',
    cardType: 'original',
  },
  {
    id: '8',
    name: 'Yuzu Cheesecake',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800',
    merchant: { name: 'Kinami Bakery', distance: '1.1km' },
    popularType: 'New',
    cardType: 'original',
  },
]
