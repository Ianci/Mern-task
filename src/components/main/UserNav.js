import React, { useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { authContext } from '../../context/auth/authContext'
export const UserNav = () => {
    const history = useHistory()
    const { user, logOutUser } = useContext(authContext)
    const { name } = !!user && user

    const logOutUserFunction = () => {
        logOutUser()
        history.push('/login')
    }
    return (
        <div className="taskScreen__userNav">
            <p className="taskScreen__paragraph taskScreen__hello-user">Hola {name}</p>
            <button type="button" className="register__btn-submit taskScreen__btn-logout" onClick={logOutUserFunction}>Logout</button>
            
        </div>
    )
}
