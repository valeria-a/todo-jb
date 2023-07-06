import { useContext } from "react"
import { TasksContext } from "../reducer/tasksReducer"

export const Summary = () => {
    const tasks = useContext(TasksContext)
    return(
        <h3>{`Total: ${tasks.length} | Completed: ${tasks.filter(t => t.completed).length}`}</h3>
    )
}

export default Summary