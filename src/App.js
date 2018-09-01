import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        State : {this.state.count}
      </div>
    );
  }
}

export default App;
