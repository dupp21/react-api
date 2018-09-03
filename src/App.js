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

  addPeople = () => {
    const prevPeople = this.state.people.slice();

    this.setState({
      people: prevPeople.concat({
        name: this.state.input_name,
        address: this.state.input_address
      })
    });
  };

  deletePeople = index => {
    const prevPeople = this.state.people.slice();
    prevPeople.splice(index, 1);

    this.setState({
      people: prevPeople
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
          value={this.state.input_address}
          onChange={this.handleOnChange}
        />
        <button onClick={() => this.addPeople()}>Add</button>
        <br />
        <br />
        {this.state.people.map((people, index) => (
          <AddressBookDetail
            name={people.name}
            address={people.address}
            key={index}
            index={index}
            deletePeople={this.deletePeople}
          />
        ))}
      </div>
    );
  }
}

export default App;
