import React, { useContext, useEffect } from 'react'
import { todoContext } from '../../../context/todos/todoContext'
import { Todo } from './Task'

export const TaskList = () => {
    
    const { todosForCurrentTask }= useContext(todoContext)

  

    return (
        <div className="maincontent__todo-list">
            {todosForCurrentTask.lenght === 0 
            ?
            <p>Crea una nueva tarea</p>
            :
            todosForCurrentTask.map(todo=> (
                <Todo
                key={todo.id}
                todo={todo}/>
            ))
            }
        </div>
    )
}
