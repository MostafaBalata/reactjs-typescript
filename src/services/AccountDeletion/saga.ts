// Saga
import { delay, SagaIterator } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

// Mocks and helpers
import { slice } from 'lodash';
import { data } from './mocked';

// Actions
import { getDataSuccessListPageActionCreator } from "../../containers/ListPage/actions";
import { ACCOUNT_DELETION_GET_DATA, SOURCE_NAME } from "./constants";


function* dispatchGetDataSuccess(action: any): SagaIterator {
  // @TODO: Fix the limit
  try {
    const records = slice(data, action.pageNumber, 10) as [];
    // tslint:disable-next-line
    yield delay(500);
    yield put(getDataSuccessListPageActionCreator(SOURCE_NAME, records));
  } catch (error) {
    // @TODO: handle errors
  }
}

export function* accountDeletionSaga(): SagaIterator {
  yield takeEvery(ACCOUNT_DELETION_GET_DATA, dispatchGetDataSuccess);
}
