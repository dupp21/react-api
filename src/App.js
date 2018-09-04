import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/employees").then(res =>
      this.setState({
        employees: res.data
      })
    );
  }

  render() {
    return <div>Hello React + API</div>;
  }
}

export default App;
