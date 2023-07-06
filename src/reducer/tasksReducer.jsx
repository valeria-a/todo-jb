const tasksReducer = (tasks, action) => {
    // action.type - ADD_TASK EDIT_TASK
    //action.context - object, will contain different params if relevant

    switch (action.type) {

        case 'ADD_TASK':
            const {taskName, dueDate} = action.context
            const newTask = {
                id: Date.now(),
                name: taskName,
                dueDate, 
                completed: false
               } 
               const newTasks = [...tasks, newTask]
               newTasks.sort((task1, task2) => task2.id - task1.id)
               return newTasks

        case 'EDIT_TASK':
               const {taskId, completed=null, name=null, date=null} = action.context
               const task = tasks.filter((task) => task.id === taskId)[0]
               let editedTask = {...task}
               if (completed != null) {
                editedTask.completed = completed
               }
               if (name != null) {
                editedTask.name = name
               }
               if (dueDate != null) {
                editedTask.dueDate = dueDate
               }
               const editedTasks = tasks.filter((task) => task.id !== taskId)
               editedTasks.push(editedTask)
               editedTasks.sort((task1, task2) => task2.id - task1.id)
               return editedTasks

        case 'CLEAR_COMPLETED':
            return tasks.filter((t) => !t.completed)
            
        default:
            throw Error('Action does not exist')
    }
}