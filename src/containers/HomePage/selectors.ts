import { createSelector } from 'reselect';

interface IPropsApp {
  message: string,
  number: number,
  increaseAction(): void
}

const selecHomePageReducer = () => (state: any) => state.homePage;

// Selectors
const selecMessage = (state: IPropsApp) => state.message;
const selecNumber = (state: IPropsApp) => state.number;

const makeSelectMessage = () => createSelector(
  selecHomePageReducer(),
  (substate) => substate.message,
);

const makeSelectNumber = () => createSelector(
  selecHomePageReducer(),
  (substate) => substate.number,
);
export {
  makeSelectMessage,
  makeSelectNumber,
  selecMessage,
  selecNumber,
  IPropsApp
};
