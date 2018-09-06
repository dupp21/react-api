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
      console.log(localStorage.token)
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees`, {
        header: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          employees: res.data.data
        });
      });
  };
  render() {
    return (
      <div>
        <h1>Employee List</h1>
      </div>
    );
  }
}

export default EmployeeList;
