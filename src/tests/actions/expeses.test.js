import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense,addExpense, editExpense, removeExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'
import { expect } from '@jest/globals'

const createMockStore = configureMockStore([thunk])
test('should set up remove expense action object', ()=>{
    const action = removeExpense({id:"123abc"})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action object', ()=>{
    const action = editExpense("123abc",{note:'water Bill'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note:'water Bill'
        }
    })
})

test('should set up addExpense action object with provided value',()=>{
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
}) 
test('should add expense to database and store', (done)=>{
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: ' this one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
       const action = store.getActions() 
       expect(action[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense:{
               id: expect.any(String),
               ...expenseData
           }
       });
        return database.ref(`expenses/${action[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})
test('should ass expense with defaults to the database and store', (done)=>{
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(()=>{
       const action = store.getActions() 
       expect(action[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense:{
               id: expect.any(String),
               ...expenseDefaults
           }
       });
        return database.ref(`expenses/${action[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})