import { GET_ONE_RECORD, GET_ONE_RECORD_SUCCESS } from './constants';

interface IFormRequestAction {
  type: string,
  id: string, // @TODO: not sure if the id will be string.
}

interface IFormResponseAction {
  type: string,
  form: any, // @TODO: not sure if the id will be string.
}
export type TFormPageAction = IFormRequestAction & IFormResponseAction;

// Action creators
export function findOneActionCreator(source: string, id: string): IFormRequestAction {
  return {
    type: `${source}/${GET_ONE_RECORD}`,
    id
  }
}

// Action creators
export function findOneSuccessActionCreator(source: string, form: any): IFormResponseAction {
  return {
    type: `${source}/${GET_ONE_RECORD_SUCCESS}`,
    form
  }
}
