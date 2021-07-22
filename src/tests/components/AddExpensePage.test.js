import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import {startAddExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper;

beforeEach(()=>{
    startAddExpense = jest.fn();
     history = {push: jest.fn()}
     wrapper = shallow(<AddExpensePage addExpense={startAddExpense} history={history}/>)
})

test('should render AddExpensePage correctly', ()=>{    
    expect(wrapper).toMatchSnapshot()
})
test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})