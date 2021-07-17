import React from 'react'
import {shallow} from 'enzyme';
import { ExpenseList } from '../../components/expenseList';
import expenses from '../fixtures/expenses'
import ExpenseForm from '../../components/ExpenseForm';


test('should render ExpensesList with expenses', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})
test('should render Expenses with emdpty message', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})
