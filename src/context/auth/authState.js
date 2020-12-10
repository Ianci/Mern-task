import React, { useEffect, useReducer } from 'react';
import { authContext } from './authContext';
import { authReducer } from './authReducer';
import { types } from '../../types';
import axiosClient from '../../config/axios';
import { tokenAuth } from '../../config/authToken';


export const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        isAuth: false,
        message: null,
        messageLogin: null
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
        //Le pasamos el token por headers
        const token = localStorage.getItem('token')
        if(token){
            tokenAuth(token)
        }

        try {
            const response = await axiosClient.get('/api/auth')
            
            dispatch({
                type: types.getUser,
                payload: response.data.user
            })
        } catch (error) {
            let errorMessage = error.response.data.msg
            dispatch({
                type: types.errorLogin,
                payload: errorMessage
            })
        }
    }

    //User login
    const userLogin = async values => {
        try {

            const response = await axiosClient.post('/api/auth', values)
            let token = response.data.token
            console.log(token)
            dispatch({
            type: types.succesfullLogin,
            payload: token
            })

            authenticatedUser()
            
        } catch (error) {
            
            console.log(error.response)
            let errorMessage = error.response.data.msg
            dispatch({
                type: types.errorLogin,
                payload: errorMessage
            })
        }
    }

    //Task screen action
    const taskScreenFunction = () => {
        dispatch({
            type: types.taskScreenPage
        })
    }

    const logOutUser = () => {
        dispatch({
            type: types.logOut
        })
    }
    return (
        <authContext.Provider 
        value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        isAuth: state.isAuth,
        message: state.message,
        messageLogin: state.messageLogin,
        registerUser,
        userLogin,
        authenticatedUser,
        taskScreenFunction,
        logOutUser
        }}
        >
            {props.children}
        </authContext.Provider>
    )
}
