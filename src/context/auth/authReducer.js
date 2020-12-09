import { types } from '../../types'

export const authReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case types.succesfullRegister:
            localStorage.setItem('token', payload)
            return {
                ...state,
                auth: true,
                message: null,
                token: payload
            }
        case types.errorLogin:
        case types.errorRegisterApi:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                message: payload,
                auth: false
            }
        default:
            return state;
    }
}