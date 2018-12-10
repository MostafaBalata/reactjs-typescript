import * as React from "react";
// Components
import { Button, Input } from 'reactstrap';

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
    this.onChange = this.onChange.bind(this);

  }

  public onChange(e: any): void{
    const formBody: any = this.state.formBody; 
    formBody[e.target.name] = e.target.value
    this.setState({
      formBody
    })
  }

  public actionsSection(): React.ReactNode {
    return (
      <div>
        <h3>Actions</h3>
        <Input type="text" name="newName" placeholder="Account new name" onChange={this.onChange}/>
        <Input type="text" name="newDomain" placeholder="Domain" onChange={this.onChange}/>
        <div>
          <Button outline color="success" onClick={this.onPost}>Clone</Button>{' '}                 
        </div>
      </div>
    );
  }
}

export const FormPageConnector = (reducer: string) => formConnector(ComponentFormPage)(reducer);