// Saga
import { SagaIterator, } from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { getList, findOne, deleteOne } from "../saga";

import { ACCOUNT_DELETION_DELETE_ONE, ACCOUNT_DELETION_GET_DATA, ACCOUNT_DELETION_GET_ONE_RECORD } from "./constants";

export function* accountDeletionSaga(): SagaIterator {
  yield takeEvery(ACCOUNT_DELETION_GET_DATA, getList);
  yield takeEvery(ACCOUNT_DELETION_GET_ONE_RECORD, findOne);
  yield takeEvery(ACCOUNT_DELETION_DELETE_ONE, deleteOne);
}
