import React from 'react'

export const Task = ({task}) => {
    return (
        <div className="tasks__singletask">
        <li className="task__li">
            <p className="taskScreen__paragraph">{task.name}</p>
        </li>
        </div>
    )
}
