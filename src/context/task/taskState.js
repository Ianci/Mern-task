import React, { useReducer } from 'react'
import { types } from '../../types'
import { taskContext } from './taskContext'
import { taskReducer } from './taskReducer'


export const TaskState = props => {
    const tasks  = [{name: "Learn Context" ,id: "1"}, {name: "Learn Redux", id: "2"}, {name:"Learn React", id: "3"}]
    const initialState = {
        tasks: []
    }

    //Dispatch para ejecutar las acciones 
    const [state, dispatch] = useReducer(taskReducer, initialState)

    //Functions para el CRUD del proyect
    //getTasks
    const getTask = () => {
        dispatch({
            type: types.getTasks,
            payload: tasks
        })
    }
    //newTasks
    const newTask = (task) => {
        
        dispatch({
            type: types.newTask,
            payload: task
        })
    }


    return (
        <taskContext.Provider 
        value={{
            tasks: state.tasks,
            showForm: state.showForm,
            getTask,
            newTask
        }}
        >
            {props.children}
        </taskContext.Provider>
    )
}