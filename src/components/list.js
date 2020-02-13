import React, { Component } from "react";

export class TodoList extends Component {
  render() {
    let arrTasks = this.props.items;
    return (
      <div>
        <p>Uncompleted tasks</p>
        {arrTasks.map((item, key) => {
          return (
            <div key={key}>
              {item.description}
              <button
                type="button"
                onClick={e => this.props.taskRemove(item.id, e)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
