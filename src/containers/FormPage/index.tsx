// React & libs
import * as React from "react";


import Form from "react-jsonschema-form";

// Components
import { Button } from 'reactstrap';

// componets

export class FormPage extends React.Component<any, any> {

  // Data skeleton
  public schema: {} = {};
  // Form data values
  public form: {} = {};
  // The service name
  public sourceName: string = "";

  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    const id = this.props.match.params.id;
    this.props.findOne(this.sourceName, id);
    this.form = this.props.form;
  }

  public render(): React.ReactNode {
    const { form } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="block">
            <Form schema={this.schema}
              formData={form}
              // tslint:disable-next-line
              onChange={console.log}
              // tslint:disable-next-line
              onSubmit={console.log}
              // tslint:disable-next-line
              onError={console.error} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="block">
            <h3>Actions</h3>

            <div>
              <Button outline color="danger">Delete</Button>{' '}
              <Button outline color="success">Success</Button>{' '}
              <Button outline color="info">Info</Button>{' '}
            </div>
          </div>
          <div className="block">
            <p>Extra information could be here.</p>
          </div>
        </div>
      </div>
    );
  }
}
