import React from 'react'
import { SelectedTaskForm } from './SelectedTaskForm'
import { TaskList } from './TaskList'

export const SelectedTask = () => {
    return (
        <div>
            <h1 className="navbar__logo maincontent__h1">Aprender React</h1>

            <SelectedTaskForm />   

            <TaskList />
        </div>
    )
}
