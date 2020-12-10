import { types } from '../../types'

export const authReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case types.succesfullLogin:
        case types.succesfullRegister:
            localStorage.setItem('token', payload)
        
            return {
                ...state,
                auth: true,
                message: null,
                token: payload,
                isAuth: true
           
            }
        case types.taskScreenPage: 
            return {
                ...state,
                auth: true,
                message: null,
                isAuth: true

            }
        case types.errorLogin:
            return{
                ...state,
                token: null,
                messageLogin: payload,
                auth: false,
                isAuth: false
            }
        case types.logOut:
            localStorage.removeItem('token')
            
            return{
                ...state,
                token: null,
                auth: false,
                isAuth: false,
                user: null,
                message: null,
                messageLogin: null
            }
        case types.errorRegisterApi:
            localStorage.removeItem('token')
           
            return {
                ...state,
                token: null,
                message: payload,
                auth: false,
                isAuth: false
            }
        case types.getUser: 
        
        return {
            ...state,
            user: payload,
            isAuth: true,
            auth: true
        }
        default:
            return state;
    }
}