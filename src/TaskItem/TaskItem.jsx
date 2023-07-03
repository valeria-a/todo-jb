import { Checkbox } from "@mui/material"
import { useState } from "react"

const TaskItem = ({task, handleTaskEdit}) => {

    const [editMode, setEditMode] = useState(false)

    const handleCheckboxChange = (event) => {
        handleTaskEdit(task.id, event.target.value)
    }

    return(
        <>
            <Checkbox value={task.completed} onChange={handleCheckboxChange} />
        </>
    )

}
export default TaskItem