import { camelCase, mapKeys, mapValues, snakeCase } from "lodash";

export const mergeTwoArrays = (array1: any, array2: any) => [].concat.apply(array1, array2);

export const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export const getPathNameCamleCase = () => camelCase(window.location.pathname.replace('/', ''))

type StringMapper = (s: string) => string;

const transformKeys = (mapper: StringMapper, object: any): any => {
  if (!object) {
    return object;
  }
  if (Array.isArray(object)) {
    return object.map(item => transformKeys(mapper, item));
  }
  if (typeof object === "object") {
    // tslint:disable-next-line
    const result = mapKeys(object, (value, key: string) => mapper(key));
    return mapValues(result, val => transformKeys(mapper, val));
  }
  return object;
};

export const toCamelCase = (object: any) => {
  return transformKeys(camelCase, object);
};

export const toSnakeCase = (object: any) => {
  return transformKeys(snakeCase, object);
};

