
import React from 'react';

import Header from './classes/header';
import Footer from './classes/footer';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter +1});
  };

  handleButtonClickDecrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter -1});
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <a href="#" onClick={this.handleButtonClick}>Click Me</a>
        
        <a href="#" onClick={this.handleButtonClickDecrement}>!!!Pick Me to Subtract!!!</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;