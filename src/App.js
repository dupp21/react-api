import React, { Component } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      employees: []
    };
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.getEmployees = this.getEmployees.bind(this);
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

  getEmployees() {
    axios
      .get(
        "http://ec2-18-219-190-207.us-east-2.compute.amazonaws.com/employees",
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      )
      .then(data => {
        console.log(data);
        this.setState({ employees: data.data.data });
      });
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
            <div>
              <h1>You are authenticated!</h1>
              <button onClick={this.getEmployees}>Get Employees</button>
              <ul>
                {this.state.employees.map((item, i) => (
                  <li key={i}>
                    {item.first_name} {item.last_name}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  this.setState({ isAuthenticated: false });
                }}>
                LOGOUT
              </button>
            </div>
          ) : (
            <h1>You are not authenticated!</h1>
          )}
        </div>
      </div>
    );
  }
}
