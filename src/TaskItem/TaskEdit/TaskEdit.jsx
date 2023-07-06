import { IconButton } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext, useState } from "react";
import { TASK_ACTION_TYPE_EDIT } from "../../reducer/consts";
import { TaskDispatchContext } from "../../reducer/tasksReducer";


const TaskEdit = ({task, setEditMode}) => {

    const [tempName, setTempName] = useState(task.name)
    const [tempDate, setTempDate] = useState(task.dueDate)

    const tasksDispatch = useContext(TaskDispatchContext)


    const handleClick = () => {
        tasksDispatch({
            type: TASK_ACTION_TYPE_EDIT,
            context: {
                id: task.id,
                name: tempName
            }
        })
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