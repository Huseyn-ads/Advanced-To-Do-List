import { useState, useEffect, createContext } from 'react'

export const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState('')
  const [priority, setPriority] = useState('High')
  const [date, setDate] = useState('')
  const [taskObj, setTaskObj] = useState({})
  const [isOpen, setIsOpen] = useState(null)
  const [isCompleted, setIsCompleted] = useState({})
  

  function addToCompleted(idToDelete) {
    const taskToComplete = taskObj[idToDelete];
    const id = new Date().toISOString();
    if (taskToComplete) {
      setIsCompleted((prev) => ({ ...prev, [id]: taskToComplete }));
      handleDelete(idToDelete); 
    }
  }

  function handleDelete(idToDelete) {
    const updatedItems = Object.fromEntries(
      Object.entries(taskObj).filter(([id]) => id !== idToDelete)
    );
    setTaskObj(updatedItems);
  }

  function handleOpen(type) {
    setIsOpen(prev => (prev === type ? null : type)) // Toggle 
  }

  function getAllData(tasks, priority, date) {
    const newTask = { tasks, priority, date }
    const id = new Date()
    setTaskObj((prev) => ({ ...prev, [id]: newTask }))
    setTasks('')
  }

  function getDate(e) {
    setDate(e.target.value)
  }

  function getPriority(e) {
    setPriority(e.target.value)
  }

  function getTask(e) {
    setTasks(e.target.value)
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      getTask,
      priority,
      getPriority,
      date,
      getDate,
      taskObj,
      getAllData,
      handleOpen,
      isOpen,
      handleDelete,
      isCompleted,
      addToCompleted
    }}>
      {children}
    </TaskContext.Provider>
  )
}

// export default TaskProvider