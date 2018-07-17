import { history } from '../../startup/client/routes.js';
import { dispatch } from '../store.js';
import { push } from 'connected-react-router'

export default function navigate (url) {
    return (dispatch) => {
	dispatch(push(url));
    };
}
