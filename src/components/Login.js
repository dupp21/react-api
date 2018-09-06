import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    this.props.loginUser(this.state.email, this.state.password);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.email}
          onChange={this.onChange}
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          value={this.state.password}
          onChange={this.onChange}
          name="password"
          placeholder="Password"
        />
        <br />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default App;
