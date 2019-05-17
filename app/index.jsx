import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

render(<App />, document.getElementById('app'));
