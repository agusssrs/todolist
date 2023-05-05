import React, {useState} from 'react'

export const TodoForm = ({addToDo}) => {
  const[value, setValue] = useState('')
  const handleSubmit = e =>{
    e.preventDefault();
    addToDo(value);
    setValue('')
  }
//   const deleteAll = () =>{
//     setToDo([])
// } quiero crear un boton que borre todas las tareas y que quede justo al lado del de agregar tarea, si lo hago asi tal cual pero lo pongo en el 
// wapper me funciona pero aca no.
    return (
      <form className='TodoForm'onSubmit={handleSubmit}>
        <input type="text" className='TodoInput' value={value} placeholder='Escribe tus tareas aqui!' 
        onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='TodoBtn'>Agregar tarea</button>
        {/* <button onClick={deleteAll}></button> */}
      </form>
    )
}
