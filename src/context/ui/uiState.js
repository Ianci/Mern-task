import React, { useReducer } from 'react'
import { types } from '../../types';
import { uiContext } from './uiContext';
import { uiReducer } from './uiReducer';

export const UiState = props => {
    const initialState = {
        errorTask: null,
        error: null,
        errorTodo: null,
        errorRegister: null
    }

    const [state, dispatch] = useReducer(uiReducer, initialState)
    
    const setError = e => {
        dispatch({
            type: types.setError,
            payload: e
        })
    }

    const setErrorTask = e => {
        dispatch({
            type: types.setErrorTask,
            payload: e
        })
    }
    const setErrorTodo = e => {
        dispatch({
            type: types.setErrorTodo,
            payload: e
        })
    }
    return (
        <uiContext.Provider value={{
            error: state.error, 
            loading: state.loading,
            errorTask: state.errorTask,
            errorTodo: state.errorTodo,
            setError,
            setErrorTask,
            setErrorTodo
            }}>
            {props.children}
        </uiContext.Provider>
    )
}