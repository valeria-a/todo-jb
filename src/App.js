import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import AddTaskForm from './AddTaskForm/AddTaskForm';

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <>
      <Header />
      <AddTaskForm />
    </>
  );
}

export default App;
