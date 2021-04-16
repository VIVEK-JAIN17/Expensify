import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';
import getVisibleExpenses from './redux/selectors/getVisibleExpenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ amount: 10000, createdAt: 1000, description: 'Water Bill' }));
store.dispatch(addExpense({ amount: 22000, createdAt: 10000, description: 'Gas Bill' }));
store.dispatch(addExpense({ amount: 52000, createdAt: 100000, description: 'Electricity Bill' }));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

const App = () => (
  <AppRouter />
);

export default App;