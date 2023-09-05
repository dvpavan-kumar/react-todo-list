import React , { useState }from 'react';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { ACTIONS } from "./Actions";
import "./Todo.css";


export default function TodoList({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedName(todo.name);
  };

  const handleSaveEdit = () => {
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: { id: todo.id, name: editedName },
    });
    setIsEditing(false);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <span
            className={todo.Complete ? "todo-text todo-completed" : "todo-text"}
          >
            {todo.name}
          </span>
          <div className="icon-container">
            <button onClick={handleEditClick}><CiEdit/></button>
            <button
              onClick={() => {
                dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
              }}
            >
              <CiTrash/>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
