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
import { makeSelectColumns, makeSelectListCount, makeSelectRecords } from "./selectors";

import { initStateListPageActionCreator } from "./actions";


export class ListPage extends React.Component<IPropsListPage> {

  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    if (this.props.initList) {
      // Erease the table
      this.props.initList('')
    }
  }

  public render(): React.ReactNode {
    const { records, columns } = this.props;
    return (
      <div className={styles.listPage}>
        <Table data={records} columns={columns} />
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
  columns: makeSelectColumns('list')
});

export default connect<any, any, any>(
  mapListPageStateToProps,
  mapDispatchToProps,
)(ListPage);
