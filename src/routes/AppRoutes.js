import React from 'react'
import { BrowserRoute as Router, Route, Switch, Redirect } from 'react-router-dom'
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
            <PublicRoute exact path="/" isAuthenticated={} component={Register}/>
            <PublicRoute  path="/login" isAuthenticated={} component={Login}/>
            <PrivateRoute  path="/home" isAuthenticated={} component={TaskScreen}/>
            <Redirect to="/login" />
            </Switch>
            </div>
        </Router>
        
    )
}
