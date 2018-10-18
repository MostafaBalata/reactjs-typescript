import { flattenDeep, map } from 'lodash';

import { FormPage } from './containers/FormPage';
import HomePage from './containers/HomePage';
import ListPage from "./containers/ListPage";
import { NotFoundPage } from "./containers/NotFoundPage";
import AccountDeletionListPage from './services/AccountDeletion/containers/ListPage';

// TODO: should fetch data from server
export const routes = [
  {
    "title": "Services",
    "elements": [
      { "content": "Account Deletion", icon: "trash", link: "/account-deletion", component: AccountDeletionListPage },
    ]
  },
  {
    "title": "General",
    "elements": [
      { "content": "Home", icon: "home", link: "/", component: HomePage },
      { "content": "List", icon: "eye-dropper", link: "/list", component: ListPage },
      { "content": "Form", icon: "history", link: "/form", component: FormPage },
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

interface ILink {
  link: string,
  content: string,
  component: any
}

const makeLink = (link: string, content: string, component: any) => {
  return { link, content, component }
}

export function getRoutes(): ILink[] {
  const flattenRoutes = flattenDeep(map(routes, (route) => route.elements));

  const output = map(flattenRoutes, (element: ILink) => makeLink(element.link, element.content, element.component));

  return (output as []);
}