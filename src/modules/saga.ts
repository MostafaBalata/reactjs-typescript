// Saga
import { effects, SagaIterator } from "redux-saga";
import { put } from "redux-saga/effects";

// Libs

// Actions
import { deleteOneSuccessActionCreator, findOneSuccessActionCreator, TFormPageAction } from "../containers/FormPage/actions";
import { getDataSuccessListPageActionCreator, TAction } from "../containers/ListPage/actions";

import { ServiceProviderFactory } from "../api/ServiceFactory";
import { accountDeletionSaga } from "./AccountDeletion/saga";

/**
 * Dispatch an action that holding the result as records
 * @param action 
 */
export function* getList(action: TAction): any {

  try {
    const moduleName: string = action.moduleName;
    const serviceProvider = ServiceProviderFactory.load(moduleName);

    const { pageNumber } = action.payload;
    const limit: number = 20;
    const page: number = pageNumber * limit;

    const records = yield serviceProvider.getList(page, limit);
    yield put(getDataSuccessListPageActionCreator(moduleName, records.body));
  } catch (error) {
    // @TODO: handle errors
    // tslint:disable-next-line
    console.error(error);
  }
}

/**
 * Find One record
 * @param action 
 */
export function* findOne(action: TFormPageAction): any {
  try {
    const moduleName: string = action.payload.moduleName;
    const serviceProvider = ServiceProviderFactory.load(moduleName);
    const response = yield serviceProvider.get(action.payload.body);
    yield put(findOneSuccessActionCreator(moduleName, response.body));

  } catch (error) {
    // tslint:disable-next-line
    console.error(error);
  }
}


/**
 * Delete One record
 * @param action 
 */
export function* deleteOne(action: TFormPageAction): any {
  try {
    const moduleName: string = action.payload.moduleName;
    const serviceProvider = ServiceProviderFactory.load(moduleName);
    const response = yield serviceProvider.delete(action.payload.body);

    yield put(deleteOneSuccessActionCreator(moduleName, response.body));
  } catch (error) {
    // tslint:disable-next-line
    console.error("Error:", error);
  }
}


export function* modulesSagas(): SagaIterator {
  yield effects.all([
    effects.fork(accountDeletionSaga)
  ]);
}