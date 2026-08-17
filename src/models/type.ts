// Minimal dva model typings — enough to type models, effects, and reducers.
import type { Action as RAction } from 'redux'

export interface ActionBase extends RAction {
  type: string
  [key: string]: any
}

export type Action<T = any> = ActionBase &
  (undefined extends T ? { payload?: T } : { payload: T })

export interface EffectsCommandAPI {
  put: (action: ActionBase) => any
  call: <R = any>(fn: (...args: any[]) => Promise<R>, ...args: any[]) => R
  select: <S = any, R = any>(getState: (state: S) => R) => R
}

export type Effect = (action: ActionBase, effects: EffectsCommandAPI) => Iterator<any>

export interface Subscription {
  (api: { dispatch: (action: ActionBase) => any }): void
}

export interface Model {
  namespace: string
  state: any
  reducers?: Record<string, (state: any, action: any) => any>
  effects?: Record<string, Effect>
  subscriptions?: Record<string, Subscription>
}
