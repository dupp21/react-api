import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import EmployeeDetail from "./EmployeeDetail";

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
    return (
      <div>
        {this.state.employees.forEach(employee => (
          <EmployeeDetail name={employee.name} />
        ))}
      </div>
    );
  }
}

export default App;
