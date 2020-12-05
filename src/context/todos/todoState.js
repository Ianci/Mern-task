import React, { useReducer } from 'react';
import { types } from '../../types'
import { todoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const TodoState = props => {
    
    const initialState = {
        todos: [ 
            {id: 1, todo: "La concha de tu madre", state: false , taskId: 1},
            {id: 2, todo: "La concha tu madre", state: false , taskId: 2},
            {id: 3, todo: "madre", state: false , taskId: 3}
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
    //Change state to completed
    const changeState = (todo) => {
        dispatch({
            type: types.changeStateTodo,
            payload: todo
        })
    }
  
 
    
    return (
        
        <todoContext.Provider value={{
            todos: state.todos,
            activeTodo: state.todo,
            todoClicked: state.todoClicked,
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