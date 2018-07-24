import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AutoForm from 'uniforms-material/AutoForm';
import SubmitField from 'uniforms-material/SubmitField';
import AutoField from 'uniforms-material/AutoField';
import TextField from 'uniforms-material/TextField';
import ErrorsField from 'uniforms-material/ErrorsField';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CenterGrid from './CenterGrid.js';

import AppBar from '../AppBar.js';

import Store from '../../client/store.js';
import loginWithPassword from '../../client/actions/loginWithPassword.js';
import registerWithPassword from '../../client/actions/registerWithPassword.js';

// A compatible schema
import LoginSchema from '../../schemas/Login';

const styles = theme => ({
    paper: {
	padding: theme.spacing.unit * 4,
	margin: theme.spacing.unit * 2,
	textAlign: 'center',
	color: theme.palette.text.secondary,
	maxWidth: 700,
    },
    typography: {
	padding: theme.spacing.unit * 2,
    },
    button: {
	padding: theme.spacing.unit * 2,
	margin: theme.spacing.unit * 2,
    }
});

class LoginForm extends Component {

    state = {
	value: 0,
    };

    onSubmit(model) {
	Store.dispatch(loginWithPassword({user: model.emailAddress, password: model.password}));
    }

    onSubmitRegister(model) {
	Store.dispatch(registerWithPassword({user: model.emailAddress, password: model.password}));
    }

    handleChange = (event, value) => {
	this.setState({ value });
    };

    renderLoginContainer() {
	const { classes } = this.props;

	return (
	    <div>
	      <Typography className={classes.typography} variant="title">Log in</Typography>
	      <AutoForm schema={LoginSchema} onSubmit={this.onSubmit} >
		<AutoField name="emailAddress" />
		<TextField name="password" type="password"/>
		<SubmitField className={classes.button} label="Log in"/>
	      </AutoForm>
	    </div>
	);
    }

    renderRegisterContainer() {
	const { classes } = this.props;

	return (
	    <div>
	      <Typography className={classes.typography} variant="title">Register</Typography>
	      <AutoForm schema={LoginSchema} onSubmit={this.onSubmitRegister}
			modelTransform={(mode, model) => {
			    // This model will be submitted.
			    if (mode === 'submit') {
				console.log(model);
			    }

			    return model;
		}}>

		<AutoField name="emailAddress" />
		<TextField name="password" type="password"/>
		<SubmitField className={classes.button} label="Register"/>
	      </AutoForm>
	    </div>
	);
    }

    render() {
	const { classes } = this.props;
	const { value } = this.state;
	
	return (
	    <div>
	      <AppBar/>
	      <CenterGrid>
		<Paper className={classes.paper}>
		  <Tabs value={value} onChange={this.handleChange}>
		    <Tab label="Login"/>
		    <Tab label="Register"/>
		  </Tabs>
		  {value === 0 && this.renderLoginContainer() }
		  {value === 1 && this.renderRegisterContainer() }
		</Paper>
	      </CenterGrid>
	    </div>
	);
    }
}

export default withStyles(styles)(LoginForm);
