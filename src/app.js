import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'
import {addExpense} from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css'
const store = configureStore()

store.dispatch(addExpense({description:'water Bill', amount: 2000, createdAt: 1000}))
store.dispatch(addExpense({description:'gas Bill', amount: 100, createdAt: 2000}))
store.dispatch(addExpense({description:'Electricity  Bill', createdAt: -1000}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);




const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
    )

ReactDOM.render(jsx, document.getElementById('app'))

