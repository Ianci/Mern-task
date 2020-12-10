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
                token: payload
            }
        case types.errorLogin:
            return{
                ...state,
                token: null,
                messageLogin: payload,
                auth: false,
            }
        case types.errorRegisterApi:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                message: payload,
                auth: false
            }
        case types.getUser: 
        return {
            ...state,
            user: payload
        }
        default:
            return state;
    }
}