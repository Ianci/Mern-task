import React, {useContext} from 'react'
import { Navbar } from '../navb/Navbar'
import { LoginForm } from './LoginForm'
import img1 from '../../images/login.svg'



export const Login = () => {
   
    
    return (
        <>
        <Navbar />
        <div className="register__container">
            <div className="register___form">
            <h1 className="login__h1">Ingrese a su cuenta ahora!</h1>
              <LoginForm />
            </div>
            <div className="register__right-content">
                <div className="register__container-right">
                   
                    <p className="register__paragraph-desc">Conéctate a tu cuenta para organizar tus tareas!</p>
                    <img className="login__img" src={img1} alt="login"/>
                </div>
            </div>
        </div>
        </>
    )
}
