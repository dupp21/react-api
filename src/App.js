import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter : 0
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        State : {this.state.counter}
      </div>
    );
  }
}

export default App;
