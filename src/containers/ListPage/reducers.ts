export interface IPropsListPage {
  records: any[],
  columns: any[],
  count: number,
  loading: boolean,
  getData?: (sourceName: string, pageNumber: number, columns: []) => [],
  initList?: (sourceName: string) => void,
  getNextPage?: (pageNumber: number) => []
}

export const initialStateListPage: IPropsListPage = {
  records: [{}],
  columns: [],
  count: 0,
  loading: false
}
