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
      filtered_people: [],
      input_name: "",
      input_address: "",
      input_search: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addPeople = () => {
    let prevPeople = this.state.people.slice();
    prevPeople.push({
      name: this.state.input_name,
      address: this.state.input_address
    });

    this.setState({
      people: prevPeople
    });
  };

  deletePeople = index => {
    const prevPeople = this.state.people.slice();
    prevPeople.splice(index, 1);

    this.setState({
      people: prevPeople
    });
  };

  searchPeople = async e => {
    await this.handleOnChange(e);
    let prevPeople = this.state.people.slice();
    prevPeople = prevPeople.filter(people =>
      people.name.includes(this.state.input_search)
    );
    
    await this.setState({
      filtered_people: prevPeople
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
        Search :
        <input
          type="text"
          name="input_search"
          value={this.state.input_search}
          onChange={this.searchPeople}
        />
        <br />
        <br />
        {this.state.input_search === "" &&
          this.state.people.map((people, index) => (
            <AddressBookDetail
              name={people.name}
              address={people.address}
              key={index}
              index={index}
              deletePeople={this.deletePeople}
            />
          ))}
        {this.state.input_search !== "" &&
          this.state.filtered_people.map((people, index) => (
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
