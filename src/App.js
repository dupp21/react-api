import React, { Component } from "react";
import "./App.css";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people : [
        {
          name: "Budi Budiman",
          address: "Jl. Kemang Raya No. 225"
        },
        {
          name: "Andi Supandi",
          address: "Jl. Panjang No. 30"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
