import React from "react";

import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import TodoItem from "./components/todoItem";

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
