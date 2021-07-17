import moment from 'moment'
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', ()=>{
    const state = filtersReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})
test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('should set sortBy to date', ()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})
test('should set Text to filter', ()=>{
    const text = 'This is text filter'
    const state = filtersReducer(undefined,{type:'TEXT_TO_FILTER', text})
    expect(state.text).toBe(text)
})
test('should set startDate filter',()=>{
    const startDate = moment().startOf('month')
    const state = filtersReducer(undefined,{type:'SET_START_DATE',startDate})
    expect(state.startDate).toBe(startDate)
})
test('should set endDate filter',()=>{
    const endDate = moment().endOf('month')
    const state = filtersReducer(undefined,{type:'SET_END_DATE',endDate})
    expect(state.endDate).toBe(endDate)
})