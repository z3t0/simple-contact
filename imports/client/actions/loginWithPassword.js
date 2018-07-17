import { dispatch } from '../store.js';
import { history } from '../../startup/client/routes.js';

export default function login(credentials) {
    return (dispatch) => {
	Meteor.loginWithPassword(credentials.user, credentials.password, (err) =>
				 {
				     if (!err) {
					 dispatch({type: 'AUTH_LOG_IN', user: Meteor.user()});
					 history.push('/');
				     }
				     else {
					 dispatch({type: 'AUTH_ERROR', error: err});
				     }

				 }
				);
    }
}
