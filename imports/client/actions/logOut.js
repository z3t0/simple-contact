import { dispatch } from '../store.js';
import route from '../actions/route.js';

export default function logout() {
    return (dispatch) => {
	dispatch({type: 'SET_AUTH_STATE', state: false});
	Meteor.logout();
	dispatch(route('/'))
    }
}
