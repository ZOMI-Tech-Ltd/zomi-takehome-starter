import { DISHES, type Dish } from '../data/dishes'

export type { Dish }

export type Section = {
  title: string
  cardType: Dish['cardType']
  dishes: Dish[]
}

// Simple data boundary (provided). Returns the mock dishes; swap for a real API later.
export const dishService = {
  getDishes(): Dish[] {
    return DISHES
  },

  // Convenience: dishes grouped into feed sections by card type.
  getSections(): Section[] {
    return [
      {
        title: 'Featured on Zomi',
        cardType: 'featured',
        dishes: DISHES.filter((d) => d.cardType === 'featured'),
      },
      {
        title: 'Popular near you',
        cardType: 'original',
        dishes: DISHES.filter((d) => d.cardType === 'original'),
      },
    ]
  },
}
