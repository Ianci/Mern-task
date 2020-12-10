import React, { useContext} from 'react'
import { authContext } from '../../context/auth/authContext'
export const UserNav = () => {

    const { user, logOutUser } = useContext(authContext)
    const { name } = !!user && user

    return (
        <div className="taskScreen__userNav">
            <p className="taskScreen__paragraph taskScreen__hello-user">Hola {name}</p>
            <button type="button" className="register__btn-submit taskScreen__btn-logout" onClick={logOutUser}>Logout</button>
            
        </div>
    )
}
