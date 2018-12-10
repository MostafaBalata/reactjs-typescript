// Saga
import { SagaIterator, } from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { getList, findOne, deleteOne, postOne } from "../saga";
import { DELETE_ONE_RECORD, GET_ONE_RECORD, POST_ONE_RECORD } from "../../containers/FormPage/constants";
import { GET_DATA } from "../../containers/ListPage/constants";
import { convertModuleNameToUpperCase } from "../../utils/services";
import { MODULE_NAME } from "./constants";

const sourceName: string = convertModuleNameToUpperCase(MODULE_NAME);

export function* moduleSaga(): SagaIterator {
  yield takeEvery(`${sourceName}/${GET_DATA}`, getList);
  yield takeEvery(`${sourceName}/${GET_ONE_RECORD}`, findOne);
  yield takeEvery(`${sourceName}/${POST_ONE_RECORD}`, postOne);
  yield takeEvery(`${sourceName}/${DELETE_ONE_RECORD}`, deleteOne);
}
