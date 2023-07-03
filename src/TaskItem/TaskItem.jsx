import { Checkbox } from "@mui/material"
import { useState } from "react"

const TaskItem = ({task, handleTaskEdit}) => {

    console.log('task',task)

    const [editMode, setEditMode] = useState(false)

    const handleCheckboxChange = (event) => {
        console.log('value',event.target.value)
        handleTaskEdit(task.id, event.target.checked)
    }

    return(
        <>
            <Checkbox checked={task.completed} onChange={handleCheckboxChange} />
        </>
    )

}
export default TaskItem