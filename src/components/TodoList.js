import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import "./Todo.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Like",
      isCompleted: false,
    },
    {
      text: "Comment",
      isCompleted: false,
    },
    {
      text: "Subscribe",
      isCompleted: false,
    },
  ]);

  const addTask = (text) => setTasks([...tasks, { text }]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {tasks.map((task, index) => (
        <div className="todo">
          <span
            onClick={() => toggleTask(index)}
            className={
              task.isCompleted ? "todo-text todo-completed" : "todo-text"
            }
          >
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}>
            <i class="fas fa-trash-alt">Delete</i>
          </button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
  );
};
export default ToDoList;
