// React & libs
import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Form from "react-jsonschema-form";

// Components
import { Button } from 'reactstrap';
import { selectFormData, makeSelectForm } from "../ListPage/selectors";
import { createStructuredSelector } from "reselect";

import { findOneActionCreator, deleteOneActionCreator, postOneActionCreator } from "./actions";

interface IFormPageState {
  uniqueId: string,
  moduleName: string, // module Name
  sourceName: string, // Is prefix for reducers name
  formBody?: any
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
    this.onPost = this.onPost.bind(this);
  }

  public componentDidMount(): void {
    const uniqueId = this.props.match.params.id;
    const { findOne } = this.props;

    this.setState({
      uniqueId,
      sourceName: this.sourceName,
      moduleName: this.sourceName,
      formBody: {},
    })
    findOne(this.sourceName, uniqueId);
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


  public onPost(): void {
    const { uniqueId } = this.state;
    const { postOne } = this.props;

    if (postOne) {
      postOne(this.sourceName, uniqueId, this.state.formBody);
    } else {
      throw new Error("Post method is not supported.")
    }
  }

  public actionsSection(): React.ReactNode {
    return (
      <div>
        <h3>Actions</h3>
        <div>
          <Button outline color="success" onClick={this.onPost}>Post</Button>{' '}
          <Button outline color="danger" onClick={this.onDelete}>Delete</Button>{' '}          
        </div>
      </div>
    );
  }

  public extraSection(): React.ReactNode {
    return (
      <div>
        <p>Extra information could be here.</p>
      </div>
    );
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
            {this.actionsSection()}
          </div>
          <div className="block">
            {this.extraSection()}
          </div>
        </div>
      </div>
    );
  }
}




const mapListPageStateToProp = (reducerName: string) => createStructuredSelector({
  form: makeSelectForm(reducerName),
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    findOne: findOneActionCreator,
    deleteOne: deleteOneActionCreator,
    postOne: postOneActionCreator,
  }, dispatch)
}

export const formConnector = (CustomFormComponent: typeof React.Component) => (reducer: string) => connect<any, any, any>(
  mapListPageStateToProp(reducer),
  mapDispatchToProps,
)(CustomFormComponent);
