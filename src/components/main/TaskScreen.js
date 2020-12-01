import React from 'react'
import { MainContent } from './MainContent'
import { Sidebar } from './Sidebar'
import { UserNav } from './UserNav'

export const TaskScreen = () => {
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
