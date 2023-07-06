import { Button, Stack, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { TASK_ACTION_TYPE_ADD } from "../reducer/consts"
import { TaskDispatchContext } from "../reducer/tasksReducer"

const AddTaskForm = () => {

    const tasksDispatch = useContext(TaskDispatchContext)
    
    const [task, setTask] = useState("")
    const [dueDate, setDueDate] = useState("")

    const handleClick = () => {
        tasksDispatch({
            type: TASK_ACTION_TYPE_ADD,
            context: {
                name: task,
                dueDate: dueDate
            }
        })
        setTask("")
        setDueDate("")
    }

    return(
        <Stack direction={'row'}>
            <TextField  label="Enter task..." variant="standard" 
                InputLabelProps={{shrink: true, required: true}}
                value={task} 
                onChange={(e) => setTask(e.target.value)}/>

            <TextField type="date" label="Enter date..." variant="standard" 
                InputLabelProps={{ shrink: true, required: false }}
                value={dueDate} onChange={(e) => setDueDate(e.target.value)}
                />

            <Button onClick={handleClick}>ADD</Button>
        </Stack>
    )

}
export default AddTaskForm