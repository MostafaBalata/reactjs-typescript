// React & libs
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from "reselect";

// styles
import * as styles from './styles.scss';

// componets
import { Table } from '../../components/Table';

// selectors & reducers
import { IPropsListPage } from "./reducers";
import { makeSelectColumns, makeSelectListCount, makeSelectLoading, makeSelectRecords } from "./selectors";

import { initStateListPageActionCreator } from "./actions";


export class ListPage extends React.Component<IPropsListPage> {

  constructor(props: any) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
  }

  public componentDidMount(): void {
    if (this.props.initList) {
      // Erease the table
      this.props.initList('')
    }
  }

  public onFetchData(pageNumber: number): any {
    alert(pageNumber)
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
    initList: initStateListPageActionCreator
  }, dispatch)
}

const mapListPageStateToProps = createStructuredSelector({
  records: makeSelectRecords('list'),
  number: makeSelectListCount('list'),
  columns: makeSelectColumns('list'),
  loading: makeSelectLoading('list')
});

export default connect<any, any, any>(
  mapListPageStateToProps,
  mapDispatchToProps,
)(ListPage);
