import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense,
    addExpense,
     editExpense,
     startEditExpense,
      removeExpense,
       setExpenses,
        startSetExpenses,
         startRemoveExpense
        } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'
const uid = 'thisismytestuid'
const defaultAuthState = {auth:{uid}}
const createMockStore = configureMockStore([thunk])

 beforeEach((done)=>{
     const expensesData = {};
     expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id] = { description, note, amount, createdAt}
     })
     database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done())
 })
test('should set up remove expense action object', ()=>{
    const action = removeExpense({id:"123abc"})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})
test('should remove the expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy()
        done()
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
test('should edit expense in firebase',(done)=>{
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    const updates = {
            amount: 3900
    }
    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')     
    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(updates.amount)
        done()
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
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})
test('should add expense with defaults to the database and store', (done)=>{
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})
test('should setup setExpenses action object with data', ()=>{
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})
   test('should fetch the expenses from firebase',(done)=>{
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(()=>{
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})
