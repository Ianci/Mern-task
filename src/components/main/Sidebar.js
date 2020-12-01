import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import { SidebarForm } from './sidebarForm'
import { ListTask } from './Task/ListTask'

export const Sidebar = () => {
    const [ sidebar, setSidebar ] = useState(true)
    
    const handleShowSidebar = () => setSidebar(!sidebar)
   
    
    return (
        <>
        <div className={sidebar ? "taskScreen__sidebar-active" : "taskScreen__sidebar-hide"}>
            
            <div className="taskScreen__icon-container">
            <FiMenu className="taskScreen__icon" onClick={handleShowSidebar}/>
            </div>
            <h1 className="navbar__logo taskScreen__padding">Reac<strong className="navbar__logo-t">T</strong>ask</h1>
            <div className="taskScreen__content">
            <p className="taskScreen__paragraph">Agrupa tus tareas por tema</p>

            <SidebarForm />

            <div className="taskScreen__mytask">
                <h2 className="navbar__logo margin">Mis tareas</h2>
                <ListTask />
            </div>
            </div>
        </div>
        
        <div className="">

        <FiMenu className={sidebar ? "taskScreen__icon-hidden" : "taskScreen__icon alone"} onClick={handleShowSidebar}/>
        </div>
            
        
        </>
    )
}
