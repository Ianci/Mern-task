import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { TaskScreen } from '../components/main/TaskScreen'
import { PrivateRoute } from './PrivateRoutes'
import { PublicRoute } from './PublicRoutes'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'



export const AppRoutes = () => {

    
    return (
        <Router>
            <div>
            
            <Switch>
            <PublicRoute exact path="/" component={Register}/>
            <PublicRoute  path="/login" component={Login}/>
            <Route path="/home" component={TaskScreen}/>
            <Redirect to="/login" />
            </Switch>
            </div>
        </Router>
        
    )
}
