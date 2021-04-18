import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
    <div>
        <h3>{description}</h3>
        <p>${amount} - createdAt: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>
            Remove
        </button>
    </div>
);

export default connect()(ExpenseListItem);