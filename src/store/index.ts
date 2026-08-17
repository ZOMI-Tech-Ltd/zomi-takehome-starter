import { create } from 'dva-core'
import createLoading from 'dva-loading'
import collected from '../models/collected'

// dva setup: create the instance, add the loading plugin, register models,
// start, and expose the underlying redux store for react-redux.
const app: any = create()
app.use(createLoading())
app.model(collected)
app.start()

export const store = app._store
export const dispatch = store.dispatch
export default app
