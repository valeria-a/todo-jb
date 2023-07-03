import { IconButton } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';


const TaskEdit = ({task}) => {
    return(
        <>
            <input value={task.name}/>
            <input type="date" value={task.dueDate} />
            <IconButton>
                <SaveIcon />
            </IconButton>
        </>
    )
}
export default TaskEdit