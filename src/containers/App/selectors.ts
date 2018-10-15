import { createSelector } from 'reselect';

const selecApp = () => (state: any) => state.app;

const makeSelectMessage = () => createSelector(
  selecApp(),
  (substate) => substate.message,
);

const makeSelectNumber = () => createSelector(
  selecApp(),
  (substate) => substate.number,
);
export {
  makeSelectMessage,
  makeSelectNumber,
};
