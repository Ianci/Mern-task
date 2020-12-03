import React, { useState, useContext } from 'react'
import { taskContext } from '../../context/task/taskContext'
import { uiContext } from '../../context/ui/uiContext'
import { useForm } from '../../hooks/useForm'
import { v4 as uuidv4 } from 'uuid';

export const SidebarForm = () => {
    //LocalState del formulario 
    const [ showForm, setShowForm ] = useState(false)
    //uiContext
    const { errorTodo, setErrorTodo} = useContext(uiContext)
    
    //taskContext
    const taskContextState = useContext(taskContext)
    const { newTask } = taskContextState
    //Custom hook
    const {state, handleChange, resetForm} = useForm({todo: ""})
    const { todo } = state

    //Validation
    const validation = () => {
        if(todo.trim() === ""){
            setErrorTodo('Por favor completa este campo')
            return false
        }
        else if(todo.length > 15){
            setErrorTodo('Límite de 15 caracteres excedidos')
            return false
        }
        return true
    }
    //Mostrar el formulario 
    const handleShowForm = () => {
        setShowForm(!showForm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(validation()){
            const newTaskObj = {
                name: todo,
                id: uuidv4()
            }
            newTask(newTaskObj)
            setErrorTodo(null)
            resetForm()
        }
    }
    
    return (
        <div className="taskScreen__sidebarForm-container">
            <button type="text" className="register__btn-submit" onClick={handleShowForm}>{showForm ? "Ocultar" : "Crear nuevo tema"}</button>
            {
                showForm && 
                (
                    <form className="taskScreen-sidebarForm" onSubmit={handleSubmit}>
                        <input type="text" className="register__input" placeholder="Tema de la/s tarea" name="todo" value={todo}onChange={handleChange} />
                        
                        <button type="submit" className="register__btn-submit" >Agregar</button>
                    </form>
                )
            }
            {errorTodo && <p className="taskScreen__error-msg">{errorTodo}</p>}
        </div>
    )
}

