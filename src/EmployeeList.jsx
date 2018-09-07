import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  renderRedirect = () => {
    if (this.props.isAuthenticated === false) {
      return <Redirect to="/login" />;
    }
  };

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees/search?limit=15`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => {
        if (res.data.data) {
          this.setState({
            employees: res.data.data.rows
          });
        }
      });
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <h1>Employee List</h1>
        {this.state.employees.map((employee, index) => (
          <div>
            name: {`${employee.first_name} ${employee.last_name}`} <br />
          </div>
        ))}
      </div>
    );
  }
}

export default EmployeeList;
