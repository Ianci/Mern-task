import React from 'react'
import { useForm } from '../../../hooks/useForm'
export const SelectedTaskForm = () => {

    const  {state, handleChange, resetForm} = useForm({todo: ""})
    const { todo } = state

    const handleSubmit = (e) => {
        e.preventDefault()
        resetForm()
    }
    
    return (
        <div className="maincontent__formTask">

           

            <form onSubmit={handleSubmit} className="maincontent__form-box">
            <input type="text" placeholder="Agrega una tarea relacionada"
            name="todo" value={todo} className="register__input maincontent__form-input"
            onChange={handleChange}/>
            <button type="submit" className="register__btn-submit maincontent__form-btn ">Agregar</button>
            </form>
        
        
        </div>
    )
}
