import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, setTodos, todos }) => {
  // console.log(task);
  function deletTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log(todos);
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
    console.log(task.isEditing)
  }
  return (
    <div className="Todo">
      <p
        onClick={() => toggleTodo(task.id)}
        className={task.completed ? "completed" : "incompleted"}
      >
        {task.task}
      </p>
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
      <FontAwesomeIcon icon={faTrash} onClick={() => deletTodo(task.id)} />
    </div>
  );
};

export default Todo;
