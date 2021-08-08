import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import ExpenseForm from './ExpenseForm'
import {startRemoveExpense, startEditExpense} from '../actions/expenses'
Modal.setAppElement('#app')
 export class EditExpensePage extends React.Component{
    state= {
        isClosed: false
        
    }
     onSubmit=(expense)=>{
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/dashboard')
     }
     onRemove=()=>{
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/dashboard')
     }
     isClosed=()=>{
         this.setState(()=>({
             isClosed:false
            }))
     }
     isOpen=()=>{
        this.setState(()=>({
            isClosed:true
           }))
    }
    backHome=()=>{
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
                onSubmit={this.onSubmit}/>
                <button className="button button--secondary"
                    onClick={this.isOpen}
                >Remove Expense</button>
                    <button className="button" onClick={this.backHome}>Home</button>
                <Modal
                isOpen={this.state.isClosed}
                onRequestClose = {this.isClosed}
                contentLabel = "Selected Option"
                closeTimeoutMS = {10}
                className="modal"
                >
                    <h3 className="modal__title">Are you sure</h3>
                    <div className="modal_button">
                    <button className="button__modal red"  onClick={this.onRemove}>Yes</button>
                    <button className="button__modal green"  onClick={this.isClosed}>No</button>
                    </div>
                </Modal>
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