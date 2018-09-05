import React, { Component } from "react";
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

  deleteTodo = async index => {
    await axios
      .delete(`http://localhost:3000/todos/${index}`)
      .then(res => console.log(res));
    this.getAllTodos();
  };

  render() {
    return (
      <div>
        {this.state.todos.map((todo, index) => (
          <TodoDetail
            description={todo.description}
            done={todo.done}
            key={index}
            index={index}
            deleteTodo={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default App;
