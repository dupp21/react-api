import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Protected from "./Protected";
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

  login = (email, password) => {
    axios
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

  render() {
    return (
      <Router>
        <div>
          <nav className="nav-bar">
            <div>
              <Link to="/">Home Page</Link> |{" "}
              <Link to="/employees">Employees Data</Link>
            </div>
            {this.state.isAuthenticated ? (
              <div>ProfPict</div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </nav>
          <Route exact path="/" component={Home} />

          <Route
            path="/login"
            render={props => (
              <Login
                isAuthenticated={this.state.isAuthenticated}
                {...props}
              />
            )}
          />
          <PrivateRoute path="/employees" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
