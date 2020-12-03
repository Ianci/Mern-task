import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { uiContext } from '../../context/ui/uiContext'
export const LoginForm = () => {
    const { state, handleChange, resetForm } = useForm({ email: "", password: ""})
    const { email, password } = state
    const { setError, error } = useContext(uiContext)

    const validation = () => {
        if(email.trim()=== ""){
            setError('Introduce tu email')
            return false;
        } else {
            if(password.trim() === ""){
                setError('Introduce tu password')
                return false
            }
        }
        return true
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(validation()){
            resetForm()
            setError(null)
            console.log('Form submitted')
        }
    }

    return (
    <form className="register__form-form"
    onSubmit={handleSubmit}>
       

        <input type="email" className="register__input" name="email"  autoComplete="off" placeholder="Introduce your email"
        onChange={handleChange} value={email}/>
        <input type="password" className="register__input" name="password" autoComplete="off" placeholder="Introduce your password"
         onChange={handleChange} value={password}/>
       
        <div className="login__p-container">

        <button type="submit" className="login__btn-margin">Crear cuenta</button>
        {error && <p className="taskScreen__error-msg">{error}</p>}
        <p className="login__paragraph-margin">Aún no tienes cuenta? Regístrate <Link to="/" style={{textDecoration: "none"}}><strong className="register__paragraph-desc-t">acá</strong></Link></p>
        </div>
    </form>
    )
}
