import { DELETE_ONE_RECORD, DELETE_ONE_RECORD_SUCCESS, GET_ONE_RECORD, GET_ONE_RECORD_SUCCESS } from './constants';

interface IFormRequestAction {
  type: string,
  payload: string, // @TODO: not sure if the id will be string.
}

interface IFormResponseAction {
  type: string,
  payload: any, // @TODO: not sure if the id will be string.
}
export type TFormPageAction = IFormRequestAction & IFormResponseAction;

// Action creators
export function findOneActionCreator(source: string, payload: string): IFormRequestAction {
  return {
    type: `${source}/${GET_ONE_RECORD}`,
    payload
  }
}

// Action creators
export function findOneSuccessActionCreator(source: string, payload: any): IFormResponseAction {
  return {
    type: `${source}/${GET_ONE_RECORD_SUCCESS}`,
    payload
  }
}

export function deleteOneActionCreator(source: string, payload: string): IFormRequestAction {
  return {
    type: `${source}/${DELETE_ONE_RECORD}`,
    payload
  }
}

export function deleteOneSuccessActionCreator(source: string, payload: string): IFormRequestAction {
  return {
    type: `${source}/${DELETE_ONE_RECORD_SUCCESS}`,
    payload
  }
}