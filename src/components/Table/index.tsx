import * as React from 'react';
import ReactTable from "react-table";
import * as styles from './styles.scss';

interface IProps {
  data: any[],
  columns: any
}

export class Table extends React.Component<IProps> {
  public render(): React.ReactNode {

    const { data, columns } = this.props;
    return (<div className={styles.tablular}>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
      />


    </div>);
  }

}