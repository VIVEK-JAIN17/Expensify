import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import getVisibleExpenses from './redux/selectors/getVisibleExpenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;