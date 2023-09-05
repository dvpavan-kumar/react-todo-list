/* eslint-disable no-duplicate-case */
import { ACTIONS } from "./Actions";
export function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.EDIT_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo;
      });
      case ACTIONS.TOGGLE_EDIT_TODO:
        return todos.map((t) => {
          if (t.id === action.payload.id) {
            return { ...t, isEditing: !t.isEditing };
          }
          return t;
        });
      
      case ACTIONS.EDIT_TODO:
        return todos.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              name: action.payload.name,
              isEditing: false,
            };
          }
          return t;
        });
      
      case ACTIONS.CANCEL_EDIT_TODO:
        return todos.map((t) => {
          if (t.id === action.payload.id) {
            return { ...t, isEditing: false };
          }
          return t;
        });
      
    default:
      return todos;
  }
}

