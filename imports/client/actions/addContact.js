export default function addContact(contact) {
    return () => {
	Meteor.call('addContact', contact);
    };
};
