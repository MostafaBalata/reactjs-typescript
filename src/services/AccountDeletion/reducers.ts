import { size } from 'lodash';

import { TAction } from '../../containers/ListPage/actions';
import { ACCOUNT_DELETION_GET_DATA, ACCOUNT_DELETION_GET_DATA_SUCCESS } from './constants';

import { initialStateListPage, IPropsListPage } from '../../containers/ListPage/reducers';


export function accountDeletionReducer(state: IPropsListPage = initialStateListPage, action: TAction): IPropsListPage {
  switch (action.type) {
    case ACCOUNT_DELETION_GET_DATA:
      return {
        ...state,
        columns: action.columns
      }
    case ACCOUNT_DELETION_GET_DATA_SUCCESS:
      return {
        ...state,
        records: action.records,
        count: size(action.records)
      }
    default:
      return state;
  }
}
