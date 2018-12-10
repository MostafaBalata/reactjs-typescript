// Service Factory
import { has, upperCase, snakeCase } from 'lodash';
export const baseUrlApi = '/api/v1'


/**
 * Modules
 * 
 * The modules are listed in the variable below will be enabled automaticly,
 */

const modules = [
  { 'name': 'AccountCloning' },
];


/**
 * Sagas
 * 
 * Return all sagas forks from all the modules
 */

export const getSagas = () => modules.map(module => require(`../modules/${module.name}/settings`).getSagaFunction());

/**
 *  Service factory
 * 
 * function returns all the services providers from the enabled modules
 */
export const getServiceFactory = (moduleName: string) => {
  const providers: any = {};
  modules.forEach(module => {
    const moduleNameSnakeCase = upperCase(snakeCase(module.name)).replace(' ', '_');
    providers[moduleNameSnakeCase] = require(`../modules/${module.name}/settings`).getServiceProviderInstance()
  });

  if (!has(providers, moduleName)) {
    throw new Error(`${moduleName} is not supported`);
  }

  return providers[moduleName];
}

/***
 * Reducers
 * 
 * return all the reducers from the enabled modules
 */
export const getReducers = () => {
  let reducers = {};
  modules.forEach(module => {
    const file = require(`../modules/${module.name}/settings`);
    reducers = { ...reducers, ...file.reducers };
  });
  return reducers;
}


/**
 * Routes
 * 
 * return all the route elements from the enabled modules
 */
export const getRouteElements = () => modules.map(module => require(`../modules/${module.name}/settings`).routeElement);
