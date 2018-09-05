import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import TodoDetail from "./TodoDetail";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input_description: "",
      input_done: false,
      input_search: ""
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteTodo = async index => {
    await axios
      .delete(`http://localhost:3000/todos/${index}`)
      .then(res => console.log(res));
    this.getAllTodos();
  };

  addTodo = async () => {
    await axios
      .post(`http://localhost:3000/todos`, {
        description: this.state.input_description,
        done: this.state.input_done
      })
      .then(res => console.log(res));
    this.getAllTodos();
  };

  render() {
    return (
      <div>
        Description :
        <input
          type="text"
          name="input_description"
          value={this.state.input_description}
          onChange={this.handleChange}
        />
        <button onClick={() => this.addTodo()}>Add</button>
        Search :
        <input
          type="text"
          name="input_search"
          value={this.state.input_search}
          onChange={this.handleChange}
        />
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
