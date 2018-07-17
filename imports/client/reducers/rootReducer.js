import { combineReducers }from 'redux';
import pageSkip from './pageSkipperReducer.js';
import setAuthState from './setAuthState.js';
import setRoute from './setAuthState.js';


const rootReducer = combineReducers({
    pageSkip,
    setAuthState,
});

export default rootReducer;
