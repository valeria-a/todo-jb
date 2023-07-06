import { IconButton } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";


const TaskEdit = ({task, handleTaskEdit, setEditMode}) => {

    const [tempName, setTempName] = useState(task.name)
    const [tempDate, setTempDate] = useState(task.dueDate)

    console.log('Rendering TaskEdit', tempName)

    const handleClick = () => {
        handleTaskEdit(task.id, null, tempName, null)
        setEditMode(false)
    }

    const handleCancelClick = () => {
        setEditMode(false)
    }

    return(
        <>
            <input value={tempName} onChange={(e) => setTempName(e.target.value)}/>
            <input type="date" value={tempDate} onChange={(e) => setTempDate(e.target.value)}/>
            <IconButton onClick={handleClick}>
                <SaveIcon />
            </IconButton>
            <IconButton onClick={handleCancelClick}>
                <CancelIcon />
            </IconButton>
        </>
    )
}
export default TaskEdit