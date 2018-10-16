
import { map } from 'lodash';

import HomePage from './containers/HomePage';
import { ListPage } from "./containers/ListPage";
import { NotFoundPage } from "./containers/NotFoundPage";

export const routes = [
  {
    "title": "Service",
    "elements": [
      { "content": "Home", icon: "home", link: "/", component: HomePage },
      { "content": "ListPage", icon: "eye-dropper", link: "/list", component: ListPage },
      { "content": "Form", icon: "history", link: "/form", component: NotFoundPage },
      { "content": "Not Found", icon: "paw", link: "", component: NotFoundPage },
    ]
  },
  {
    "title": "Settings",
    "elements": [
      { "content": "Profile", icon: "expand", link: "/", component: NotFoundPage },
      { "content": "Account", icon: "eye-dropper", link: "/", component: NotFoundPage },
    ]
  }
]

interface ILink {
  link: string,
  content: string,
  component: any
}

const makeLink = (link: string, content: string, component: any) => {
  return { link, content, component }
}


export function getRoutes(): [ILink] {
  const flattenRoutes = routes.reduce((a, b) => [].concat.apply(a.elements, b.elements));
  const output = map(flattenRoutes, (element: ILink) => makeLink(element.link, element.content, element.component));

  // @TODO: think of better solution which returns the exact type
  // Problem description: map function from lodash library is returning boolen[] and we need to return [ILink] type
  return (output as [any]);
}