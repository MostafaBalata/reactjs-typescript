import { applyMiddleware, compose, createStore } from "redux";

import { History } from 'history';
import { routerMiddleware } from "react-router-redux";

import { createReducer } from "./reducers";

import createSagaMiddleware from "redux-saga";

import { mainSaga } from "./saga";

export function configureStore(history: History): any {

  /*
   * We're giving State interface to create store
   * store is type of State defined in our reducers
   */

  const composeEnhancers =
    typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const middlewares: any = [];

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  if (history) {
    middlewares.push(routerMiddleware(history))
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(createReducer(), composeEnhancers(...enhancers))
  // Run saga
  sagaMiddleware.run(mainSaga as any);

  return store;
}
