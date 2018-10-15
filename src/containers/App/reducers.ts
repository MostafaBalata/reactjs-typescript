import { Action, ActionTypes } from "./actions";

// Define our State interface for the current reducer
export interface IState {
  number: number;
  message: string;
}

// Define our initialState
export const initialState: IState = {
  number: 0,
  message: "",
};

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions file.
 */
export function appReducer(state: IState = initialState, action: Action): IState {
  switch (action.type) {
    case ActionTypes.INCREASE:
      const num: number = state.number + 1;
      return {
        ...state,
        number: num
      };

    case ActionTypes.SAGA_HELLO:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
