
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import { Meteor } from 'meteor/meteor';

const middleware = [ReduxThunk, logger];

const Store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default Store;
