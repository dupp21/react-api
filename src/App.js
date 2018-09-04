import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>|<Link to="/about">About</Link>|
            <Link to="/topics">Topics</Link>
          </nav>

          <hr />

          <Route exact path="/" component={Home} />
          <Route
            path="/about"
            render={props => <About name="budi" {...props} />}
          />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
