import { makeSelectRecords, makeSelectColumns, makeSelectListCount, makeSelectLoading } from "../selectors";

describe('Test selections', () => {
  let state: any = {};
  beforeAll(() => {
    state = {
      ListPageReducer: {
        records: [{ "status": true, "trackId": "Tayra", "jobId": { "$oid": "5bc5eb75fc13ae76eb000065" }, "creator": "Célia", "jobCreationTime": "10/4/2018", "message": "samle text." },
        { "status": false, "trackId": "Beisa oryx", "jobId": { "$oid": "5bc5eb75fc13ae76eb000066" }, "creator": "Laïla", "jobCreationTime": "7/12/2018", "message": "any text" }],
        columns: [
          { Header: 'Status', accessor: 'status' },
          { Header: 'Track Id', accessor: 'trackId' },
          { Header: 'Creator', accessor: 'creator' },
          { Header: 'Job creation time', accessor: 'jobCreationTime' },
        ],
        count: 2,
        loading: false
      }
    }
  })

  it('should select records', () => {
    const result = makeSelectRecords('ListPageReducer')(state);
    const expectedResult = state.ListPageReducer.records;
    expect(result).toMatchObject(expectedResult);
  });

  it('should select columns', () => {
    const result = makeSelectColumns('ListPageReducer')(state);
    const expectedResult = state.ListPageReducer.columns;
    expect(result).toMatchObject(expectedResult);
  });

  it('should select count', () => {
    const result = makeSelectListCount('ListPageReducer')(state);
    const expectedResult = state.ListPageReducer.count;
    expect(result).toEqual(expectedResult);
  });

  it('should select loading', () => {
    const result = makeSelectLoading('ListPageReducer')(state);
    const expectedResult = state.ListPageReducer.loading;
    expect(result).toEqual(expectedResult);
  });

})