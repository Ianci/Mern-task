import { types } from '../../types'

export const todoReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case types.getTodosActiveProject: 
        return {
            ...state,
            todosForCurrentTask: state.todos.filter(todo => todo.taskId === payload)
        }
        case types.newTodo:
            return{
                ...state,
                todos: [...state.todos, payload]
            }
        case types.deleteTodo:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            } 
    
        default:
            return state
    }
}