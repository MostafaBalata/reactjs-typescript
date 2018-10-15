// React & libs
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

// componenets
import { Header } from "../../components/Header";
import { Hello } from "../../components/Hello";

// Actions
import { increaseAction } from "./actions";

// Selctors
import { makeSelectMessage, makeSelectNumber } from './selectors';

// Components & Containers
import { LeftMenu } from "../LeftMenu/";

// Styles
import "../../styles/main.scss";
import * as styles from "./styles.scss";

interface IProps {
  message: string,
  number: number,
  increaseAction(): void
}

class App extends React.Component<IProps, any> {
  public render(): React.ReactNode {
    return (
      <div>
        <Header />
        <div className={styles.app}>
          <div className={"row"}>
            <div className="col-md-3">
              <LeftMenu />
            </div>
            <div className="col-md-9">
              <div  >
                <div className={styles.well} >
                  <Hello num={this.props.number} onClick={this.props.increaseAction} />
                  <p>Saga message: {this.props.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  message: makeSelectMessage(),
  number: makeSelectNumber()
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    increaseAction
  }, dispatch)
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(App);
