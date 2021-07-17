import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import {EditExpensePage} from '../../components/EditexpensePage'


let editExpense, history, removeExpense,wrapper

beforeEach(()=>{
    editExpense = jest.fn()
    history = {push: jest.fn()}
    removeExpense = jest.fn()
    wrapper = shallow(
    <EditExpensePage
         editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history}
        expense={expenses[2]}/>)
})
test('should render edits expense Page Correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})
test('should edit an expense correctly after submisssion', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2])
})
test('should remove expense correctly after submisssion', ()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith({
        id : expenses[2].id
    })
})

