import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: 0
    };

    handleDescriptionChange = (e) => {
        this.setState(() => ({ description: e.target.value }));
    };

    handleNoteChange = (e) => {
        this.setState(() => ({ note: e.target.value }));
    };

    handleAmountChange = (e) => {
        this.setState(() => ({ note: e.target.value }));
    };

    render() {
        return (
            < form onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
            }}>
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
                        value={this.props.note}
                        onChange={this.handleNoteChange}
                    ></textarea>
                </div>
                <div>
                    <input
                        type='number'
                        min='0'
                        name='amount'
                        value={this.props.amount}
                        onChange={this.handleAmountChange}
                    />
                </div>
                <div>
                    <button type='submit'>
                        Add Expense
                    </button>
                </div>
            </form >

        )
    }
}


// onClick={(e) => {
//     e.preventDefault();
//     console.log(e);
// }}
