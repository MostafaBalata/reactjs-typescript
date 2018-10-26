import { effects, SagaIterator } from "redux-saga";
import { all } from "redux-saga/effects";

import { appSaga } from "./containers/HomePage/saga";
import { getSagasFromModule } from "./modules/saga";
import { NotificationCenter } from "./lib/notification/notification";

function* sagas(): SagaIterator {
  yield all([
    effects.fork(appSaga),
    ...getSagasFromModule().map((singleProcess: any) => effects.fork(singleProcess))
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
