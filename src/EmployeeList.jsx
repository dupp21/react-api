import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRedirect = () => {
    if (this.props.isAuthenticated === false) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <h1>Employee List</h1>
      </div>
    );
  }
}

export default EmployeeList;
