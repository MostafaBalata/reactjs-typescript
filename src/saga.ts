import { effects } from "redux-saga";
import { takeLatest } from 'redux-saga/effects'

import { ActionTypes } from './containers/App/actions';

function* afterRun(action: any): any {
  // yield something :D
}

function* mySaga(): Iterator<effects.Effect> {
  yield takeLatest(ActionTypes.INCREASE, afterRun);
}

export {
  mySaga
};
