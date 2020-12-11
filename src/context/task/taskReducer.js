import { types } from '../../types'


export const taskReducer = (state , actions ) => {
    const {type, payload }= actions
    switch (type) {
        case types.getTasks:
            return {
                ...state,
                tasks: payload
            }
        case types.newTask:
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        case types.activeTask: 
        return {
            ...state,
            task: state.tasks.filter(task => task._id === payload)
        }
        case types.deleteTaskActive: 
        return {
            ...state,
            tasks: state.tasks.filter(task => task._id !== payload),
            task: null
        }
        case types.errorApi:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}