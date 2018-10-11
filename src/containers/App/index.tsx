import * as React from 'react';
import { connect } from 'react-redux'

import { Header } from '../../components/Header'

import { increase } from './actions'

import '../../styles/main.scss';

class App extends React.Component<any, any> {

  render(): React.ReactNode {
    return (
      <div>
        <Header />
      </div>)
  }
}


const mapStateToProps = (state: any) => {
  return {
    number: state.app.number
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  handleClick: () => dispatch(increase())
})

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(App)
