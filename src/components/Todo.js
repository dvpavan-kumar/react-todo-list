import React, { useReducer, useState } from "react";
import Todo from "./TodoList";
import { ACTIONS } from "./Actions";
import reducer from "./Reducer";
import "./Todo.css";

function TodoL() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: 1,
      name: "Like",
      Complete: false,
    },
    {
      id: 2,
      name: "Comment",
      Complete: false,
    },
    {
      id: 3,
      name: "Subscribe",
      Complete: false,
    },
  ]);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  return (
    <>
      <div className="todo-list">
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Enter a title for this task…"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-plus">Add</i>
          </button>
        </form>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </>
  );
}

export default TodoL;
