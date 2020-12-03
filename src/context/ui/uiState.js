import React, { useReducer } from 'react'
import { types } from '../../types';
import { uiContext } from './uiContext';
import { uiReducer } from './uiReducer';

export const UiState = props => {
    const initialState = {
        error: null,
        loading: false
    }

    const [state, dispatch] = useReducer(uiReducer, initialState)
    
    const setError = e => {
        dispatch({
            type: types.setError,
            payload: e
        })
    }
    return (
        <uiContext.Provider value={{
            error: state.error, 
            loading: state.loading,
            setError
            }}>
            {props.children}
        </uiContext.Provider>
    )
}