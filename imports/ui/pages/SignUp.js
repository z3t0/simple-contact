import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Accounts, STATES } from 'meteor/std:accounts-ui';

export default class SignUpPage extends Component {
    render() {
	return (
	    <div>
	      <Accounts.ui.LoginForm />
	    </div>
	);
    }
}

