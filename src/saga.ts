import { effects, SagaIterator } from "redux-saga";

import { appSaga } from "./containers/HomePage/saga";
import { modulesSagas } from "./modules/saga";
import { NotificationCenter } from "./lib/notification/notification";

function* sagas(): SagaIterator {
  yield effects.all([
    effects.fork(appSaga),
    effects.fork(modulesSagas)
  ]);
}

function* mainSaga(): SagaIterator {
  try {
    yield effects.call(sagas);
  } catch (error) {
    NotificationCenter.error("ERR_0002", error)
  }
}

export { mainSaga };
