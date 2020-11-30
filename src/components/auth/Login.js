import React from 'react'
import { Navbar } from '../navb/Navbar'
import { Link } from 'react-router-dom'
import { LoginForm } from './LoginForm'
export const Login = () => {
    return (
        <>
        <Navbar />
        <div className="register__container">
            <div className="register___form">
            <h1 className="register__h1">Ingrese a su cuenta ahora!</h1>
              <LoginForm />
            </div>
            <div className="register__right-content">
                <div className="register__container-right">
                    <p className="register__paragraph-desc">Mern<strong className="register__paragraph-desc-t">T</strong>ask es una App para crear y organizar tus tareas, dividirlas por tema y mucho más</p>
                    <p className="register__paragraph-desc">Crea tu cuenta ahora y comienza a usarla de inmediato!</p>
                </div>
            </div>
        </div>
        </>
    )
}
