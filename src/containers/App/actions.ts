/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export enum ActionTypes {
  INCREASE = "INCREASE",
  SAGA_HELLO = "SAGA_HELLO",
}

/*
 * Define return types of our actions
 */
export interface IIncreaseAction {
  type: ActionTypes.INCREASE;
}

export interface ISagaMessageAction {
  type: ActionTypes.SAGA_HELLO;
  payload: string;
}

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function increaseAction(): IIncreaseAction {
  return {
    type: ActionTypes.INCREASE,
  };
}

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function triggerSagaMessage(message: string): ISagaMessageAction {
  return {
    type: ActionTypes.SAGA_HELLO,
    payload: message,
  };
}

/*
 * Define the Action type
 * It can be one of the types defining in our action file
 * It will be useful to tell typescript about our types in our reducer
 */
export type Action = ISagaMessageAction & IIncreaseAction;
