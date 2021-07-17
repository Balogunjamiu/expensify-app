import React from  'react'
import {shallow} from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm'                                
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
});
test('should render expense formList with expense Data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})
test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})
test('should set decription on input change',()=>{
    const value = 'new Description'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value)
})
test('should set note on textarea Change', ()=>{
    const value = ' this is just a note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input',()=>{
    const value ="23.50"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount if invalid input', ()=>{
    const value ="23.505"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
})
test('should call onSubmit props for valid form submission', ()=>{
    const onSubmitSpy = jest.fn();
   const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
   wrapper.find('form').simulate('submit', {
       preventDefault:()=>{}
   })
   expect(wrapper.state('error')).toBe('')
   expect(onSubmitSpy).toHaveBeenLastCalledWith({
       description: expenses[0].description,
       amount : expenses[0].amount,
       note : expenses[0].note,
       createdAt: expenses[0].createdAt
   });
})
test('should set new date on new date change',()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})
// test('should set calendar focus on Change',()=>{
//     const focused = true
//     const wrapper = shallow(<ExpenseForm />)
//     wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
//     expect(wrapper.state('calendarFocused')).toBe(focused)
//      //expect(wrapper.state('focused')).toBe(focused)
//})