import { dispatch } from '../store.js';
import { history } from '../../startup/client/routes.js';
import route from '../actions/route.js';

export default function login(credentials) {
    return (dispatch) => {
	Meteor.loginWithPassword(credentials.user, credentials.password, (err) =>
				 {
				     if (!err) {
					 dispatch({type: 'SET_AUTH_STATE', state: true});

					 dispatch(route('/'));
				     }
				     else {
					 dispatch({type: 'AUTH_ERROR', error: err});
				     }

				 }
				);
    }
}
