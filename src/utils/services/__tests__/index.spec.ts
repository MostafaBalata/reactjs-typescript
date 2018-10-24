import { getColumnsFromModel, convertModuleNameToUpperCase, convertModuleNameUrl } from "..";
import { schema } from "../../../modules/AccountDeletion/model";

describe('Utils modules testing', () => {
  it('getColumnsFromModel', () => {
    JSON.stringify(getColumnsFromModel(schema))
    // @TODO: Finish it :D
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


