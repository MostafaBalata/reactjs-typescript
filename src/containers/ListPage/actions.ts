import { GET_DATA, GET_DATA_SUCCESS, INIT_LIST } from './constants';

interface IListPageGetDataAction {
  type: string,
  search: string,
  columns: [],
}

interface IListPageGetDataSuccessAction {
  type: string,
  records: []
}

interface IInitList {
  type: string
}


export type TAction = IListPageGetDataAction & IListPageGetDataSuccessAction;

// Action creators
export function getDataListPageActionCreator(source: string, columns: [], search: string = "*"): IListPageGetDataAction {
  return {
    type: `${source}/${GET_DATA}`,
    columns,
    search
  };
}

export function getDataSuccessListPageActionCreator(source: string, records: []): IListPageGetDataSuccessAction {
  return {
    type: `${source}/${GET_DATA_SUCCESS}`,
    records
  };
}

export function initStateListPageActionCreator(source: string): IInitList {
  return {
    type: `${source}/${INIT_LIST}`
  }
}
