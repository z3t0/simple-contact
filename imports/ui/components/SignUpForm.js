import React, { Component } from 'react';
import AutoForm from 'uniforms-material/AutoForm';
import SubmitField from 'uniforms-material/SubmitField';
import AutoField from 'uniforms-material/AutoField';
import HiddenField from 'uniforms-material/HiddenField';

// A compatible schema
import UserAccountSchema from '../../schemas/UserAccount.js';

export default class SignUpForm extends Component {

    render() {
	return (
		<AutoForm schema={UserAccountSchema}>
		    <AutoField name="name"/>
		    <AutoField name="emailAddress"/>
		    <AutoField name="password" type="password"/>
		    <SubmitField label="Sign in"/>
		</AutoForm>
	);
    }
}
