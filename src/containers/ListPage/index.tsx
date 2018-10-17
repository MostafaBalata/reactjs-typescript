// React & libs
import * as React from "react";

// styles
import * as styles from './styles.scss';

// componets
import { Table } from '../../components/Table';

export interface IListPageState {
  data: any[],
  columns: any
}

export class ListPage extends React.Component<{}, IListPageState> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: [{
        example: 'Sample data'
      }],
      columns: [
        {
          Header: "Example",
          columns: [
            {
              Header: "Column Example",
              accessor: "example",
            }
          ]
        }
      ]

    }
  }

  public render(): React.ReactNode {
    return (
      <div className={styles.listPage}>
        <Table data={this.state.data} columns={this.state.columns} />
      </div>
    );
  }

}
