import React from "react";
import TodoItem from "./todoItem";

export default class todoList extends React.Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo List</h3>
        {items.map(i => {
          return (
            <TodoItem
              key={i.id}
              title={i.title}
              handleDelete={() => handleDelete(i.id)}
              handleEdit={() => handleEdit(i.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
