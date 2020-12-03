import React, {useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { uiContext } from '../../context/ui/uiContext'
export const RegisterForm = () => {
  
    const uiContextState = useContext(uiContext)
    const { setError, error } = uiContextState
    //Custom hook
    const { state, handleChange, resetForm } = useForm({ name: "", email: "", password: "", repeat: ""})
    const { name, email, password, repeat } = state

    const validation = () => {
        if(name.trim() === ""){
            setError('Por favor introduce tu nombre')
            return false;
        } else if(name.length > 12) {
            setError('Introduce un nombre más corto')
            return false;
        }
        if(email.trim() === ""){
            setError('Por favor introduce tu email')
            return false;
        }
        if(password.trim() === ""){
            setError('Por favor introduce tu contraseña')
            return false;
        } else if(password.lenght > 8){
            setError('La contraseña debe tener al menos 8 caracteres')
        }
        if(repeat.trim() === ""){
            setError('Repita su contraseña')
            return false;
        } else if(password !== repeat){
            setError('Las contraseñas no coinciden')
            return false;
        }
        
        return true;
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(validation()){
            resetForm()
            setError(null)
        }
    }
    return (
        <form className="register__form-form" onSubmit={handleSubmit}>
            <input type="text" className="register__input" name="name"  value={name} autoComplete="off" placeholder="Introduce your name"
            onChange={handleChange}/>
            <input type="email" className="register__input" name="email"  value={email}  autoComplete="off" placeholder="Introduce your email"
            onChange={handleChange}/>
            <input type="password" className="register__input" name="password" value={password}  autoComplete="off" placeholder="Introduce your password"
            onChange={handleChange}/>
            <input type="password" className="register__input" name="repeat" value={repeat} autoComplete="off" placeholder="Repeat your password"
            onChange={handleChange}/>
            <button type="submit" className="register__btn-submit"
            >Crear cuenta</button>
            <p className="register__paragraph-desc already">Ya tienes cuenta? Ingresa <Link to="/login" style={{textDecoration: "none"}}><strong className="register__paragraph-desc-t">acá</strong></Link></p>
            {error && <p className="taskScreen__error-msg">{error}</p>}
        </form>
    )
}
