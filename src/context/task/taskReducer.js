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
            task: state.tasks.filter(task => task.id === payload.id)
        }
        default:
            return state
    }
}