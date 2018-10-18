import { getColumnsFromModel } from "..";
import { schema } from "../../../services/AccountDeletion/model";

describe('Utils services testing', () => {
  it('getColumnsFromModel', () => {
    JSON.stringify(getColumnsFromModel(schema))
    // @TODO: Finish it :D
  })
})
