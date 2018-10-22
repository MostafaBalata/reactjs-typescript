// Saga
import { delay, SagaIterator } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

// Mocks and helpers
import { find, slice } from 'lodash';
import { data } from './mocked';

// Actions
import { findOneSuccessActionCreator, TFormPageAction } from "../../containers/FormPage/actions";
import { getDataSuccessListPageActionCreator, TAction } from "../../containers/ListPage/actions";
import { ACCOUNT_DELETION_GET_DATA, ACCOUNT_DELETION_GET_ONE_RECORD, SOURCE_NAME } from "./constants";

/**
 * Dispatch an action that holding the result as records
 * @param action 
 */
function* getListOnSuccess(action: TAction): any {

  try {
    const limit: number = 10;
    const page: number = action.pageNumber * limit;
    const records = slice(data, page, page + limit).map((record) => {
      return record;
    }) as [];

    // tslint:disable-next-line
    yield delay(500);
    yield put(getDataSuccessListPageActionCreator(SOURCE_NAME, records));
  } catch (error) {
    // @TODO: handle errors
  }
}

/**
 * Find One record
 * @param action 
 */
function* findOne(action: TFormPageAction): any {
  try {

    const form: any = find(data, (record) => action.id === record.jiraTrackId)
    yield put(findOneSuccessActionCreator(SOURCE_NAME, form));
  } catch (error) {
    //
  }
}

export function* accountDeletionSaga(): SagaIterator {
  yield takeEvery(ACCOUNT_DELETION_GET_DATA, getListOnSuccess);
  yield takeEvery(ACCOUNT_DELETION_GET_ONE_RECORD, findOne);

}
