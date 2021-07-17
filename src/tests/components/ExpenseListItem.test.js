import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses'
import React from 'react'
import {shallow} from 'enzyme';


test('should render expenseplist item with fixtures', ()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()

})
