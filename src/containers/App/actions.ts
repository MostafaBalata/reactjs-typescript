
/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export enum ActionTypes {
    INCREASE = 'INCREASE',
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface IncreaseAction { type: ActionTypes.INCREASE }

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function increase(): IncreaseAction {

    return {
        type: ActionTypes.INCREASE
    }
}

/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */
export type Action = IncreaseAction
