// Sagas
import { effects } from "redux-saga";
import { ForkEffect } from "redux-saga/effects";
import { moduleSaga } from "./saga";

// Service Factory
import { AccountDeletionSercviceProvider } from "./ApiServiceProvider";

// Reducers
import { FormReducer, ListReducer } from "./reducers";

// Modules Containers
import { FormPageConnector } from './FormPage';
import { ListPageConnector } from './ListPage';
import { MODULE_NAME } from "./constants";
import { getTitleFromModuleName, convertModuleNameUrl } from "../../utils/services";

/***
 * Saga forks
 */

export const sagas: ForkEffect[] = [
  effects.fork(moduleSaga),
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

const formStoreName: string = `${MODULE_NAME}FormReducer`;
const listStoreName: string = `${MODULE_NAME}ListReducer`;
export let reducers: any = {}
reducers[`${listStoreName}`] = ListReducer;
reducers[`${formStoreName}`] = FormReducer;

/**
 * Routes
 */
export const routeElement = {
  "content": getTitleFromModuleName(MODULE_NAME),
  icon: "copy", link: `/${convertModuleNameUrl(MODULE_NAME)}`,
  component: ListPageConnector(listStoreName),
  formComponent: FormPageConnector(formStoreName)
}
