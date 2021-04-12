import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/HeaderComponent';
import ExpenseDashboard from '../components/ExpenseDashboardComponent';
import AddExpense from '../components/AddExpenseComponent';
import EditExpense from '../components/EditExpenseComponent';
import HelpPage from '../components/HelpPageComponent';
import NotFound from '../components/NotFoundComponent';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/addexpense" component={AddExpense} />
                <Route path="/editexpense" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;