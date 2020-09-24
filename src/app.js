import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

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
    <Link to='/'>Go Home</Link>
    <Link to='/edit'>Go to edit page</Link>
    <Link to='/create'>Go to create page</Link>
    <Link to='/help'>Go to help page</Link>
  </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));
