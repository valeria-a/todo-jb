// import { TASK_ACTION_TYPE_ADD } from "./consts"
import { createContext, useContext, useReducer } from 'react'
import * as consts from './consts'

export const tasksReducer = (tasks, action) => { //dispatch(action)
    // action.type - ADD_TASK EDIT_TASK
    //action.context - object, will contain different params if relevant

    switch (action.type) {

        case consts.TASK_ACTION_TYPE_ADD:
            const newTask = {
                id: Date.now(),
                name: action.context.name,
                dueDate: action.context.dueDate, 
                completed: false
               } 
               const newTasks = [...tasks, newTask]
               newTasks.sort((task1, task2) => task2.id - task1.id)
               return newTasks

        case consts.TASK_ACTION_TYPE_EDIT:
               const task = tasks.filter((task) => task.id === action.context.id)[0]
               let editedTask = {...task}
               if (action.context.completed != null) {
                editedTask.completed = action.context.completed
               }
               if (action.context.name != null) {
                editedTask.name = action.context.name
               }
               if (action.context.dueDate != null) {
                editedTask.dueDate = action.context.dueDate
               }
               const editedTasks = tasks.filter((task) => task.id !== action.context.id)
               editedTasks.push(editedTask)
               editedTasks.sort((task1, task2) => task2.id - task1.id)
               return editedTasks

        case consts.TASK_ACTION_TYPE_CLEAR_COMPLETED:
            return tasks.filter((t) => !t.completed)

        default:
            throw Error('Action does not exist')
    }
}

export const TasksContext = createContext(null)
export const TaskDispatchContext = createContext(null)

export const TasksProvider = ({children}) => {

    const [tasks, dispatch] = useReducer(tasksReducer, [])

    return(
        <TasksContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TasksContext.Provider>
    )

}

export const useTaskDispatch = () =>{
    return useContext(TaskDispatchContext)
}