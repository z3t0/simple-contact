import SimpleSchema from 'simpl-schema';

let validateZipCode = () => {
    return new RegExp('[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]');
};

let validateTelephone = () => {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
};

export default Contact = new SimpleSchema({
    firstName: String,
    lastName: String,
    emailAddress: {
	type: String,
	regEx: SimpleSchema.RegEx.Email
    },
    age: SimpleSchema.Integer,
    telephone: {
	type: Number,
	regEx: validateTelephone,
    },
    address: Object,
    'address.street 1': String,
    'address.street 2': { type: String, optional: true },
    'address.city': String,
    'address.state': String,
    'address.Zip Code': {
	type: String,
	regEx: validateZipCode
    },
    'address.country': String,
    comments: String,
});

