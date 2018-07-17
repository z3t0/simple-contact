import { dispatch } from '../store.js';

export default function logout() {
    return (dispatch) => {
	dispatch({type: 'AUTH_LOG_OUT'});
	Meteor.logout();
    }
}
