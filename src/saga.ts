import { effects, SagaIterator } from "redux-saga";

import { appSaga } from "./containers/HomePage/saga";
import { accountDeletionSaga } from "./modules/AccountDeletion/saga";

function* sagas(): SagaIterator {
  yield effects.all([
    effects.fork(appSaga),
    effects.fork(accountDeletionSaga)
  ]);
}

function* mainSaga(): SagaIterator {
  try {
    yield effects.call(sagas);
  } catch (error) {
    // tslint:disable-next-line
    console.error(error);
  }
}

export { mainSaga };
