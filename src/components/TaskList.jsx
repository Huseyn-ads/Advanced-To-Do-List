import React from 'react'
import TaskItem from './TaskItem'


function TaskList({ getAllData, taskObj }) {
  return (
    <ul className='task-list'>
      <TaskItem getAllData={getAllData} taskObj={taskObj} />
    </ul>
  )
}

export default TaskList