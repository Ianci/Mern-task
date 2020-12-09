export const types = {
    getTasks: '[TASKS] GET_TASKS_ACTION',
    newTask: '[TASKS] NEW_TASK_ACTION',
    activeTask: '[TASKS] ACTIVE_TASK_ACTION',
    deleteTaskActive: '[TASKS] DEELTE_TASK_ACTION',

    setError: '[ERROR] SET_ERROR_FORM',
    setErrorTask: '[ERROR] SET_ERROR_TASK',
    setErrorTodo: '[ERROR] SET_ERROR_TODO',
    setErrorApi: '[ERROR] SET_ERROR_API',

    newTodo : '[TODO] NEW_TODO',
    getTodosActiveProject: '[TODO] GET_TODOS',
    deleteTodo: '[TODO] DELETE_TODO',
    editTodo: '[TODO] EDIT_TODO',
    activeTodo: '[TODO] ACTIVE_TODO',
    getTodos: '[TODO] GET_TODOS',

    changeStateTodo: '[TODO] CHANGE_STATE',
    actualTodo: '[TODO] ACTUAL_TODO',
    updateTodo: '[TODO] UPDATE_TODO',

    succesfullRegister : '[AUTH] SUCCESS_REGISTER',
    errorRegisterApi: '[AUTH] ERROR_REGISTER',
    getUser: '[AUTH] GET_USER',
    succesfullLogin: '[AUTH] SUCCESFULL_LOGIN',
    errorLogin: '[AUTH] ERROR_LOGIN',
    logOut: '[AUTH] LOGOUT',
}