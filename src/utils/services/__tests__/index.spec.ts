import { getColumnsFromModel, convertModuleNameToUpperCase, convertModuleNameUrl } from "..";
import { JSONSchema6 } from "json-schema";

describe('Utils modules testing', () => {
  const schema: JSONSchema6 = {
    title: 'SCHEMA TITLE',
    properties: {
      status: {
        type: "boolean",
        title: "Status",
        default: false
      }
    }
  }
  it('getColumnsFromModel', () => {
    const expectedResult = [{ "columns": [{ "Header": "Status", "accessor": "status" }] }];
    const result = getColumnsFromModel(schema);
    expect(result).toMatchObject(expectedResult);
  })
})


describe('Utils modules testing', () => {
  it('convertModuleNameToURL', () => {
    const result = convertModuleNameToUpperCase("AccountDeletion");
    expect(result).toEqual("ACCOUNT_DELETION");
  })
})


describe('Utils modules testing', () => {
  it('convertModuleNameUrl', () => {
    const result = convertModuleNameUrl("AccountDeletion");
    expect(result).toEqual("account-deletion");
  })
})


