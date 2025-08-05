function TaskForm({ tasks, getTask, priority, getPriority, date, getDate, getAllData, taskObj }) {
  return (
    <form action="" className="task-form" onSubmit={(e) => {e.preventDefault(); getAllData(tasks, priority, date)}}>

      <input type="text" value={tasks} onChange={(e) => getTask(e)} placeholder="Task title" required />

      <select value={priority} onChange={(e) => getPriority(e)}>

        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="datetime-local" required value={date} onChange={(e) => getDate(e)} />

      <button type="submit">Add task</button>
    </form>
  )
}

export default TaskForm