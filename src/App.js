import React, { Component } from "react";
import logo from "./logo.svg";
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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/public">Home Page</Link> |{" "}
            <Link to="/products">Products Page</Link> | {" "}
          </nav>

          {/* <Route path="/public" component={Public} />
          <Route path="/login" component={Login} /> */}
          <PrivateRoute path="/protected" component={Protected} name="budi" />
        </div>
      </Router>
    );
  }
}

export default App;
