// React & libs
import * as React from "react";


import Form from "react-jsonschema-form";

// Components
import { Button } from 'reactstrap';
import { selectFormData } from "../ListPage/selectors";

interface IFormPageState {
  uniqueId: string,
  moduleName: string, // module Name
  sourceName: string, // Is prefix for reducers name
}

export class FormPage extends React.Component<any, IFormPageState> {

  // Data skeleton
  public schema: {} = {};
  // Form data values
  public form: {} = {};
  // The service name
  public sourceName: string = "";


  constructor(props: any) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  public componentDidMount(): void {
    const uniqueId = this.props.match.params.id;
    const { findOne } = this.props;


    this.setState({
      uniqueId,
      sourceName: this.sourceName,
      moduleName: this.sourceName,
    })
    findOne(this.sourceName, uniqueId);
    this.form = selectFormData(this.props);

  }

  public onDelete(): void {
    const { uniqueId } = this.state;
    const { deleteOne } = this.props;

    if (deleteOne) {
      deleteOne(this.sourceName, uniqueId);
    } else {
      throw new Error("Delete method is not supported.")
    }
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
              <Button outline color="danger" onClick={this.onDelete}>Delete</Button>{' '}
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
