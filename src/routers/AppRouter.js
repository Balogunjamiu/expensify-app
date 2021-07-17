import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditexpensePage from '../components/EditexpensePage';
import helpPage from '../components/helpPage';
import NotFoundPage from '../components/NotfoundPage';
import Header from '../components/Header';
const AppRouter = ()=>(
    <BrowserRouter>
    <div>
        <Header />
    <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditexpensePage}/>
        <Route path="/help" component={helpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
    )
    export default AppRouter;