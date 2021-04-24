import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: undefined
        };
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    handleNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    handleAmountChange = (e) => {
        const amount = e.target.value;
        let regex = /^\d{1,}(\.\d{0,2})?$/;
        if (!amount || amount.match(regex)) {
            this.setState(() => ({ amount }));
        }
    };

    handleDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            const error = 'Please provide amount and description !';
            this.setState(() => ({ error }));
        } else {
            this.setState(() => ({ error: undefined }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <h3>{this.state.error}</h3>}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type='text'
                            name='description'
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                            autoFocus
                        />
                    </div>
                    <div>
                        <textarea
                            rows='2'
                            cols='30'
                            name='note'
                            value={this.state.note}
                            onChange={this.handleNoteChange}
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type='text'
                            name='amount'
                            placeholder='Amount'
                            value={this.state.amount}
                            onChange={this.handleAmountChange}
                        />
                    </div>
                    <div>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.handleDateChange}
                            focused={this.state.calenderFocused}
                            onFocusChange={this.handleFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                    <div>
                        <button type='submit'>
                            Add Expense
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}


// onClick={(e) => {
//     e.preventDefault();
//     console.log(e);
// }}
