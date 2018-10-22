// React & libs
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { SOURCE_NAME } from "../../constants";

// componets
import { FormPage } from "../../../../containers/FormPage";

import { schema as model } from '../../model';

import { findOneActionCreator } from "../../../../containers/FormPage/actions";
import { getFormSchemaFromModel } from "../../../../utils/services";

import { makeSelectForm } from "../../../../containers/ListPage/selectors";

export class AccountDeletionFormPage extends FormPage {

  constructor(props: any) {
    super(props);
    this.schema = getFormSchemaFromModel(model) as any;
    this.sourceName = SOURCE_NAME;
  }

}

const mapListPageStateToProp = (reducerName: string) => createStructuredSelector({
  form: makeSelectForm(reducerName)
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    findOne: findOneActionCreator
  }, dispatch)
}


export default connect<any, any, any>(
  mapListPageStateToProp('accountDeletionFormReducer'),
  mapDispatchToProps,
)(AccountDeletionFormPage);
