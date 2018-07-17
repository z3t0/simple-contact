const assign = Object.assign

export default function setAuthState(state = false, action = {}){
    switch (action.type) {
    case 'SET_AUTH_STATE':
	return assign({}, state, {
	    loggedIn: action.state
	});
    default:
	return state;
    }
};
