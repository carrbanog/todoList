import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState();
  function handleSubmit(e){
    e.preventDefault();
    addTodo(value);
    setValue("")
  }
  return (
      <form action="" className='TodoForm' onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='todo-input'
        />
        <button className='todo-btn'>Add Task</button>
      </form>
  )
}

export default TodoForm