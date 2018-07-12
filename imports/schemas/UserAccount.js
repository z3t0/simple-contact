import SimpleSchema from 'simpl-schema';


export default UserAccount = new SimpleSchema({
    name: String,
    emailAddress: {
	type: String,
	regEx: SimpleSchema.RegEx.Email
    },
    password: String,
});
