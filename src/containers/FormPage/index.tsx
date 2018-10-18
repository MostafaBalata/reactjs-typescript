// React & libs
import * as React from "react";

import { JSONSchema6 } from "json-schema";

import Form from "react-jsonschema-form";

// styles

// Components
import { Button } from 'reactstrap';

// componets

const schema: JSONSchema6 = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    firstName: {
      type: "string",
      title: "First name",
      default: "Mostafa"
    },

    done: { type: "boolean", title: "Done?", default: false }
  }
};

export class FormPage extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="block">
            <Form schema={schema}
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
