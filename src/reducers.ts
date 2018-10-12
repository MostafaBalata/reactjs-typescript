/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from "redux";

import { appReducer } from "./containers/App/reducers";
/**
 * Creates the main reducer with the dynamically injected ones
 */
export function createReducer(): Reducer {
  return combineReducers({
    app: appReducer,
  });
}
