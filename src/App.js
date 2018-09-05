import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import TodoDetail from "./TodoDetail";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentWillMount = async () => {
    this.getAllTodos();
  };

  getAllTodos = async () => {
    await axios.get("http://localhost:3000/todos").then(res => {
      this.setState({
        todos: res.data.data
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.todos.forEach(todo => 
          {return <div>test</div>}
        )}
      </div>
    );
  }
}

export default App;
