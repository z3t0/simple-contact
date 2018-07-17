import { combineReducers }from 'redux';
import pageSkip from './pageSkipperReducer.js';
import authentication from './authentication.js';

const rootReducer = combineReducers({
    pageSkip,
    authentication
});

export default rootReducer;
