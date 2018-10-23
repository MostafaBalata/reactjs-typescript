
import { TAction } from './actions';
import { INIT_LIST } from './constants';

export interface IPropsListPage {
  records: any[],
  columns: any[],
  count: number,
  loading: boolean,
  getData?: (sourceName: string, pageNumber: number, columns: []) => [],
  initList?: (sourceName: string) => void,
  getNextPage?: (pageNumber: number) => []
}

export const initialStateListPage: IPropsListPage = {
  records: [{}],
  columns: [],
  count: 0,
  loading: false
}

export function listPageReducer(state: IPropsListPage = initialStateListPage, action: TAction): IPropsListPage {
  switch (action.type) {
    case INIT_LIST:
      return {
        ...state,
        records: initialStateListPage.records,
        columns: initialStateListPage.columns,
        count: initialStateListPage.count,
        loading: false
      }
    default:
      return state;
  }
}
