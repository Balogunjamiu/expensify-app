import React from 'react'
import {connect} from 'react-redux'
import selectExpenseTotal from '../selectors/expense-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral';

export const ExpenseSummary=({expenseCount, expenseTotal})=>{
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    return(
        <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {numeral( expenseTotal/ 100).format('$0,0.00')}
        </h1>
    </div>
    )
}
const mapStateToProps=(state)=>{
   const visibleExpenses = selectExpenses(state.expenses,state.filters)
   return {
       expenseCount: visibleExpenses.length,
       expenseTotal: selectExpenseTotal(visibleExpenses)
   }
}
export default connect(mapStateToProps)(ExpenseSummary)