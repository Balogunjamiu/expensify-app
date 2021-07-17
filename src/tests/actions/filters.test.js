import { expect } from '@jest/globals';
import moment from 'moment'
import { setStartDate, setEndDate,sortByDate,sortByAmount, setTextFilter } from "../../actions/filters";

test('should generate start date action object', ()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})
test('should generate action object for sort by date',()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'       
    })
})
test('should generate action object for sort by amount',()=>{
    const action = sortByAmount()
    expect(action).toEqual({        
        type: 'SORT_BY_AMOUNT'
    })
})
 test('should generate text to filter by the value entered', ()=>{
    const action = setTextFilter('water')
    expect(action).toEqual({
        type: 'TEXT_TO_FILTER',
        text: 'water'
    })
 })
 test('should generate text to filter by the default value', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'TEXT_TO_FILTER',
        text: ''
    })
 })