import { dispatch } from '../store.js';

export default function addContact(contact) {
    return (dispatch) => {

	dispatch({type: 'ADD_CONTACT', contact: contact});
	Meteor.call('addContact', contact, (err) => {
	    if (err)
		console.error(err)
	});
    };
};
