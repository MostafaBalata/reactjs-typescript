
import { TAction } from './actions';
import { INIT_LIST } from './constants';

export interface IPropsListPage {
  records: any[],
  columns: any[],
  count: number,
  getData?: (sourceName: string, columns: []) => [],
  initList?: (sourceName: string) => void
}

export const initialStateListPage: IPropsListPage = {
  records: [{}],
  columns: [],
  count: 0
}

export function listPageReducer(state: IPropsListPage = initialStateListPage, action: TAction): IPropsListPage {
  switch (action.type) {
    case INIT_LIST:
      return {
        ...state,
        records: initialStateListPage.records,
        columns: initialStateListPage.columns,
        count: initialStateListPage.count
      }
    default:
      return state;
  }
}
