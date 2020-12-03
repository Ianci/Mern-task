import React, { useContext } from 'react'
import { SelectedTaskForm } from './SelectedTaskForm'
import { TaskList } from './TaskList'
import { taskContext } from '../../../context/task/taskContext'
import { LandingPage } from '../LandingPage'
export const SelectedTask = () => {

    const { task } = useContext(taskContext)
     
    if(!task) return <LandingPage />

    let name = task.map(taskname => taskname.name)
    console.log(name)
    
    return (
        <div>
            <h1 className="navbar__logo maincontent__h1">{name}</h1>
           
            <SelectedTaskForm />   

            <TaskList />
        </div>
    )
}
