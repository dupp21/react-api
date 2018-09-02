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
      name: "",
      address: ""
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
        Name :{" "}
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
        />{" "}
        Address :{" "}
        <input
          type="text"
          name="address"
          value={this.state.address}
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
