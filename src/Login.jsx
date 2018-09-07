import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_email: "",
      input_password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  renderRedirect = () => {
    if (this.props.isAuthenticated === true) {
      return <Redirect to="/employees" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <h1>Login Page</h1>
        Email : <br />
        <input
          type="text"
          name="input_email"
          value={this.state.input_email}
          onChange={this.handleChange}
        />
        <br />
        Password : <br />
        <input
          type="pasword"
          name="input_password"
          value={this.state.input_password}
          onChange={this.handleChange}
        />
        <br />
        <button>Login</button>
      </div>
    );
  }
}

export default Login;
