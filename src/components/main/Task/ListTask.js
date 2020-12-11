import React, { useContext, useEffect} from 'react'
import { Task } from './Task'
import { taskContext } from '../../../context/task/taskContext'
import '../../../index.css'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

export const ListTask = () => {

    const {tasks, getTask} = useContext(taskContext)
    
    useEffect(() => {
        getTask()
    }, [])

    if(tasks.length === 0 ) return null;
    return (
        
        <ul>
        <TransitionGroup>
        {tasks.map(task=>(
            <CSSTransition
                key={task._id}
                timeout={100}
                classNames="item"
                >
            <Task 
            key={task.id}
            task={task}/>
            </CSSTransition>
            ))
            }
        </TransitionGroup>
        </ul>
        
      
    )
}
