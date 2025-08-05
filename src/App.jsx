import { useContext } from "react";
import CompletedTaskList from "./components/CompletedTaskList";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskContext } from "./provider/TaskProvider";

function App() {

  const { tasks, getTask, priority, getPriority, date, getDate, getAllData, taskObj, handleOpen, isOpen } = useContext(TaskContext)

  return <div className="app">
    <div className={`task-container`}>
      <h1>Task List with Priority</h1>
      <button onClick={() => handleOpen("form")} className={`close-button ${isOpen == "form" ? 'open' : ''}`}>+</button>
      <div className={`${isOpen == "form" ? 'openThis' : ""}`}>
        <TaskForm tasks={tasks} getTask={getTask}
          priority={priority} getPriority={getPriority} date={date} getDate={getDate} getAllData={getAllData} taskObj={taskObj} />
      </div>
    </div>

    <div className="task-container">
      <h2>Tasks</h2>
      <button onClick={() => handleOpen("list")} className={`close-button ${isOpen == "list" ? 'open' : ''}`}>+</button>
      <div className="sort-controls">
        <button className="sort-button">By Date</button>
        <button className="sort-button">By Priority</button>
      </div>
      <div className={`${isOpen == "list" ? 'openThis' : ""}`}>
        <TaskList getAllData={getAllData} taskObj={taskObj} />
      </div>
    </div>


    <div className="completed-task-container">
      <h2>Completed Task</h2>
      <button onClick={() => handleOpen("complete")} className={`close-button ${isOpen == "complete" ? 'open' : ''}`} >+</button>
      <div className={`${isOpen == "complete" ? 'openThis' : ""}`}>
        <CompletedTaskList />
      </div>
    </div>


    <Footer />
  </div>;
}

export default App;
