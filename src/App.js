import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import AddTaskForm from './AddTaskForm/AddTaskForm';

function App() {

  const [tasks, setTasks] = useState([])

  const handleAddTask = (taskName, dueDate) => {
   const newTask = {
    id: Date.now(),
    name: taskName,
    dueDate // dueDate: dueDate
   } 
   setTasks([...tasks, newTask])
  }

  console.log(tasks)

  return (
    <>
      <Header />
      <AddTaskForm handleAddTask={handleAddTask}/>
    </>
  );
}

export default App;
