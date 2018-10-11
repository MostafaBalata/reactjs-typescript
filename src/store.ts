import { applyMiddleware, createStore } from 'redux'
import { createReducer } from './reducers'

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
export const store = createStore(
  createReducer(),
  applyMiddleware()
)