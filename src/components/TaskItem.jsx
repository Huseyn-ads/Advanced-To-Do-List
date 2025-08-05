import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../provider/TaskProvider'

function TaskItem({ getAllData, taskObj, isCompleted }) {
  const {handleDelete, addToCompleted} = useContext(TaskContext)

  if (!taskObj || Object.keys(taskObj).length === 0 || typeof taskObj !== "object") return null

  return (
    <div>
      {Object.entries(taskObj).map(([id, task]) => (
        <li key={id} className={`task-item ${task.priority}`}>
          <div className='task-info'>
            <div>
              {task.tasks} <strong>{task.priority}</strong>
            </div>
            <div className='task-deadline'>
              Due: {new Date(task.date).toLocaleDateString()}
            </div>
          </div>
          <div className='task-buttons'>
            <button onClick={() => addToCompleted(id)} className='complete-button'>Complete</button>
            {console.log(isCompleted)}
            <button onClick={() => handleDelete(id)} className='delete-button'>Delete</button>
          </div>
        </li>
      )) }
    </div>
  )
}

export default TaskItem