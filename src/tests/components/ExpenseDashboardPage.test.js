import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashBoardPage from "../../components/ExpenseDashBoardPage";

test('should test if expenseDashboardPage renders correctly', ()=>{
    const wrapper = shallow(<ExpenseDashBoardPage/>)
    expect(wrapper).toMatchSnapshot()
})