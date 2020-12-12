import React, { useContext } from 'react'
import { taskContext } from '../../../context/task/taskContext'
import { todoContext } from '../../../context/todos/todoContext'


export const Todo = ({todo}) => {
    
    //todoContext
    const { deleteTodo, getTodosActiveProject, changeState} = useContext(todoContext)
    //taskContext
    const context = useContext(taskContext)
    const { task } = context
    //Extraemos el id 
    let idTask = task.map(taskactive => (taskactive._id))
    const [idid] = idTask
    
    
    //Eliminar todo
    const deleteCurrentTodo = id => {
        //Eliminar la tarea con su id personal
        deleteTodo(id)
        //Recargar la página con el id del task
        getTodosActiveProject(idid)
    }

    //Cambiar el estado de true a false y viceversa
   const changeTodoState = (actualTodo) => {
    if(actualTodo.state){
        actualTodo.state = false
    } else {
        actualTodo.state = true
    }
    changeState(actualTodo)
   }
   //Destructuring state and id of todo
    const { state, _id } = todo
    
   //Guardando la tarea actual para luego editarla


    return (
        
        <div className="maincontent__todo-div">
            <p className= {state ? "taskScreen__paragraph maincontent_todo-name-complete" : "taskScreen__paragraph maincontent_todo-name-incomplete"}>{todo.todo}</p>
            <div className="maincontent__todo-buttons">
            {state ? <button type="button" className={state ? "register__btn-submit-completed" :"register__btn-submit"} onClick={()=>changeTodoState(todo)}>Completo</button>
            :
            <button type="button" className={state ? "register__btn-submit-completed" :"register__btn-submit"} onClick={() => changeTodoState(todo)}>Incompleto</button>
        }
            
            <button type="button" className="register__btn-submit" onClick={()=> deleteCurrentTodo(_id)}>Delete</button>
            
            </div>
        </div>
        
    )
}
