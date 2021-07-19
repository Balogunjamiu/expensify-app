import React from 'react'
import ExpenseList from './expenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'


export const ExpenseDashBoardPage = () =>(
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)
export default ExpenseDashBoardPage