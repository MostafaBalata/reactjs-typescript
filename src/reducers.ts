/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from "redux";

import { homePageReducer } from "./containers/HomePage/reducers";

import { getReducers } from './settings';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export function createReducer(): Reducer {
  return combineReducers({
    homePage: homePageReducer,
    // tslint:disable-next-line
    ...getReducers()
  });
}
