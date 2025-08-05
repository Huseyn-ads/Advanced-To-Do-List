import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../provider/TaskProvider'

function CompletedTaskItem() {
  const { isCompleted } = useContext(TaskContext)

  if (!isCompleted || Object.keys(isCompleted).length === 0 || typeof isCompleted !== "object") return null
  return (
    <div>
      {Object.entries(isCompleted).map(([id, comp]) => (
        <li key={id} className={`task-item completed`}>
          <div className='task-info'>
            <div>
              {comp.tasks} <strong>{comp.priority}</strong>
            </div>
            <div className='task-deadline'>
              Due: {new Date(comp.date).toLocaleDateString()}
            </div>
          </div>
        </li>
      ))}

    </div>
  )
}

export default CompletedTaskItem