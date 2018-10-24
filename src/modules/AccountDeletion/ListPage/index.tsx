// React & libs
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from "reselect";

import { getDataListPageActionCreator } from '../../../containers/ListPage/actions';

// componets
import { ListPage } from '../../../containers/ListPage';
import { getColumnsFromModel, convertModuleNameUrl, convertModuleNameToUpperCase } from '../../../utils/services';
import { schema } from '../model';

// Constants and Selectors
import { makeSelectColumns, makeSelectListCount, makeSelectLoading, makeSelectRecords } from "../../../containers/ListPage/selectors";
import { MODULE_NAME } from "../constants";


class AccountDeletionListPage extends ListPage {

  constructor(props: any) {
    super(props);
    this.columns = getColumnsFromModel(schema) as [];
    this.moduleUrl = convertModuleNameUrl(MODULE_NAME);
    this.moduleName = convertModuleNameToUpperCase(MODULE_NAME);
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

export const ListPageConnector = (reducer: string) => connect<any, any, any>(
  mapListPageStateToProp(reducer),
  mapDispatchToProps,
)(AccountDeletionListPage);
