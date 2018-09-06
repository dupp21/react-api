import React, { Component } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  // Login function
  loginUser(email, password) {
    axios
      .post(
        "http://ec2-18-219-190-207.us-east-2.compute.amazonaws.com/accounts/login",
        {
          email: email,
          password: password
        }
      )
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  // Register function
  registerUser(first_name, last_name, email, password) {
    axios
      .post(
        "http://ec2-18-219-190-207.us-east-2.compute.amazonaws.com/accounts/register",
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password
        }
      )
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
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
