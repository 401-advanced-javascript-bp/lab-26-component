import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

class Counter extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Counter />, rootElement);