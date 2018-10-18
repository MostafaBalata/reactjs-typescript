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
import { makeSelectColumns, makeSelectListCount, makeSelectRecords } from "../../../../containers/ListPage/selectors";
import { SOURCE_NAME } from "../../constants";


export class AccountDeletionListPage extends ListPage {

  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    const columns = getColumnsFromModel(schema) as [];

    // We check if getData exists or not, because it's an optional field
    if (this.props.getData) {

      // This will dispatch action to redux
      this.props.getData(SOURCE_NAME, columns);
    }
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    getData: getDataListPageActionCreator
  }, dispatch)
}

const mapListPageStateToProp = createStructuredSelector({
  records: makeSelectRecords('accountDeletion'),
  number: makeSelectListCount('accountDeletion'),
  columns: makeSelectColumns('accountDeletion')
});

export default connect<any, any, any>(
  mapListPageStateToProp,
  mapDispatchToProps,
)(AccountDeletionListPage);
