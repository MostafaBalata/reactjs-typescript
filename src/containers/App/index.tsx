import * as React from "react";
import { connect } from "react-redux";

import { Header } from "../../components/Header";
import { Hello } from "../../components/Hello";

import { increase } from "./actions";

import "../../styles/main.scss";
import * as styles from "./styles.scss";

class App extends React.Component<any, any> {
  public render(): React.ReactNode {
    return (
      <div>
        <Header />
        <div className={styles.app}>
          <div className={styles.container}>
            <div className={styles.well}>
              <Hello num={this.props.number} onClick={this.props.increaseNumber} />
              <p>Saga message: {this.props.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    message: state.app.message,
    number: state.app.number
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  increaseNumber: () => dispatch(increase()),
});

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(App);
