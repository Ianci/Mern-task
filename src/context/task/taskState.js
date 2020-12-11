import React, { useReducer } from 'react'
import { types } from '../../types'
import { taskContext } from './taskContext'
import { taskReducer } from './taskReducer'
import axiosClient from '../../config/axios';


export const TaskState = props => {

   
    const initialState = {
        tasks: [],
        task: null,
        error: null
    }

    //Dispatch para ejecutar las acciones 
    const [state, dispatch] = useReducer(taskReducer, initialState)

    //Functions para el CRUD del proyect
    //getTasks
    const getTask = async () => {
       try {
        const response = await axiosClient.get('/api/task')
        
        dispatch({
            type: types.getTasks,
            payload: response.data.tasks
        })
       } catch (error) {
           
        let alert = 'Hubo un error'
        dispatch({
            type: types.errorApi,
            payload: alert
        })
       }
    }

    //newTasks
    const newTask = async (task) => {
        
        try {
            const response = await axiosClient.post('/api/task', task)
            console.log(response.data)
            dispatch({
                type: types.newTask,
                payload: response.data
            })
        } catch (error) {
            let alert = 'Hubo un error'
            dispatch({
            type: types.errorApi,
            payload: alert
        })
        }
    }

    //activeTask
    const activeTask = taskId => {
        dispatch({
            type: types.activeTask,
            payload: taskId
        })
    }

    //Delete task
    const deleteTask = async id => {
       try {
        await axiosClient.delete(`/api/task/${id}`)
        dispatch({
            type: types.deleteTaskActive,
            payload: id
        })
       } catch (error) {
        let alert = 'Hubo un error'
        dispatch({
            type: types.errorApi,
            payload: alert
        })
       }
    }

    return (
        <taskContext.Provider 
        value={{
            tasks: state.tasks,
            showForm: state.showForm,
            task: state.task,
            error: state.error,
            getTask,
            newTask,
            activeTask,
            deleteTask
        }}
        >
            {props.children}
        </taskContext.Provider>
    )
}