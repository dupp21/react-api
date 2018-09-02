import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        State : {this.state.count}
        <br />
        <button onClick={() => this.handleIncrement()}> + </button>
        {" "}
        <button onClick={() => this.handleDecrement()}> - </button>
      </div>
    );
  }
}

export default App;
