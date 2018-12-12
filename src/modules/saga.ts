// Saga
import { SagaIterator } from "redux-saga";
import { put } from "redux-saga/effects";
// Libs

// Actions
import { postOneSuccessActionCreator, deleteOneSuccessActionCreator, findOneSuccessActionCreator, TFormPageAction } from "../containers/FormPage/actions";
import { getDataSuccessListPageActionCreator, IListPageGetDataAction } from "../containers/ListPage/actions";

import { ServiceProviderFactory } from "../api/ServiceFactory";
import { getSagas } from "../settings";

import { NotificationCenter } from "../lib/notification/notification";

/**
 * Dispatch an action that holding the result as records
 * @param action 
 */
export function* getList(action: IListPageGetDataAction): any {
  const moduleName: string = action.moduleName;

  try {
    const serviceProvider = ServiceProviderFactory.load(moduleName);

    const { pageNumber, search } = action.payload;
    const limit: number = 20;

    const records = yield serviceProvider.getList(pageNumber, limit, search);    
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

/**
 * Delete One record
 * @param action 
 */
export function* postOne(action: TFormPageAction): any {
  const moduleName: string = action.payload.moduleName;

  try {
    const serviceProvider = ServiceProviderFactory.load(moduleName);
    const id = action.payload.body;
    const formData = action.payload.formData;
    const response = yield serviceProvider.post(id, formData);

    yield put(postOneSuccessActionCreator(moduleName, response.body));
    NotificationCenter.success("Request has been sent successfully");
    // TODO: Notify someone

  } catch (error) {
    NotificationCenter.error("ERR_0001", error, moduleName);
  }
}

export function getSagasFromModule(): SagaIterator[] {
  return getSagas();
}