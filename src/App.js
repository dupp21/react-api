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
    axios.get("http://localhost:3000/employees").then(res => {
      this.setState({
        employees: res.data.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.employees.map(employee => (
          <EmployeeDetail
            first_name={employee.first_name}
            last_name={employee.last_name}
          />
        ))}
      </div>
    );
  }
}

export default App;
