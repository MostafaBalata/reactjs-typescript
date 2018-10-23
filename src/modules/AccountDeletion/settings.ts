// Sagas
import { effects } from "redux-saga";
import { ForkEffect } from "redux-saga/effects";
import { accountDeletionSaga } from "./saga";

// Service Factory
import { AccountDeletionSercviceProvider } from "./ApiServiceProvider";

// Reducers
import { accountDeletionFormReducer, accountDeletionListReducer } from "./reducers";

// Modules Containers
import AccountDeletionFormPage from './containers/FormPage';
import AccountDeletionListPage from './containers/ListPage';

/***
 * Saga forks
 */
export const sagas: ForkEffect[] = [
  effects.fork(accountDeletionSaga),
]

/**
 *  Service factory
 */
export const getServiceProviderInstance = () => {
  return new AccountDeletionSercviceProvider();
}

/***
 * 
 * Reducers
 */
export const reducers = {
  accountDeletionListReducer,
  accountDeletionFormReducer
}


/**
 * Routes
 */
export const routeElement = { "content": "Account Deletion", icon: "copy", link: "/account-deletion", component: AccountDeletionListPage, formComponent: AccountDeletionFormPage }
