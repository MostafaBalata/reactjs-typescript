import { size } from 'lodash';

// constants
import { DELETE_ONE_RECORD_SUCCESS, GET_ONE_RECORD_SUCCESS } from '../../containers/FormPage/constants';
import { GET_DATA, GET_DATA_SUCCESS } from '../../containers/ListPage/constants';

import { TAction } from '../../containers/ListPage/actions';
import { initialStateListPage, IPropsListPage } from '../../containers/ListPage/reducers';

import { TFormPageAction } from '../../containers/FormPage/actions';
import { convertModuleNameToUpperCase, convertModuleNameUrl } from '../../utils/services';
import { MODULE_NAME } from './constants';


// * Note: reducer function started with Capital letter to match to module names

export const SOURCE_NAME: string = convertModuleNameToUpperCase(MODULE_NAME);
export const MODULE_URL: string = convertModuleNameUrl(MODULE_NAME);

/**
 * Initializing the list reducer for this component
 * Note: function started with Capital letter to match to module names
 * @param state 
 * @param action 
 */
export function ListReducer(state: IPropsListPage = initialStateListPage, action: TAction): IPropsListPage {
  switch (action.type) {
    case `${SOURCE_NAME}/${GET_DATA}`:
      return {
        ...state,
        columns: action.payload.columns,
        loading: true
      }
    case `${SOURCE_NAME}/${GET_DATA_SUCCESS}`:
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

export function FormReducer(state = initialStateFormPage, action: TFormPageAction): any {
  switch (action.type) {
    case `${SOURCE_NAME}/${GET_ONE_RECORD_SUCCESS}`:
      return { ...state, form: action.payload }
    case `${SOURCE_NAME}/${DELETE_ONE_RECORD_SUCCESS}`:
      return { ...state }
    default:
      return state;
  }
}
