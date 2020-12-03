import React, { useContext, useEffect} from 'react'
import { Task } from './Task'
import { taskContext } from '../../../context/task/taskContext'
export const ListTask = () => {

    const {tasks, getTask} = useContext(taskContext)
    
    useEffect(() => {
        getTask()
    }, [])

    if(tasks.length === 0 ) return null;
    return (
        
        <ul>
        {tasks.map(task=>(
            <Task 
            key={task.id}
            task={task}/>
        ))}
        </ul>
        
      
    )
}
