import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpensePage';
import EditexpensePage from '../components/EditexpensePage';
import helpPage from '../components/helpPage';
import NotFoundPage from '../components/NotfoundPage';
import PrivateRoute from './privateRoute'
import PublicRoute from './privateRoute'

export const history = createBrowserHistory();

const AppRouter = ()=>(
    <Router history={history}>
    <div>

    <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={EditexpensePage}/>
        <Route path="/help" component={helpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
    )
    export default AppRouter;