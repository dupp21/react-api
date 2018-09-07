import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

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
                Welcome !!!,
                <button onClick={() => this.logout()}>Logout</button>
              </div>
            ) : (
              <Link to="/login">Login </Link>
            )}
          </nav>
          <hr />
        </div>
      </Router>
    );
  }
}

export default App;
