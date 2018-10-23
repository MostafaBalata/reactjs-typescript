import { DELETE_ONE_RECORD, DELETE_ONE_RECORD_SUCCESS, GET_ONE_RECORD, GET_ONE_RECORD_SUCCESS } from './constants';

interface IPayload {
  body: string,
  moduleName: string
}

interface IFormRequestAction {
  type: string,
  payload: IPayload, // @TODO: not sure if the id will be string.
}

interface IFormResponseAction {
  type: string,
  payload: any, // @TODO: not sure if the id will be string.
}

export type TFormPageAction = IFormRequestAction & IFormResponseAction;

// Action creators
export function findOneActionCreator(source: string, id: string): IFormRequestAction {
  return {
    type: `${source}/${GET_ONE_RECORD}`,
    payload: {
      body: id,
      moduleName: source
    },
  }
}

// Action creators
export function findOneSuccessActionCreator(source: string, formData: any): IFormResponseAction {
  return {
    type: `${source}/${GET_ONE_RECORD_SUCCESS}`,
    payload: {
      body: formData,
      moduleName: source
    },
  }
}

export function deleteOneActionCreator(source: string, id: string): IFormRequestAction {
  return {
    type: `${source}/${DELETE_ONE_RECORD}`,
    payload: {
      body: id,
      moduleName: source
    },
  }
}

export function deleteOneSuccessActionCreator(source: string, message: string): IFormRequestAction {
  return {
    type: `${source}/${DELETE_ONE_RECORD_SUCCESS}`,
    payload: {
      body: message,
      moduleName: source
    },
  }
}