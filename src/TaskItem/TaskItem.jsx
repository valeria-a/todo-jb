import { Checkbox, Stack } from "@mui/material"
import { useContext, useState } from "react"
import TaskView from "./TaskView/TaskView"
import TaskEdit from "./TaskEdit/TaskEdit"
import { TASK_ACTION_TYPE_EDIT } from "../reducer/consts"
import { TaskDispatchContext, useTaskDispatch } from "../reducer/tasksReducer"

const TaskItem = ({task}) => {

    // const tasksDispatch = useContext(TaskDispatchContext)
    const tasksDispatch = useTaskDispatch()

    const [editMode, setEditMode] = useState(false)

    const handleCheckboxChange = (event) => {
        tasksDispatch({
            type: TASK_ACTION_TYPE_EDIT,
            context: {
                id: task.id,
                completed: event.target.checked
            }
        })
    }

    return(
        <Stack direction={'row'}>
            <Checkbox checked={task.completed} onChange={handleCheckboxChange} />
            {editMode ? 

                <TaskEdit task={task} setEditMode={setEditMode}/> 

            : 

                <TaskView task={task} setEditMode={setEditMode} />

            }

        </Stack>
    )

}
export default TaskItem