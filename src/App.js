import { useReducer, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import TasksList from './TasksList/TasksList';
import { Stack } from '@mui/material';
import { TaskDispatchContext, TasksContext, TasksProvider, tasksReducer } from './reducer/tasksReducer';
import Summary from './Summary/summary';

function App() {

  // const [tasks, setTasks] = useState([])
  // const [tasks, dispatch] = useReducer(tasksReducer, [])

  return (
    <>

      {/* <TasksContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}> */}

        <TasksProvider>
        
          <Header />
          <Stack direction={'column'} maxWidth={'25em'} margin={'auto'}>
            <AddTaskForm/>
            <TasksList/>
            <Summary />
          </Stack>

        </TasksProvider>
        
        {/* </TaskDispatchContext.Provider>
      </TasksContext.Provider> */}
    </>
  );
}

export default App;
