import React, { useState } from "react";
import Form from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./EditTodo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  return (
    <div>
      <Form addTodo={addTodo} todos={todos} setTodos={setTodos} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo
            todo={todo.task}
            todoId={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ) : (
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        )
      )}
      {/* <Todo todos={todos} setTodos={setTodos} /> */}
    </div>
  );
};

export default TodoWrapper;
