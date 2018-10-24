// Saga
import { effects, SagaIterator } from "redux-saga";
import { put } from "redux-saga/effects";

// Libs

// Actions
import { deleteOneSuccessActionCreator, findOneSuccessActionCreator, TFormPageAction } from "../containers/FormPage/actions";
import { getDataSuccessListPageActionCreator, TAction } from "../containers/ListPage/actions";

import { ServiceProviderFactory } from "../api/ServiceFactory";
import { getSagas } from "../settings";

import { NotificationCenter } from "../lib/notification/notification";

/**
 * Dispatch an action that holding the result as records
 * @param action 
 */
export function* getList(action: TAction): any {
  const moduleName: string = action.moduleName;

  try {
    const serviceProvider = ServiceProviderFactory.load(moduleName);

    const { pageNumber } = action.payload;
    const limit: number = 20;
    const page: number = pageNumber * limit;

    const records = yield serviceProvider.getList(page, limit);
    yield put(getDataSuccessListPageActionCreator(moduleName, records.body));
  } catch (error) {
    // @TODO: handle errors
    NotificationCenter.error("ERR_0003", error, moduleName);
  }
}

/**
 * Find One record
 * @param action 
 */
export function* findOne(action: TFormPageAction): any {
  const moduleName: string = action.payload.moduleName;

  try {
    const serviceProvider = ServiceProviderFactory.load(moduleName);
    const response = yield serviceProvider.get(action.payload.body);
    yield put(findOneSuccessActionCreator(moduleName, response.body));

    NotificationCenter.success(`${moduleName} is loaded successfuly.`);

  } catch (error) {
    NotificationCenter.error("ERR_0003", error, moduleName);
  }
}


/**
 * Delete One record
 * @param action 
 */
export function* deleteOne(action: TFormPageAction): any {
  const moduleName: string = action.payload.moduleName;

  try {
    const serviceProvider = ServiceProviderFactory.load(moduleName);
    const response = yield serviceProvider.delete(action.payload.body);

    yield put(deleteOneSuccessActionCreator(moduleName, response.body));

    // TODO: Notify someone

  } catch (error) {
    NotificationCenter.error("ERR_0001", error, moduleName);
  }
}


export function* modulesSagas(): SagaIterator {
  yield effects.all(getSagas());
}