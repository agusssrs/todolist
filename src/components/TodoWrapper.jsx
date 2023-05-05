import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo';
uuidv4();



export const TodoWrapper = () => {
 const [toDos, setToDo] = useState([])
 
 const addToDo = toDo =>{
    setToDo([...toDos, {id: uuidv4(), task: toDo, completed: false,}])
    console.log(toDos);
 }
 const toggleComplete = id => {
    setToDo(toDos.map(toDo => toDo.id === id ? {...toDo, completed: !toDo.completed} : toDo))
 }
 
 const deleteToDo = id =>{
    setToDo(toDos.filter(toDo => toDo.id !== id))
 }





    return (
        <div className='TodoWrapper'>
            <h1>Cosas para hacer!</h1>
            
            <TodoForm addToDo={addToDo} deleteAll={deleteAll} />
            {toDos.map((toDo, index)=>(
                <Todo task= {toDo} key={index} toggleComplete={toggleComplete} deleteToDo={deleteToDo}/>
            ))}
        </div>
    )
}
