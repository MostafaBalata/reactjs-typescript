import { applyMiddleware, compose, createStore } from "redux";

import { createReducer } from "./reducers";

import createSagaMiddleware from "redux-saga";

import { mainSaga } from "./saga";

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */

const composeEnhancers =
  typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(createReducer(), enhancer);

// Run saga
sagaMiddleware.run(mainSaga as any);
