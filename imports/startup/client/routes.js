import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Home from '../../ui/pages/Home.js';
import Contact from '../../ui/pages/Contact.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
import SignUp from '../../ui/pages/SignUp.js';
import ContactRoot from '../../ui/pages/ContactRoot.js';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact path="/contact-list" component={ContactRoot}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);
