import React, { useContext } from 'react'
import { taskContext } from '../../../context/task/taskContext'
import { todoContext } from '../../../context/todos/todoContext'


export const Todo = ({todo}) => {
    //todoContext
    const { deleteTodo, getTodosActiveProject} = useContext(todoContext)
    //taskContext
    const context = useContext(taskContext)
    const { task } = context
    //Extraemos el id 
    let idTask = task.map(taskactive => parseInt(taskactive.id))
    const [ idInteger ] = idTask
    console.log(idInteger)


    const deleteCurrentTodo = id => {
        
        deleteTodo(id)

        getTodosActiveProject(idInteger)
    }

    const { state, id } = todo
    return (
        <div className="maincontent__todo-div">
            <p className="taskScreen__paragraph maincontent_todo-name">{todo.todo}</p>
            <div className="maincontent__todo-buttons">
            {state ? <button type="button" className={state ? "register__btn-submit-completed" :"register__btn-submit"}>Completo</button>
            :
            <button type="button" className={state ? "register__btn-submit-completed" :"register__btn-submit"}>Incompleto</button>
            }
            <button type="button" className="register__btn-submit">Edit</button>
            <button type="button" className="register__btn-submit" onClick={()=> deleteCurrentTodo(id)}>Delete</button>
            </div>
        </div>
    )
}
