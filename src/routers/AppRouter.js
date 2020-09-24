import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => (
  <div>This is from my AddExpensePage component</div>
);

const EditExpensePage = () => (
  <div>This is from my EditExpensePage component</div>
);

const HelpPage = () => <div>This is from my Help component</div>;

const NotFoundPage = () => (
  <div>
    404 - <Link to='/'>Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>
      Go Home
    </NavLink>
    <NavLink to='/edit' activeClassName='is-active'>
      Edit expense
    </NavLink>
    <NavLink to='/create' activeClassName='is-active'>
      Create expense
    </NavLink>
    <NavLink to='/help' activeClassName='is-active'>
      Help
    </NavLink>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <header />
    </div>
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
