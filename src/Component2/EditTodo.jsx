import React, { useState } from 'react'

const EditTodo = ({todo, todos, setTodos, todoId}) => {
  const [fixValue, setFixValue] = useState(todo);
  const editTask = (id, fixValue) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing:!todo.isEditing, task:fixValue } : todo))
    console.log(id)
    console.log(todos)
  }

  const EditHandleSubmit = (e) => {
    e.preventDefault()
    editTask(todoId, fixValue)
  }
  return (
    <div className='form'>
      <form action="" className='editForm' onSubmit={EditHandleSubmit}>
        <input 
          type="text" 
          placeholder='edit'
          value={fixValue}
          onChange={(e) => setFixValue(e.target.value)} 
        />
        <button>edit task</button>
      </form>
    </div>
  )
}

export default EditTodo