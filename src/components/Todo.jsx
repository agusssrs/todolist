import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({task, toggleComplete, deleteToDo}) => {
  return (
    <div className='ToDo'>
      <p onClick={() => toggleComplete (task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={()=> deleteToDo (task.id)}/>
      </div>
    </div>
  )
}
