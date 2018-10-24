import { JSONSchema6 } from "json-schema";
import { upperCase, lowerCase, upperFirst } from "lodash";

interface IProperty {
  type: string,
  title: string,
  default: string
}

export const getColumnsFromModel = (model: any) => {
  const properties: IProperty[] = model.properties;
  const columnsAsArray = Object.keys(properties);

  return columnsAsArray.map((key: string) => {
    return {
      columns: [{
        Header: model.properties[key].title,
        accessor: key
      }]
    };
  });
}

export const getFormSchemaFromModel = (model: JSONSchema6) => {
  return {
    title: model.title,
    type: "object",
    properties: model.properties,
    done: { type: "boolean", title: "Done?", default: false }
  }
}

export const convertModuleNameToUpperCase = (name: string) => upperCase(name).replace(" ", "_");

export const convertModuleNameUrl = (name: string) => lowerCase(name).replace(" ", "-")


export const getTitleFromModuleName = (name: string) => upperFirst(upperCase(name).toLowerCase());