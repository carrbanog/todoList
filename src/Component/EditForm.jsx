import React, { useState } from 'react'

const EditForm = ({task, setTodos, todos}) => {
  const [value, setValue] = useState(task.task);
  function handleSubmit(e){
    e.preventDefault();
    editTask(value, task.id )
    setValue("")
  }

  function editTask(task, id){
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task:task, isEditing: !todo.isEditing } : todo
      )
    );
  }
  console.log(task)

  return (
      <form action="" className='TodoForm' onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='todo-input'
        />
        <button className='todo-btn'>Edit</button>
      </form>
  )
}

export default EditForm