import React from 'react';

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
          <a href="../public/index.html" className="increment" onClick={this.handleButtonClick}>Click Me</a>
          <h4>{this.state.counter}</h4>
          <a href="../public/index.html" className="decrement" onClick={this.handleButtonClickDecrement}>Pick Me to Subtract</a>
        </div>
      );
    }
  }

  export default Counter;
