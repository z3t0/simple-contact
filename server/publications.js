import Contacts from '../imports/api/contacts.js'

Meteor.publish('getContacts', function () {
    Counts.publish(this, 'ContactCount', Contacts.find({}));

    return Contacts.find({}, {skip: pageSkip, limit: 10})
})
