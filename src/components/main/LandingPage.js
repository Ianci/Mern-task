import React from 'react'
import addtask  from '../../images/addtask.svg'
export const LandingPage = () => {
    return (
        <div className="maincontent-landingpage">
            <h2 className="register__h1">Selecciona una tarea existente o crea una!</h2>
            <img className="maincontent__landingpage-img" src={addtask} alt="task"/>
        </div>
    )
}
