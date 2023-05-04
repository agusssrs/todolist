import React, {useState} from 'react'

export const TodoForm = ({addToDo}) => {
  const[value, setValue] = useState('')
  const handleSubmit = e =>{
    e.preventDefault();
    addToDo(value);
    setValue('')
  }
    return (
      <form className='TodoForm'onSubmit={handleSubmit}>
        <input type="text" className='TodoInput' value={value} placeholder='Escribe tus tareas aqui!' onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='TodoBtn'>Agregar tarea</button>
      </form>
    )
}
