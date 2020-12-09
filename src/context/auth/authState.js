import React, { useContext, useReducer } from 'react';
import { authContext } from './authContext'
import { authReducer } from './authReducer'
import { types } from '../../types'
import axiosClient from '../../config/axios'
export const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)


    const registerUser = async values => {
        try {
            const response = await axiosClient.post('/api/users', values);
           
            let token = response.data.token

            dispatch({
                type: types.succesfullRegister,
                payload: token
            })

            authenticatedUser()
        } catch (error) {
            
            let errorMessage = error.response.data.msg
            dispatch({
                type: types.errorRegisterApi,
                payload: errorMessage
            })
        }
    }

    const authenticatedUser = async () => {
        const token = localStorage.getItem('token')
        if(token){

        }
        try {
            const response = await axiosClient.get('/api/users')
            console.log(response)
        } catch (error) {
            let errorMessage = error.response.data.msg
            dispatch({
                type: types.errorLogin,
                payload: errorMessage
            })
        }
    }

    return (
        <authContext.Provider 
        value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        message: state.message,
        registerUser
        }}
        >
            {props.children}
        </authContext.Provider>
    )
}
