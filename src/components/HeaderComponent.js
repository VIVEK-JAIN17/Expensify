import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <header>
            <h1>Expensify !!</h1>
        </header>

        <NavLink to="/" activeClassName="active" exact={true}>Home </NavLink>
        <NavLink to="/addexpense">Add Expense </NavLink>
        <NavLink to="/help">Help </NavLink>
    </div>

);

export default Header;