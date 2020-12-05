import React, { useContext } from 'react'
import '../../../index.css'
import { todoContext } from '../../../context/todos/todoContext'
import { Todo } from './Task'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
export const TaskList = () => {
    
    const { todosForCurrentTask }= useContext(todoContext)

  

    return (
        <div className="maincontent__todo-list">
            


           

            {todosForCurrentTask.lenght === 0 
            ?
            <p>Crea una nueva tarea</p>
            :
            
            <TransitionGroup>
            {todosForCurrentTask.map(todo=> (
                <CSSTransition
                key={todo.id}
                timeout={300}
                classNames="item"
                 >
                <Todo
                key={todo.id}
                todo={todo}/>
                </CSSTransition>
                ))}
            </TransitionGroup>
            }
            
       
        </div>
    )
}
