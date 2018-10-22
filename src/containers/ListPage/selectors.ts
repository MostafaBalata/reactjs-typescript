import { createSelector } from 'reselect';

// tslint: disable-next-line
const selecListPageReducer = (reducer: string) => (state: any) => state[reducer];

// Selectors
const selectFormData = (reducer: string) => (state: any) => state[reducer].form;



const makeSelectRecords = (reducer: string) => createSelector(
  selecListPageReducer(reducer),
  (substate) => substate.records,
);

const makeSelectListCount = (reducer: string) => createSelector(
  selecListPageReducer(reducer),
  (substate) => substate.count,
);

const makeSelectColumns = (reducer: string) => createSelector(
  selecListPageReducer(reducer),
  (substate) => substate.columns,
);
const makeSelectLoading = (reducer: string) => createSelector(
  selecListPageReducer(reducer),
  (substate) => substate.loading,
);

// Form
const makeSelectForm = (reducer: string) => createSelector(
  selecListPageReducer(reducer),
  (substate) => substate.form
)
export {
  selecListPageReducer,
  makeSelectRecords,
  makeSelectListCount,
  makeSelectColumns,
  makeSelectLoading,
  makeSelectForm,
  selectFormData
};
