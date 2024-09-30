import React, { useEffect, useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState();
  // const addTodo = (todo) => {
  //   setTodos([
  //     ...todos,
  //     { id: uuidv4(), task: todo, completed: false, isEditing: false },
  //   ]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <div className="Form">
      <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todoInput"
        />
        <button className="submitBtn">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
