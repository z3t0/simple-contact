import React from 'react';

import { Route, Switch } from 'react-router';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';


// route components
import Home from '../../ui/pages/Home.js';
import Contact from '../../ui/pages/Contact.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
import SignUp from '../../ui/pages/SignUp.js';
import Login from '../../ui/pages/Login.js';
import ContactRoot from '../../ui/pages/ContactRoot.js';

import Store from '../../client/store.js';
import {history } from './history.js';

export const renderRoutes = () => (
    <Provider store={Store}>
      <ConnectedRouter history={history}>
	<div>
	  <Switch>
	    <Route exact path="/" component={Home}/>
	    <Route exact path="/contact" component={Contact}/>
	    <Route exact path="/sign-in" component={Login}/>
	    <Route exact path="/contact-list" component={ContactRoot}/>
	    <Route component={NotFoundPage}/>
	  </Switch>
	</div>
      </ConnectedRouter>
    </Provider>
);
