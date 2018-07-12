import { combineReducers }from 'redux';
import pageSkip from './pageSkipperReducer.js';

const rootReducer = combineReducers({
    pageSkip,
});

export default rootReducer;
