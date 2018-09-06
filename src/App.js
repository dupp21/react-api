import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import EmployeeList from "./EmployeeList";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  login = async (email, password) => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/accounts/login`, {
        email: email,
        password: password
      })
      .then(async res => {
        localStorage.token = res.data.token;
        await this.setState({
          isAuthenticated: true
        });
      });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      isAuthenticated: false
    });
  };

  render() {
    return (
      <Router>
        <div>
          <nav className="nav-bar">
            <div>
              <Link to="/">Home</Link> | <Link to="/employees">Employees</Link>
            </div>
            {this.state.isAuthenticated ? (
              <div>
                Welcome !!!,<button onClick={() => this.logout()}>Logout</button>
              </div>
            ) : (
              <Link to="/login">Login </Link>
            )}
          </nav>
          <hr />
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={props => (
              <Login
                login={this.login}
                isAuthenticated={this.state.isAuthenticated}
                {...props}
              />
            )}
          />
          <PrivateRoute
            path="/employees"
            component={EmployeeList}
            isAuthenticated={this.state.isAuthenticated}
          />
        </div>
      </Router>
    );
  }
}

export default App;
