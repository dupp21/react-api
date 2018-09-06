import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  register() {
    this.props.registerUser(
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.password
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.first_name}
          onChange={this.onChange}
          name="first_name"
          placeholder="First Name"
        />
        <br />
        <input
          value={this.state.last_name}
          onChange={this.onChange}
          name="last_name"
          placeholder="Last Name"
        />
        <br />
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
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default App;
