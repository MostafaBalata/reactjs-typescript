import { mapKeys, mapValues, snakeCase } from "lodash";

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

export const toSnakeCase = (object: any) => {
  return transformKeys(snakeCase, object);
};
