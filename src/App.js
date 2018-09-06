import React, { Component } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
    this.getEmployees = this.getEmployees.bind(this);
  }

  // Function for get employees data
  getEmployees() {
    if (this.state.isAuthenticated) {
      console.log("GET EMPLOYEES");
    } else {
      alert("You are not authenticated");
    }
  }

  // Login function
  loginUser(email, password) {
    const data = { email: email, password: password };
    console.log(data);
  }

  // Register function
  registerUser(first_name, last_name, email, password) {
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    };
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Login loginUser={this.loginUser} />
        <hr />
        <h1>Register</h1>
        <Register registerUser={this.registerUser} />
        <hr />
        <div>
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}
