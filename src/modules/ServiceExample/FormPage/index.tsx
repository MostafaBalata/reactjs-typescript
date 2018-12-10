import { MODULE_NAME } from "../constants";
// componets
import { FormPage, formConnector } from "../../../containers/FormPage";
import { schema as model } from '../model';
import { getFormSchemaFromModel, convertModuleNameToUpperCase } from "../../../utils/services";

class ComponentFormPage extends FormPage {

  constructor(props: any) {
    super(props);
    this.schema = getFormSchemaFromModel(model) as any;
    this.sourceName = convertModuleNameToUpperCase(MODULE_NAME);
  }

}

export const FormPageConnector = (reducer: string) => formConnector(ComponentFormPage)(reducer);