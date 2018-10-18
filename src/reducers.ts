/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from "redux";

import { homePageReducer } from "./containers/HomePage/reducers";
import { listPageReducer } from "./containers/ListPage/reducers";
import { accountDeletionReducer } from "./services/AccountDeletion/reducers";

/**
 * Creates the main reducer with the dynamically injected ones
 */
export function createReducer(): Reducer {
  return combineReducers({
    homePage: homePageReducer,
    list: listPageReducer,
    accountDeletion: accountDeletionReducer
  });
}
