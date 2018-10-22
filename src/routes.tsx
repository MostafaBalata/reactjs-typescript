import { flattenDeep, map } from 'lodash';

import { FormPage } from './containers/FormPage';
import HomePage from './containers/HomePage';
import { NotFoundPage } from "./containers/NotFoundPage";
import AccountDeletionFormPage from './services/AccountDeletion/containers/FormPage';
import AccountDeletionListPage from './services/AccountDeletion/containers/ListPage';

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
    "elements": [
      { "content": "Account Deletion", icon: "trash", link: "/account-deletion", component: AccountDeletionListPage, formComponent: AccountDeletionFormPage },
    ]
  },
  {
    "title": "General",
    "elements": [
      { "content": "Home", icon: "home", link: "/", component: HomePage },
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



const makeLink = (link: string, content: string, component: any) => {
  return { link, content, component }
}


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