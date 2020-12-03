import React, { useContext } from 'react'
import { taskContext } from '../../../context/task/taskContext'
export const Task = ({task}) => {
    
    const { activeTask, deleteTask} = useContext(taskContext)

    return (
        <div className="tasks__singletask">

        <li className="task__li">
            <p className="taskScreen__paragraph" onClick={()=> activeTask(task)}>{task.name}</p>
            
        </li>
        <span className="taskScreen__span"
        onClick={()=> deleteTask(task)}>x</span>
        </div>
    )
}
