import  React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('should render Expense total page corectly with one Expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={234}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render Expense total page corectly with multiple Expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expenseTotal={23412345675654}/>)
    expect(wrapper).toMatchSnapshot();
})