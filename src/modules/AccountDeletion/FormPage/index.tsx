// React & libs
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { MODULE_NAME } from "../constants";

// componets
import { FormPage } from "../../../containers/FormPage";

import { schema as model } from '../model';

import { deleteOneActionCreator, findOneActionCreator } from "../../../containers/FormPage/actions";
import { getFormSchemaFromModel, convertModuleNameToUpperCase } from "../../../utils/services";

import { makeSelectForm } from "../../../containers/ListPage/selectors";


class AccountDeletionFormPage extends FormPage {

  constructor(props: any) {
    super(props);
    this.schema = getFormSchemaFromModel(model) as any;
    this.sourceName = convertModuleNameToUpperCase(MODULE_NAME);
  }

}

const mapListPageStateToProp = (reducerName: string) => createStructuredSelector({
  form: makeSelectForm(reducerName),
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    findOne: findOneActionCreator,
    deleteOne: deleteOneActionCreator,
  }, dispatch)
}


export const FormPageConnector = (reducer: string) => connect<any, any, any>(
  mapListPageStateToProp(reducer),
  mapDispatchToProps,
)(AccountDeletionFormPage);
