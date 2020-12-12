import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { uiContext } from '../../context/ui/uiContext'
import { authContext } from '../../context/auth/authContext';
import { useHistory } from 'react-router-dom';

export const LoginForm = () => {
    const history = useHistory()
    //Custom hook
    const { state, handleChange, resetForm } = useForm({ email: "", password: ""})
    const { email, password } = state
    //Context
    const { setError, error } = useContext(uiContext)
    const authCon = useContext(authContext)
    const { userLogin, messageLogin, auth } = authCon

    useEffect(() => {
        if(auth){
            history.push('/home')
        }
    }, [auth, history])

    const validation = () => {
        if(email.trim() === ""){
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
            userLogin(state)
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

        <button type="submit" className="login__btn-margin">Ingresar</button>
        {error && <p className="taskScreen__error-msg">{error}</p>}
        <p className="login__paragraph-margin">Aún no tienes cuenta? Regístrate <Link to="/" style={{textDecoration: "none"}}><strong className="register__paragraph-desc-t">acá</strong></Link></p>
        </div>
        {messageLogin && <p className="taskScreen__error-msg">{messageLogin}</p>}
    </form>
    )
}
