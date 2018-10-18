// Saga
import { SagaIterator } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

// Mocks and helpers
import { slice } from 'lodash';
import { data } from './mocked';

// Actions
import { getDataSuccessListPageActionCreator } from "../../containers/ListPage/actions";
import { ACCOUNT_DELETION_GET_DATA, SOURCE_NAME } from "./constants";

function* dispatchGetDataSuccess(): SagaIterator {
  // @TODO: Fix the limit
  const records = slice(data, 0, 10) as [];
  yield put(getDataSuccessListPageActionCreator(SOURCE_NAME, records));
}

export function* accountDeletionSaga(): SagaIterator {
  yield takeEvery(ACCOUNT_DELETION_GET_DATA, dispatchGetDataSuccess);
}
