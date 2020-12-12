import React, { useContext } from 'react'
import { taskContext } from '../../../context/task/taskContext'
import { todoContext } from '../../../context/todos/todoContext'
export const Task = ({task}) => {
    
    const { activeTask, deleteTask} = useContext(taskContext)
    const { getTodosActiveProject } = useContext(todoContext)

    const handleActiveTaskAndGetTodos = (id) => {
        activeTask(id)
        getTodosActiveProject(id)
        
    }

   
    return (
        
        <div className="tasks__singletask">

        <li className="task__li">
            <p className="taskScreen__paragraph" onClick={() =>  handleActiveTaskAndGetTodos(task._id)}>{task.task}</p>
        </li>
        <span className="taskScreen__span"
        onClick={()=> deleteTask(task._id)}>x</span>
        </div>
    )
}

