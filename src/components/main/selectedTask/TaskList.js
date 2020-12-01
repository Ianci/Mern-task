import React from 'react'
import { Todo } from './Task'

export const TaskList = () => {
    const array = [
        {
            task: "La concha de tu madre",
            state: true
        },
        {
            task: "La concha de tu madre",
            state: false
        },
    ]
    return (
        <div className="maincontent__todo-list">
            {array.lenght === 0 
            ?
            <p>Crea una nueva tarea</p>
            :
            array.map(todo=> (
                <Todo 
                todo={todo}/>
            ))
            }
        </div>
    )
}
