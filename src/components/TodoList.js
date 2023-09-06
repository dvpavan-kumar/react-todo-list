import React , { useState }from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { PiTrashSimpleFill } from 'react-icons/pi';
import { MdCancel} from 'react-icons/md';
import { TiTick} from 'react-icons/ti';
import { ACTIONS } from "./Actions";


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
  const handleTodoClick=()=>{
    dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: { id: todo.id },
    });

  }

  return (
    <div className="todo">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            autoFocus  
            required
            className='inner-input'
            onChange={(e) => setEditedName(e.target.value)}
          />
<button className="action-button" onClick={handleSaveEdit}><TiTick /></button>
<button className="action-button" onClick={handleCancelEdit}><MdCancel /></button>

        </>
      ) : (
        <>
          <span
            className={todo.complete ? "todo-completed" : "todo-text"}
            onClick={handleTodoClick}
          >
            {todo.name}
          </span>
          <div className="icon-container">
            <button className="action-button" onClick={handleEditClick}><AiTwotoneEdit/></button>
            <button className="action-button"
              onClick={() => {
                dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
              }}
            >
              <PiTrashSimpleFill/>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
