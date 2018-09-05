import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentWillMount = async () => {
    axios.get("http://localhost:3000/todos").then(res => {
      this.setState({
        todos: res.data.data //mantap
      });
    });
  };

  render() {
    return <div className="App">React + API</div>;
  }
}

export default App;
