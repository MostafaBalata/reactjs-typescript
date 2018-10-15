import { createSelector } from 'reselect';

interface IPropsApp {
  message: string,
  number: number,
  increaseAction(): void
}

const selecApp = () => (state: any) => state.app;

// Selectors
const selecMessage = (state: IPropsApp) => state.message;
const selecNumber = (state: IPropsApp) => state.number;

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
  selecMessage,
  selecNumber,
  IPropsApp
};
