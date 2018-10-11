import { Action, ActionTypes } from './actions'

// Define our State interface for the current reducer
export interface IState {
    number: number
}

// Define our initialState
export const initialState: IState = {
    number: 0 // We don't have any todos at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function appReducer(state: IState = initialState, action: Action): IState {
    switch (action.type) {

        case ActionTypes.INCREASE: {

            const number = state.number + 1
            return {
                ...state,
                number: number
            }
        }
        default:
            return state
    }
}
