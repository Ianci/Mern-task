import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'

export const SidebarForm = () => {
    const [ showForm, setShowForm ] = useState(false)
    const handleShowForm = () => setShowForm(!showForm)
    const  {state, handleChange, resetForm} = useForm({task: ""})

    const {task} = state

    const handleSubmit = e => {
        e.preventDefault()
        resetForm()
    }
    return (
        <div className="taskScreen__sidebarForm-container">
            <button type="text" className="register__btn-submit" onClick={handleShowForm}>{showForm ? "Ocultar" : "Crear nuevo tema"}</button>
            {
                showForm && 
                (
                    <form className="taskScreen-sidebarForm" onSubmit={handleSubmit}>
                        <input type="text"  className="register__input" placeholder="Tema de la/s tarea" name="task" value={task}
                        onChange={handleChange}/>
                        <button type="submit" className="register__btn-submit" >Agregar</button>
                    </form>
                )
            }
        </div>
    )
}
