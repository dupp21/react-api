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
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.people.map(people => (
          <AddressBookDetail name={people.name} address={people.address} />
        ))}
      </div>
    );
  }
}

export default App;
