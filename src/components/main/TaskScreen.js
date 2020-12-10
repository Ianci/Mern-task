import React, {useContext, useEffect} from 'react'
import { MainContent } from './MainContent'
import { Sidebar } from './Sidebar'
import { UserNav } from './UserNav'
import { authContext } from '../../context/auth/authContext'

export const TaskScreen = () => {
    
    const context = useContext(authContext)
    const { authenticatedUser, taskScreenFunction } = context

    useEffect(() => {
        authenticatedUser()
        taskScreenFunction()
    }, [])

    return (
        <>
        
        <Sidebar />
        
        
        <UserNav />
        <main>
        <MainContent />
        </main>

        
        </>
    )
}
