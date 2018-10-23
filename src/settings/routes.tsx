import { flattenDeep, map } from 'lodash';

import HomePage from '../containers/HomePage';
import { NotFoundPage } from "../containers/NotFoundPage";


import { makeLink } from './utils'
import { getRouteElements } from '.';

interface ILink {
  link: string,
  content: string,
  icon: string,
  component: any,
  formComponent?: any
}

export interface IRoute {
  title: string,
  elements: ILink[]
}

// TODO: should fetch data from server
export const routes: IRoute[] = [
  {
    "title": "Services",
    "elements": [...getRouteElements()]
  },
  {
    "title": "General",
    "elements": [
      { "content": "Home", icon: "home", link: "/", component: HomePage },
      { "content": "Not Found", icon: "paw", link: "/not-found", component: NotFoundPage },
    ]
  },
  {
    "title": "Settings",
    "elements": [
      { "content": "Profile", icon: "expand", link: "/profile", component: NotFoundPage },
      { "content": "Account", icon: "eye-dropper", link: "/account", component: NotFoundPage },
    ]
  }
]

// function to setup the routes
export function getRoutes(): ILink[] {
  const flattenRoutes = flattenDeep(map(routes, (route) => route.elements) as []);

  const forms: any[] = [];

  const output = map(flattenRoutes, (element: ILink) => {
    if (element.formComponent) {
      forms.push(makeLink(`${element.link}/:id`, element.content, element.formComponent));
    }
    return makeLink(element.link, element.content, element.component);
  });

  return ([].concat.apply(output, forms) as []);
}