import React, { useReducer } from 'react';
import { types } from '../../types'
import { todoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const TodoState = props => {
    
    const initialState = {
        todos: [ 
            {todo: "La concha de tu madre", state: false , taskId: 1},
            {todo: "La concha tu madre", state: false , taskId: 2}
        ,],
        todosForCurrentTask: null,
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Functions

    //Todos active project
    const getTodosActiveProject = (id) => {
        dispatch({
            type: types.getTodosActiveProject,
            payload: id
        })
    }
    //todo active  
    const todoActive = (todo) => {
        dispatch({
            type: todoActive,
            types: todo
        })
    }
    //Add todo
    const newTodo = (todo) => {
        dispatch({
            type: types.newTodo,
            payload: todo
        })
    }

    //Delete task
    const deleteTodo = (todoId) => {
        dispatch({
            type: types.deleteTodo,
            payload: todoId
        })
    }

    //Edit task
    const editTodo = (todo) => {
        dispatch({
            type: types.editTodo,
            payload: todo
        })
    }
  
    
    return (
        
        <todoContext.Provider value={{
            todos: state.todos,
            activeTodo: state.todo,
            todosForCurrentTask: state.todosForCurrentTask,
            getTodosActiveProject,
            editTodo,
            deleteTodo,
            newTodo,
            todoActive
        }}>
            {props.children}
        </todoContext.Provider>
    )
}