import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import TasksList from './TasksList/TasksList';

function App() {

  const [tasks, setTasks] = useState([])

  const handleTaskEdit = (taskId, completed=null, name=null, dueDate=null) => {
    const task = tasks.filter((task) => task.id === taskId)[0]
    let newTask = {...task}
    if (completed != null) {
      newTask.completed = completed
    }
    if (name != null) {
      newTask.name = name
    }
    if (dueDate != null) {
      newTask.dueDate = dueDate
    }
    const newTasks = tasks.filter((task) => task.id !== taskId)
    newTasks.push(newTask)
    setTasks(newTasks)
  }

  const handleAddTask = (taskName, dueDate) => {
   const newTask = {
    id: Date.now(),
    name: taskName,
    dueDate, // dueDate: dueDate
    completed: false
   } 
   setTasks([...tasks, newTask])
  }

  console.log(tasks)

  return (
    <>
      <Header />
      <AddTaskForm handleAddTask={handleAddTask}/>
      <TasksList tasks={tasks} handleTaskEdit/>
    </>
  );
}

export default App;
