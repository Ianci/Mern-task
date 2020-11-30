import React from 'react'
import { Navbar } from '../navb/Navbar'
import { Link } from 'react-router-dom'
export const Login = () => {
    return (
        <>
        <Navbar />
        <div className="register__container">
            <div className="register___form">
            <h1 className="register__h1">Ingrese a su cuenta ahora!</h1>
                <form className="register__form-form">
                   
                    <input type="email" className="register__input" name="email"  autoComplete="off" placeholder="Introduce your email"/>
                    <input type="password" className="register__input" name="password" autoComplete="off" placeholder="Introduce your password"/>

                    <button type="submit" className="register__btn-submit">Crear cuenta</button>
                    <p className="register__paragraph-desc already">Aún no tienes cuenta? Regístrate <Link to="/" style={{textDecoration: "none"}}><strong className="register__paragraph-desc-t">acá</strong></Link></p>
                </form>
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
