import { size } from 'lodash';

import { TAction } from '../../containers/ListPage/actions';
import { ACCOUNT_DELETION_DELETE_ONE_SUCCESS, ACCOUNT_DELETION_GET_DATA, ACCOUNT_DELETION_GET_DATA_SUCCESS, ACCOUNT_DELETION_GET_ONE_RECORD_SUCCESS } from './constants';

import { initialStateListPage, IPropsListPage } from '../../containers/ListPage/reducers';

import { TFormPageAction } from '../../containers/FormPage/actions';

/**
 * Initializing the list reducer for this component
 * @param state 
 * @param action 
 */
export function accountDeletionListReducer(state: IPropsListPage = initialStateListPage, action: TAction): IPropsListPage {
  switch (action.type) {
    case ACCOUNT_DELETION_GET_DATA:
      return {
        ...state,
        columns: action.payload.columns,
        loading: true
      }
    case ACCOUNT_DELETION_GET_DATA_SUCCESS:
      return {
        ...state,
        records: action.payload.records,
        count: size(action.payload.records),
        loading: false
      }
    default:
      return state;
  }
}

/**
 * Initializing the form reducer for this component
 * @param state 
 * @param action 
 */

const initialStateFormPage = {
  form: {}
}

export function accountDeletionFormReducer(state = initialStateFormPage, action: TFormPageAction): any {
  switch (action.type) {
    case ACCOUNT_DELETION_GET_ONE_RECORD_SUCCESS:
      return { ...state, form: action.payload }
    case ACCOUNT_DELETION_DELETE_ONE_SUCCESS:
      return { ...state }
    default:
      return state;
  }
}