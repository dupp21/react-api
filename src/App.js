import React, { Component } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({ isAuthenticated: false });
    }
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
        if (data.data.message === "You are logged in") {
          localStorage.setItem("token", data.data.token);
          this.setState({ isAuthenticated: true });
        } else {
          alert("ERROR!");
        }
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
        if (data.data.message === "insert account data success") {
          localStorage.setItem("token", data.data.token);
          this.setState({ isAuthenticated: true });
        } else {
          alert("ERROR!");
        }
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
          {this.state.isAuthenticated ? (
            <h1>You are authenticated!</h1>
          ) : (
            <h1>You are not authenticated!</h1>
          )}
        </div>
      </div>
    );
  }
}
