import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Home from '../../ui/pages/Home.js';
import Contact from '../../ui/pages/Contact.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
import SignUp from '../../ui/pages/SignUp.js';
import Login from '../../ui/pages/Login.js';
import ContactRoot from '../../ui/pages/ContactRoot.js';

export const history = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/sign-in" component={Login}/>
      <Route exact path="/contact-list" component={ContactRoot}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);
