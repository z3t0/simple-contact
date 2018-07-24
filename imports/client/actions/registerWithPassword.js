import { dispatch } from '../store.js';
import { history } from '../../startup/client/routes.js';
import { push } from 'connected-react-router';

import { Accounts } from 'meteor/accounts-base'

export default function register(credentials) {
    return (dispatch) => {
	Accounts.createUser({
	    email: credentials.user,
	    password: credentials.password
	},
			    (err) => {
				if (err) {
					 dispatch({type: 'AUTH_ERROR', error: err});
				}
				else {
				    dispatch(push('/sign-in'));
				}
			    })
   }
}
