import { BrowserRouter, NavLink, Link, Route, Switch } from 'react-router-dom';

const Home = () => (
  <div>This is from a Home component.</div>
);

const About = () => (
  <div>This is from About component.</div>
);

const Contact = () => (
  <div>This is from Contact component.</div>
);

const Help = () => (
  <div>This is from Help component.</div>
);

const NotFound = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <div>
    <header>
      <h1>Expensify !!</h1>
    </header>

    <NavLink to="/" activeClassName="active" exact={true}>Home </NavLink>
    <NavLink to="/about">About </NavLink>
    <NavLink to="/contact">Contact </NavLink>
    <NavLink to="/help">Help </NavLink>
  </div>

);

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;