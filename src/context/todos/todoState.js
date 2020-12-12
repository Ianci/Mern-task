import React, { useReducer } from 'react';
import { types } from '../../types'
import { todoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import axiosClient from '../../config/axios';

export const TodoState = props => {
    
    const initialState = {
        
        todosForCurrentTask: [],
        activeTodo: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Functions

    //Todos active project
    const getTodosActiveProject = async task => {
        try {
            const response = await axiosClient.get('/api/todo', { params : { task }})
            
            dispatch({
                type: types.getTodosActiveProject,
                payload: response.data.todos
            })  
        } catch (error) {
            console.log(error)
        }
        
    }
    //todo active  
    const todoActive = (todo) => {
        dispatch({
            type: todoActive,
            types: todo
        })
    }
    //Add todo
    const newTodo = async (todo) => {
        try {
            await axiosClient.post('/api/todo', todo)
            
            dispatch({
                type: types.newTodo,
                payload: todo
            })     
        } catch (error) {
            console.log(error)
        }
       
    }

    //Delete task
    const deleteTodo =  async (todoId) => {
        try {
            await axiosClient.delete(`/api/todo/${todoId}`)
            dispatch({
                type: types.deleteTodo,
                payload: todoId
            })
        } catch (error) {
            
        }
    }

    //Edit task
    const editTodo = (todo) => {
        dispatch({
            type: types.editTodo,
            payload: todo
        })
    }
    //Change state to completed
    const changeState = (todo) => {
        dispatch({
            type: types.changeStateTodo,
            payload: todo
        })
    }
  
 
    
    return (
        
        <todoContext.Provider value={{
           
            activeTodo: state.todo,
            todosForCurrentTask: state.todosForCurrentTask,
            getTodosActiveProject,
            editTodo,
            deleteTodo,
            newTodo,
            todoActive,
            changeState,
            
        }}>
            {props.children}
        </todoContext.Provider>
    )
}