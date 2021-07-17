import {createStore,combineReducers} from 'redux'
import {  v4 as uuidv4} from 'uuid'
//Add Expenses 
const addExpense = ({
    description = '',
     note = '',
     amount = 0,
     createdAt = 0
    }={})=>({
    type: 'ADD_EXPENSE',
    expense : {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})
const removeExpense = ({ id}={}) =>({
    type: 'REMOVE_EXPENSE',
    id 
})
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
        ]
        case 'REMOVE_EXPENSE':
            return  state.filter(({id})=> id !== action.id)    
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })
        default:
            return state
    }
}
const setTextFilter = (text = '') =>({
    type: 'TEXT_TO_FILTER',
        text
})
const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT',
})
const sortByDate = () =>({
    type: 'SORT_BY_DATE',
})
const setStartDate = (startDate = undefined) =>({
    type: 'SET_START_DATE',
    startDate
})
const setEndDate = (endDate = undefined) =>({
    type: 'SET_END_DATE',
    endDate
})
//filter reducer
const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action)=>{
    switch(action.type){
        case 'TEXT_TO_FILTER':
            return {
                ...state,
                text: action.text
            }
            case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
            case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy:'date'
                }
                case 'SET_START_DATE':
                    return {
                        ...state,
                        startDate: action.startDate
                    }
                    case 'SET_END_DATE':
                        return {
                            ...state,
                            endDate: action.endDate
                        }
        default:
            return state
    };
}
//TIMESTAMPS


//GET VISIBLE EXPENSES 
const getVisibleExpenses = (expenses, {text, sortBy,startDate,endDate}) =>{
    return expenses.filter((expense)=>{
        const startDateMatch =  typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}
//store creation
const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters : filterReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -21000}))
const expenseTwo= store.dispatch(addExpense({description: 'Coffee', amount: 200, createdAt: -1000})) 
// store.dispatch(removeExpense({id : expenseOne.expense.id}))
// store.dispatch(editExpense( expenseTwo.expense.id, { amount : 25 }))
//store.dispatch(setTextFilter('rent'))
 //store.dispatch(setTextFilter())
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(-2000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(3000))
// const demoState = {
//     expenses : [{
//         id : '24io3k43',
//         description: 'january Rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createAt: 0
//     }],
//     filters: {
//         test: 'rent',
//         sortBy:'Amount', // date or amount
//         startDate : undefined,
//         endDate: undefined
//     }
// };

// const user = {
//     name:'ola',
//     age:26
// };
// console.log({
//     age: 27,
//     ...user,
//     location: 'lagos',
// })