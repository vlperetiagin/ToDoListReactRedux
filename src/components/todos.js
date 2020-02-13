import React, { Component } from "react";
import { connect } from "react-redux";

import { TodoList } from "./list";
import { actions } from "../actions";

class TodoApp extends Component {
  state = {
    inputvalue: ""
  };

  handleAdd = e => {
    const userInput = e.target.value;
    if (e.keyCode === 13) {
      const newItem = {
        id: Date.now(),
        description: userInput,
        isDone: false
      };
      this.props.addTask(newItem);

      e.target.value = "";
    }
  };
  handleAddClick = () => {
    const newItem = {
      id: Date.now(),
      description: this.state.inputvalue,
      isDone: false
    };
    this.props.addTask(newItem);
    this.setState({ inputvalue: "" });
  };
  handleRemove = itemId => {
    const removedItem = { id: itemId };
    this.props.removeTask(removedItem);
  };

  render() {
    let todoTasks = this.props.todos;

    return (
      <div>
        <h1>To-Do list</h1>
        <input
          ref={input => {
            this.textInput = input;
          }}
          placeholder="Enter your task"
          onKeyDown={e => this.handleAdd(e)}
          onChange={event => this.setState({ inputvalue: event.target.value })}
        />
        <button onClick={this.handleAddClick}>ADD</button>
        <TodoList
          items={todoTasks}
          taskRemove={itemId => this.handleRemove(itemId)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTask: actions.addTask,
  removeTask: actions.removeTask
};

const mapStateToProps = state => {
  return {
    todos: state.todos || []
  };
};

export const TodoX = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
