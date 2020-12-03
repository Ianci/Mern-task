import { types } from '../../types'


export const uiReducer = (state , actions ) => {
    const {type, payload }= actions
    switch (type) {
        
        case types.setError:
            return {
                ...state,
                error: payload
            }    
        case types.setErrorTask:
            return {
                ...state,
                errorTask: payload
            }
        case types.setErrorTodo:
        return {
            ...state,
            errorTodo: payload
        }
        default:
            return state
    }
}