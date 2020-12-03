import React from 'react'

export const Todo = ({todo}) => {
    const {task, state } = todo
    return (
        <div className="maincontent__todo-div">
            <p className="taskScreen__paragraph maincontent_todo-name">{task}</p>
            <div className="maincontent__todo-buttons">
            {state ? <button type="button" className={state ? "register__btn-submit-completed" :"register__btn-submit"}>Completo</button>
            :
            <button type="button" className={state ? "register__btn-submit-completed" :"register__btn-submit"}>Incompleto</button>
            }
            <button type="button" className="register__btn-submit">Edit</button>
            <button type="button" className="register__btn-submit">Delete</button>
            </div>
        </div>
    )
}
