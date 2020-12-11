import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { TaskScreen } from '../components/main/TaskScreen'
import { PrivateRoute } from './PrivateRoutes'
import { PublicRoute } from './PublicRoutes'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import { tokenAuth } from '..//config/authToken'


export const AppRoutes = () => {
   
        
    return (
        <Router>
            <div>
            
            <Switch>
            <Route  exact path="/"  component={Register}/>
            <Route   path="/login"  component={Login}/>
            <Route path="/home" component={TaskScreen}/>
            <Redirect to="/login" />
            </Switch>
            </div>
        </Router>
         
    )
}
