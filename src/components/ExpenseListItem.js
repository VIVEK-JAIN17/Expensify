import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../redux/actions/expenses';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
    <div>
        <h3>{description}</h3>
        <p>${amount} - createdAt: {moment(createdAt).calendar()}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>
            Remove
        </button>
        <Link to={`/editexpense/${id}`}>
            <button> Edit Expense </button>
        </Link>
    </div>
);

export default connect()(ExpenseListItem);