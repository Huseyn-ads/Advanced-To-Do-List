import React from 'react'
import CompletedTaskItem from './CompletedTaskItem'


function CompletedTaskList() {
  return (
    <ul className='completed-task-list'>
      <CompletedTaskItem/>
    </ul>
  )
}

export default CompletedTaskList