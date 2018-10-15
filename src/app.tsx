import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux';

import { History } from 'history';
import createHistory from 'history/createBrowserHistory';

import { App } from "./containers/App";
import { configureStore } from "./store";

const history: History = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);
