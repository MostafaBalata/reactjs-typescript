import { GET_DATA, GET_DATA_SUCCESS, INIT_LIST } from './constants';

export interface IListPageGetDataAction {
  type: string,
  moduleName: string,
  payload: {
    search: string,
    pageNumber: number,
    columns: [],
  }
}

export interface IListPageGetDataSuccessAction {
  type: string,
  moduleName: string,
  payload: {
    records: []
  }
}

export interface IInitList {
  type: string
  moduleName: string,
}


export type TAction = IListPageGetDataAction & IListPageGetDataSuccessAction;

// Action creators
export function getDataListPageActionCreator(moduleName: string, pageNumber: number, columns: [], search: string = ""): IListPageGetDataAction {
  return {
    type: `${moduleName}/${GET_DATA}`,
    moduleName,
    payload: {
      columns,
      pageNumber,
      search
    }
  };
}

export function getDataSuccessListPageActionCreator(moduleName: string, records: []): IListPageGetDataSuccessAction {
  return {
    type: `${moduleName}/${GET_DATA_SUCCESS}`,
    moduleName,
    payload: {
      records
    }
  };
}

export function initStateListPageActionCreator(moduleName: string): IInitList {
  return {
    type: `${moduleName}/${INIT_LIST}`,
    moduleName
  }
}
