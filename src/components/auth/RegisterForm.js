import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

export const RegisterForm = () => {

    const { state, handleChange, resetForm } = useForm({ name: "", email: "", password: "", repeat: ""})
    const { name, email, password, repeat } = state
    return (
        <form className="register__form-form">
            <input type="text" className="register__input" name="name" autoComplete="off" placeholder="Introduce your name"
            onChange={handleChange}/>
            <input type="email" className="register__input" name="email"  autoComplete="off" placeholder="Introduce your email"
            onChange={handleChange}/>
            <input type="password" className="register__input" name="password" autoComplete="off" placeholder="Introduce your password"
            onChange={handleChange}/>
            <input type="password" className="register__input" name="repeat"autoComplete="off" placeholder="Repeat your password"
            onChange={handleChange}/>
            <button type="submit" className="register__btn-submit">Crear cuenta</button>
            <p className="register__paragraph-desc already">Ya tienes cuenta? Ingresa <Link to="/login" style={{textDecoration: "none"}}><strong className="register__paragraph-desc-t">acá</strong></Link></p>
        </form>
    )
}
