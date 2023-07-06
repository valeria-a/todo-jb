import { Button } from "@mui/material"
import TaskItem from "../TaskItem/TaskItem"

const TasksList = ({tasks, handleTaskEdit, handleClearCompleted}) => {

    const items = tasks.map((task) => <TaskItem key={task.id} task={task} handleTaskEdit={handleTaskEdit}/>)

    return(
        <>
            {items}
            <Button onClick={handleClearCompleted}>Clear completed</Button>
        </>
    )
}
export default TasksList