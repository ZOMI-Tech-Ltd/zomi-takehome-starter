import type { Model, Action } from './type'
import type { Dish } from '../data/dishes'

// State: collected dishes kept by id, newest first.
type State = {
  itemsById: Record<string, Dish>
  order: string[]
}

// The `collected` dva model — PROVIDED and wired into the store. Use it as-is; don't
// rewrite it. Dispatch to it and read via the exported selectors.
const model: Model = {
  namespace: 'collected',
  state: { itemsById: {}, order: [] } as State,
  effects: {},
  reducers: {
    // Collect if not collected, un-collect if already collected.
    toggle(state: State, action: Action<Dish>) {
      const dish = action.payload
      if (!dish?.id) return state
      if (state.itemsById[dish.id]) {
        const { [dish.id]: _removed, ...rest } = state.itemsById
        return { ...state, itemsById: rest, order: state.order.filter((x) => x !== dish.id) }
      }
      return {
        ...state,
        itemsById: { ...state.itemsById, [dish.id]: dish },
        order: [dish.id, ...state.order],
      }
    },
  },
}

export default model

// Selectors — read collected state from any screen. `state.collected` is this namespace.
export const selectors = {
  count: (state: any): number => (state?.collected?.order || []).length,
  isCollected: (state: any, id: string): boolean => !!state?.collected?.itemsById?.[id],
  items: (state: any): Dish[] =>
    (state?.collected?.order || [])
      .map((id: string) => state?.collected?.itemsById?.[id])
      .filter(Boolean),
}
