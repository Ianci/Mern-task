import React, {useContext} from 'react'
import { todoContext } from '../../../context/todos/todoContext'
import { useForm } from '../../../hooks/useForm'
import { uiContext } from '../../../context/ui/uiContext'
import { taskContext } from '../../../context/task/taskContext'
export const SelectedTaskForm = () => {

    const  {state, handleChange, resetForm} = useForm({todo: ""})
    const { todo } = state
    
    //Distintos context
    const { newTodo, getTodosActiveProject, deleteTodo } = useContext(todoContext)
    const { task } = useContext(taskContext)
    const { errorTask, setErrorTask } = useContext(uiContext)
    
    
    //Obtener el id de la Task active
    let idTask = task.map(taskId => parseInt(taskId.id))
    const [ number ] = idTask
    
    //Validacion
    const validation = () => {
        if(todo.trim() === ""){
            setErrorTask('No puedes enviar una tarea vacía')
            return false
        } else if(todo.lenght > 48){
            setErrorTask('Exceso de caracteres excedidos')
            return false
        }
        return true
    }

    //Submit function
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validation()){
            const newTodoUser = {
                todo: todo,
                state: false,
                taskId: number
            }
            newTodo(newTodoUser)
            getTodosActiveProject(number)
            resetForm()
            setErrorTask(null)
        }
    }
    
    return (
        <div className="maincontent__formTask">

            <form onSubmit={handleSubmit} className="maincontent__form-box">
            <input type="text" placeholder="Agrega una tarea relacionada"
            name="todo" value={todo} className="register__input maincontent__form-input"
            onChange={handleChange}/>
            <button type="submit" className="register__btn-submit maincontent__form-btn ">Agregar</button>
            {errorTask && <p className="taskScreen__error-msg">{errorTask}</p>}
            </form>
        
        </div>
    )
}
