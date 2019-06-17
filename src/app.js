
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
        <button onClick={this.handleButtonClick}>Click Me</button>
        
        <button onClick={this.handleButtonClickDecrement}>Click Me to Subtract</button>
      </div>
    );
  }
 //Becky's new stuff

  renderDec() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onDecClick={this.handleButtonClickDecrement}>Click Me to Subtract</button>
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