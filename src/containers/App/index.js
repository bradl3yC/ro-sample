import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import click from './actions';
import logo from '../../logo.svg';
import './index.css';

class App extends Component {
  static propTypes = {
    clicked: PropTypes.bool.isRequired,
  };
  render() {
    const clicked = this.props.clicked.toString();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.props.click}>Click!</button>
        <p>Clicked: {clicked}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clicked: state.app.clicked,
});

const mapDispatchToProps = (dispatch) => ({
  click: () => dispatch(click()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
