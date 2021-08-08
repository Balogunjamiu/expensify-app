import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import selectExpenseTotal from '../selectors/expense-total'
import selectExpenses from '../selectors/expenses'
import nonVisibleExpenses from '../selectors/non-visibleExpenses'
import numeral from 'numeral';

export const ExpenseSummary=({expenseCount, expenseTotal, unseen})=>{
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    return(
        <div className="page-header">
            <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{numeral( expenseTotal/ 100).format('$0,0.00')}</span></h1>
        <div className="page-header__action">
            <Link className="button" to="/create">Add Expense</Link>
        </div>
        {unseen.length >=1 && 
        <p>There {unseen.length <= 1 ?'is': 'are'} {unseen.length} {unseen.length ===1? 'expense': 'expenses'}  unseen, due to the filter, feel free to cancel the filter</p>
        }
            </div>
    </div>
    )
}
const mapStateToProps=(state)=>{
   const visibleExpenses = selectExpenses(state.expenses,state.filters)
   return {
       expenseCount: visibleExpenses.length,
       expenseTotal: selectExpenseTotal(visibleExpenses),
       unseen: nonVisibleExpenses(state.expenses)    
   }
}
export default connect(mapStateToProps)(ExpenseSummary)