import React from 'react'
import { LandingPage } from './LandingPage'
import { SelectedTask } from './selectedTask/SelectedTask'

export const MainContent = () => {
    return (
        <div className="maincontent__container">
        <SelectedTask />            
        </div>
    )
}
