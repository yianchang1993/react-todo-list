import React from "react";
import TodoItem from "./todoItem";

export default class todoList extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <TodoItem />
        </h2>
      </div>
    );
  }
}
