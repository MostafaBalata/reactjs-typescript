// React & libs
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { Link } from 'react-router-dom';

// styles
import * as styles from './styles.scss';

// componets
import { Table } from '../../components/Table';

// selectors & reducers
import { IPropsListPage } from "./reducers";
import { getDataListPageActionCreator } from "./actions";
import { makeSelectRecords, makeSelectListCount, makeSelectColumns, makeSelectLoading } from "./selectors";


export class ListPage extends React.Component<IPropsListPage> {
  public columns: [] = [];
  public moduleName: string = "";
  public moduleUrl: string = "";

  constructor(props: any) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
  }

  public componentDidMount(): void {
    const action =
    {
      Header: 'Actions',
      width: 125,
      accessor: 'actions',
      style: {
        cursor: 'pointer',
      },
      Cell: (prop: any) => <Link to={{
        pathname: `/${this.moduleUrl}/${prop.original.jiraTrackId}`,
        search: ''
      }}>
        <span>Edit</span>
      </Link>
    }

    const column = { columns: [{ ...action }] };
    this.columns.push(column as never);

    if (this.props.initList) {
      // Erease the table
      this.props.initList('')
    }

    // We check if getData exists or not, because it's an optional field
    if (this.props.getData) {

      // This will dispatch action to redux
      this.props.getData(this.moduleName, 0, this.columns);
    }

  }

  public onFetchData(pageNumber: number): [] {
    const columns = this.props.columns as [];
    if (this.props.getData) {
      return this.props.getData(this.moduleName, pageNumber, columns);
    }
    const errorMessage: string = "Source is not defind";
    throw new Error(`Unexpected Error: ${errorMessage}`)
  }

  public render(): React.ReactNode {
    const { records, columns, loading } = this.props;

    return (
      <div className={styles.listPage}>
        <Table records={records} columns={columns} loading={loading} onFetchData={this.onFetchData} />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    getData: getDataListPageActionCreator
  }, dispatch)
}

const mapListPageStateToProp = (reducerName: string) => createStructuredSelector({
  records: makeSelectRecords(reducerName),
  number: makeSelectListCount(reducerName),
  columns: makeSelectColumns(reducerName),
  loading: makeSelectLoading(reducerName)
});

export const listConnector = (CustomListComponent: typeof React.Component) => (reducer: string) => connect<any, any, any>(
  mapListPageStateToProp(reducer),
  mapDispatchToProps,
)(CustomListComponent);
