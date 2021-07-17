import React from 'react'
import ExpenseList from './expenseList'
import ExpenseListFilters from './ExpenseListFilters'


export const ExpenseDashBoardPage = () =>(
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)
export default ExpenseDashBoardPage