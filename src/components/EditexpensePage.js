import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startRemoveExpense, startEditExpense} from '../actions/expenses'

 export class EditExpensePage extends React.Component{
     onSubmit=(expense)=>{
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/dashboard')
     }
     onRemove=()=>{
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/dashboard')
     }
    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">
                <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
                />
                <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        startEditExpense:(id,expense)=>dispatch(startEditExpense(id, expense)),
        startRemoveExpense:(data)=> dispatch(startRemoveExpense(data))
    }
}
 const mapStateToProps = (state, props)=>{
    return {
        expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
 }
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)