import { combineReducers }from 'redux';
import pageSkip from './pageSkipperReducer.js';
import authState from './authState.js';


const rootReducer = combineReducers({
    pageSkip,
    authState,
});

export default rootReducer;
