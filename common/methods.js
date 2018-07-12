import Contacts from '../imports/api/contacts.js'

Meteor.methods({
  addContact(contact) {
    const contacts = Contacts.insert({
      contact,
    });
    return contacts;
  },
});
