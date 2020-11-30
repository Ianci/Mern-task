import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

export const LoginForm = () => {
    const { state, handleChange, resetForm } = useForm({ email: "", password: ""})
    const { email, password } = state


    const handleSubmit = e => {
        e.preventDefault()
        resetForm()
        console.log('Form submitted')
    }

    return (
    <form className="register__form-form"
    onSubmit={handleSubmit}>
                   
        <input type="email" className="register__input" name="email"  autoComplete="off" placeholder="Introduce your email"
        onChange={handleChange} value={email}/>
        <input type="password" className="register__input" name="password" autoComplete="off" placeholder="Introduce your password"
         onChange={handleChange} value={password}/>

        <button type="submit" className="register__btn-submit">Crear cuenta</button>
        <p className="register__paragraph-desc already">Aún no tienes cuenta? Regístrate <Link to="/" style={{textDecoration: "none"}}><strong className="register__paragraph-desc-t">acá</strong></Link></p>
    </form>
    )
}
