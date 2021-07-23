import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import { startSetExpenses } from './actions/expenses';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
    )
ReactDOM.render(<p>Loading ....</p>,document.getElementById('app'))

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('app'))
})