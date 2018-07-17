import SimpleSchema from 'simpl-schema';

export default Login = new SimpleSchema({
    emailAddress: {
	type: String,
	regEx: SimpleSchema.RegEx.Email
    },
    password: String,
});
