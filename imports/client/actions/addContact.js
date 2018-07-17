import { dispatch } from '../store.js';

export default function addContact(contact) {
    return (dispatch) => {

	Meteor.call('addContact', contact, (err) => {
	    if (!err)
		dispatch({type: 'ADD_CONTACT', contact: contact});
	});
    };
};
