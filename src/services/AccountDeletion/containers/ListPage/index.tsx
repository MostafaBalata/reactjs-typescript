// React & libs
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from "reselect";

import { getDataListPageActionCreator } from '../../../../containers/ListPage/actions';

// componets
import { ListPage } from '../../../../containers/ListPage';
import { getColumnsFromModel } from '../../../../utils/services';
import { schema } from '../../model';

// Constants and Selectors
import { makeSelectColumns, makeSelectListCount, makeSelectLoading, makeSelectRecords } from "../../../../containers/ListPage/selectors";
import { SOURCE_NAME, SOURCE_NAME_URL } from "../../constants";


export class AccountDeletionListPage extends ListPage {

  constructor(props: any) {
    super(props);
    this.columns = getColumnsFromModel(schema) as [];
    this.sourceNameUrl = SOURCE_NAME_URL;
    this.sourceName = SOURCE_NAME;
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

export default connect<any, any, any>(
  mapListPageStateToProp('accountDeletionListReducer'),
  mapDispatchToProps,
)(AccountDeletionListPage);
