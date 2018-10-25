import { findOneActionCreator, TFormPageAction, findOneSuccessActionCreator, deleteOneActionCreator, IFormResponseAction, deleteOneSuccessActionCreator } from "../actions";
import { GET_ONE_RECORD, GET_ONE_RECORD_SUCCESS, DELETE_ONE_RECORD_SUCCESS, DELETE_ONE_RECORD } from "../constants";

describe('Test Actions', () => {
  it('findOneActionCreator', () => {

    const source = "ModuleName"
    const result = findOneActionCreator(source, "123");
    const expectedResult: TFormPageAction = {
      type: `${source}/${GET_ONE_RECORD}`,
      payload: {
        body: "123",
        moduleName: source
      }
    }

    expect(result).toMatchObject(expectedResult);
  });

  it('findOneSuccessActionCreator', () => {

    const source = "ModuleName"
    const result = findOneSuccessActionCreator(source, { x: 1 });
    const expectedResult: IFormResponseAction = {
      type: `${source}/${GET_ONE_RECORD_SUCCESS}`,
      payload: {
        body: { x: 1 },
        moduleName: source
      }
    }

    expect(result).toMatchObject(expectedResult);
  });
  it('deleteOneActionCreator', () => {

    const source = "ModuleName"
    const result = deleteOneActionCreator(source, "123")
    const expectedResult: TFormPageAction = {
      type: `${source}/${DELETE_ONE_RECORD}`,
      payload: {
        body: "123",
        moduleName: source
      }
    }

    expect(result).toMatchObject(expectedResult);
  });
  it('deleteOneSuccessActionCreator', () => {

    const source = "ModuleName"
    const result = deleteOneSuccessActionCreator(source, "message")
    const expectedResult: TFormPageAction = {
      type: `${source}/${DELETE_ONE_RECORD_SUCCESS}`,
      payload: {
        body: "message",
        moduleName: source
      }
    }

    expect(result).toMatchObject(expectedResult);
  });



})