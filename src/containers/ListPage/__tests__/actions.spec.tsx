import { getDataListPageActionCreator, IListPageGetDataAction, getDataSuccessListPageActionCreator, TAction, IListPageGetDataSuccessAction, initStateListPageActionCreator, IInitList } from "../actions";
import { GET_DATA, INIT_LIST, GET_DATA_SUCCESS } from "../constants";

describe('Test Actions', () => {
  it('getDataListPageActionCreator', () => {

    const moduleName = "ModuleName"
    const result = getDataListPageActionCreator(moduleName, 2, [], null);
    const expectedResult: IListPageGetDataAction = {
      type: `${moduleName}/${GET_DATA}`,
      moduleName,
      payload: {
        columns: [],
        pageNumber: 2,
        search: null
      }
    }

    expect(result).toMatchObject(expectedResult);
  });

  it('getDataSuccessListPageActionCreator', () => {

    const moduleName = "ModuleName"
    const result = getDataSuccessListPageActionCreator(moduleName, [])
    const expectedResult: IListPageGetDataSuccessAction = {
      type: `${moduleName}/${GET_DATA_SUCCESS}`,
      moduleName,
      payload: {
        records: []
      }
    }

    expect(result).toMatchObject(expectedResult);
  });

  it('initStateListPageActionCreator', () => {

    const moduleName = "ModuleName"
    const result = initStateListPageActionCreator(moduleName);
    const expectedResult: IInitList = {
      type: `${moduleName}/${INIT_LIST}`,
      moduleName,
    }

    expect(result).toMatchObject(expectedResult);
  });



})