import React, { Component } from "react";
import axios from "axios";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees/search?limit=15`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => {
        this.setState({
          employees: res.data.data.rows
        });
      });
  };
  render() {
    return (
      <div>
        <h1>Employee List</h1>
        {this.state.employees.map((employee,index)=><div>
          name: {`${employee.first_name} ${employee.last_name}`} <br/>

        </div>)}
      </div>
    );
  }
}

export default EmployeeList;
