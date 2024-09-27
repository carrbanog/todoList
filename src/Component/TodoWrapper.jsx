import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditForm from "./EditForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    // console.log(todos);
  };
  function editTask(task, id){
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        todo.isEditing ? (
          <EditForm task={todo} setTodos={setTodos} todos={todos}  />
        ) : (
          <Todo task={todo} setTodos={setTodos} todos={todos} />
          
        )
      ))}
    </div>
  );
};

export default TodoWrapper;
