import * as React from 'react';
import ReactTable from "react-table";
import * as styles from './styles.scss';

interface IProps {
  records: any[],
  columns: any[],
  loading: boolean,
  onFetchData?: (pageNumber: number) => void
}

export class Table extends React.Component<IProps> {

  constructor(props: any) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  public fetchData(state: any): any {
    if (this.props.onFetchData) {
      this.props.onFetchData((state.page as number) + 1);
    }
  }

  public render(): React.ReactNode {
    const { records, columns, loading } = this.props;

    return (<div className={styles.tablular}>
      <ReactTable
        manual
        data={records}
        columns={columns}
        pages={100}
        loading={loading}
        onFetchData={this.fetchData}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>);
  }

}