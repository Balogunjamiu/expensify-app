import React from 'react'
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/expenses'
import ExpenseForm from './ExpenseForm'


export class AddExpensePage extends React.Component{
    onSubmit = (expense)=>{
        this.props.startAddExpense(expense)
        this.props.history.push('/dashboard')
    }
    backHome=()=>{
        this.props.history.push('/dashboard')
    }
    render(){

        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div >
                <div className="content-container">
                <ExpenseForm 
                onSubmit= {this.onSubmit} />
                <button className="button" onClick={this.backHome}>Home</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        startAddExpense:(expense)=> dispatch(startAddExpense(expense))
        
    }
    }
export default connect(undefined,mapDispatchToProps )(AddExpensePage)
