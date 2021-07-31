import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize';

const now = moment();
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: props.expense? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calendarFocus:true,
            error:''
            }
    }
    onDescriptionChange=(e)=>{
        const description = e.target.value
        this.setState(()=>({description}))
    }
    onNoteChange=(e)=>{
        const note = e.target.value
        this.setState(()=>({note}))
    }
    onAmountChange=(e)=>{
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    onDateChange = (createdAt)=> {
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
    };
    onFocusChange = ({ focused })=>{
        this.setState(()=>({calendarFocus: focused}))
    }
    onSubmit =(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'Please provide description and amount'}))
        }else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description: this.state.description,
                amount:parseFloat(this.state.amount, 10) * 100,
                createdAt:this.state.createdAt.valueOf(),
                note: this.state.note
            })        
        }
    };
    render(){
        return (
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error&&<p className="form__error">{this.state.error}</p>}
                    <input type="description"
                    className="text-input"
                    placeholder="description" 
                    autoFocus  value={this.state.description}
                     onChange={this.onDescriptionChange}/>
                    <input type="text"
                    className="text-input"
                    value={this.state.amount }
                    onChange={this.onAmountChange}
                    placeholder="Amount" />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocus}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    />
                    <textarea placeholder="Add note for your expenses (optional)"
                    className="textarea"
                    value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <div>
                    <button className="button">Save Expense</button>
                    </div>
                </form>
        )
    }
}