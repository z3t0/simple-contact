
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import { Meteor } from 'meteor/meteor';

import { connectRouter, routerMiddleware } from 'connected-react-router';

import { history } from '../startup/client/history.js';

const middleware = [routerMiddleware(history), ReduxThunk, logger]

const Store = createStore(
    connectRouter(history)(rootReducer),
    {},
    applyMiddleware(...middleware));

export default Store;
