import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const toggleEvent = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log(todos);
  };

  const deleteList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editList = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="list">
      <span 
        className={todo.completed ? "completed" : "inCompleted"} 
        onClick={() => toggleEvent(todo.id)}
      >
        {todo.task}
      </span>
      <span onClick={() => deleteList(todo.id)}>X</span>
      <span onClick={() => editList(todo.id)}>수정</span>
    </div>
  );
};

export default Todo;
