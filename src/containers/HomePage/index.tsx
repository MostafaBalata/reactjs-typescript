// React & libs
import * as React from "react";

// styles
import * as styles from './styles.scss';

// componets
import { Hello } from "../../components/Hello";


import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { connect } from "react-redux";

// Actions
import { increaseAction } from "./actions";

// Selctors
import { IPropsApp, makeSelectMessage, makeSelectNumber, selecMessage, selecNumber } from './selectors';


const HomePage: React.SFC<IPropsApp> = (props: IPropsApp) => {
  const num = selecNumber(props);
  const message = selecMessage(props)

  return (
    <div className={styles.homePage}>
      <Hello num={num} onClick={props.increaseAction} message={message} />
    </div >
  );
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
)(HomePage);
