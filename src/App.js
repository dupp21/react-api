import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Progress } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="backgorund_blue" className="text-center backgorund-black">
          0%
        </div>
        <Progress />
        <div className="text-center">25%</div>
        <Progress value="25" />
        <div className="text-center">50%</div>
        <Progress value={50} />
        <div className="text-center">75%</div>
        <Progress value={75} />
        <div className="text-center">100%</div>
        <Progress value="100" />
        <div className="text-center">Multiple bars</div>
        <Progress multi>
          <Progress bar value="15" />
          <Progress bar color="success" value="30" />
          <Progress bar color="info" value="25" />
          <Progress bar color="warning" value="20" />
          <Progress bar color="danger" value="5" />
        </Progress>
      </div>
    );
  }
}

export default App;
