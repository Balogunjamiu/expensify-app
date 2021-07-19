import getExpenseTotal from '../../selectors/Expense-total'
import expenses from '../fixtures/expenses'
test('should return 0 if no expense', ()=>{
   const result = getExpenseTotal([]) 
   expect(result).toEqual(0)
})
// test('should correctly add up one expense', ()=>{
//     const result = getExpenseTotal(expenses[2])
//     expect(result).toEqual(4500)
// })
test('should correctly add up multiple expense', ()=>{
    const result = getExpenseTotal(expenses)
    expect(result).toEqual(114195)
})