import { createSelector } from 'reselect';

// tslint: disable-next-line
const selecStateReducer = (reducer: string) => (state: any) => state[reducer];

// Selectors
const selectFormData = (substate: any) => typeof substate.body !== "undefined"  ? substate.body.data : {}

// Selectors Makers
const makeSelectRecords = (reducer: string) => createSelector(
  selecStateReducer(reducer),
  (substate) =>  {    
    return typeof substate.records.data !== "undefined"?substate.records.data:[];
  },
);

const makeSelectListCount = (reducer: string) => createSelector(
  selecStateReducer(reducer),
  (substate) => substate.count,
);

const makeSelectColumns = (reducer: string) => createSelector(
  selecStateReducer(reducer),
  (substate) => substate.columns,
);
const makeSelectLoading = (reducer: string) => createSelector(
  selecStateReducer(reducer),
  (substate) => substate.loading,
);

// Form
const makeSelectForm = (reducer: string) => createSelector(
  selecStateReducer(reducer),
  (substate) => substate.form.body
)

export {
  selectFormData,
  makeSelectRecords,
  makeSelectListCount,
  makeSelectColumns,
  makeSelectLoading,
  makeSelectForm,
};
