import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";

import { ActionTypes, triggerSagaMessage } from "./actions";

function* dispatchRandomeMessage(): SagaIterator {
  const items: string[] = ["Welcome", "Saga", "Hello", "Yo yo"];

  const item: string = items[Math.floor(Math.random() * items.length)];
  yield put(triggerSagaMessage(`Hello from saga ${item}`));
}

function* appSaga(): SagaIterator {
  yield takeLatest(ActionTypes.INCREASE, dispatchRandomeMessage);
}

export { appSaga };
