import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import AddressBookDetail from "./AddressBookDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "Budi Budiman",
          address: "Jl. Kemang Raya No. 225"
        },
        {
          name: "Andi Supandi",
          address: "Jl. Panjang No. 30"
        }
      ],
      input_name: "",
      input_address: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Header />
        Name :
        <input
          type="text"
          name="input_name"
          value={this.state.input_name}
          onChange={this.handleOnChange}
        />
        Address :
        <input
          type="text"
          name="input_address"
          value={this.state.input_name}
          onChange={this.handleOnChange}
        />
        <br />
        <br />
        {this.state.people.map(people => (
          <AddressBookDetail name={people.name} address={people.address} />
        ))}
      </div>
    );
  }
}

export default App;
