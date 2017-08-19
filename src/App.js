import React, { Component } from 'react';
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

function wait() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

class App extends Component {

  async componentWillMount() {
    // console.log('my props are ', this.props.apiCall);
    console.log('starting to wait for apiCall')
    await this.props.apiCall();
    console.log('api call finished')
    // console.log('wait for some time')
    // await wait();
    // console.log('wait ended')
    this.props.toggleShow();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            {!this.props.show &&
                <h3>Loading...........................</h3>
            }
            {this.props.show &&
                <h3>WOW EVERYTHING IS HERE NOW</h3>
            }

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return {
        show: state.show,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        apiCall: async () => {await dispatch({
            type: 'API_CALL',
        })},
        toggleShow: () => dispatch({type: 'TOGGLE_SHOW'})
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

const Root = ({ store }) => {
    return <Provider store={store}>
      <AppContainer />
  </Provider>
}


export default Root;


