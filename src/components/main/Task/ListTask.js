import React from 'react'
import { Task } from './Task'

export const ListTask = () => {

    const array = [
    {
        task: "do homework",
        id: 1
    },
    {
        task: "do homework",
        id: 2
    }
]
    return (
        <ul>
        {array.map(task=>(
            <Task 
            key={task.id}
            task={task}/>
        ))}
        </ul>
    )
}
