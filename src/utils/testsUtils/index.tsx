import * as React from "react";

import { Router } from "react-router";

import { mount } from 'enzyme';

import createHistory from 'history/createBrowserHistory';
const history: any = createHistory();

export const mountWrapper = (node: any) => mount(
  <Router history={history}>
    {node}
  </Router>
);
