import { types } from '../../types'

export const todoReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case types.getTodosActiveProject: 
        return {
            ...state,
            todosForCurrentTask: payload
        }
        case types.newTodo:
            return{
                ...state,
                todosForCurrentTask: [...state.todosForCurrentTask, payload]
            }
        case types.deleteTodo:
            return {
                ...state,
                todosForCurrentTask: state.todosForCurrentTask.filter(todo => todo._id !== payload)
            } 
        case types.changeStateTodo:
            
            return {
                ...state,
                todosForCurrentTask: state.todosForCurrentTask.map(todo => todo._id === payload.id ? payload : todo )
            }
       
        default:
            return state
    }
}