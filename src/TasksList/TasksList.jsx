import { Button } from "@mui/material"
import TaskItem from "../TaskItem/TaskItem"
import { TASK_ACTION_TYPE_CLEAR_COMPLETED } from "../reducer/consts"
import { useContext } from "react"
import { TaskDispatchContext, TasksContext, useTaskDispatch } from "../reducer/tasksReducer"

const TasksList = () => {

    const tasks = useContext(TasksContext)
    // const tasksDispatch = useContext(TaskDispatchContext)
    const tasksDispatch = useTaskDispatch()

    const handleClick = () => {
        tasksDispatch({
            type: TASK_ACTION_TYPE_CLEAR_COMPLETED,
            context: {}
        })
    }

    const items = tasks.map((task) => <TaskItem key={task.id} task={task}/>)

    return(
        <>
            {items}
            <Button onClick={handleClick}
                disabled={tasks.filter(t => t.completed).length === 0}>
                Clear completed
            </Button>
        </>
    )
}
export default TasksList