import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const AddExpense = () => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm />
    </div>
);

export default connect()(AddExpense);