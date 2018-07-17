import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AutoForm from 'uniforms-material/AutoForm';
import SubmitField from 'uniforms-material/SubmitField';
import AutoField from 'uniforms-material/AutoField';
import TextField from 'uniforms-material/TextField';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CenterGrid from './CenterGrid.js';

import AppBar from '../AppBar.js';

import Store from '../../client/store.js';
import loginWithPassword from '../../client/actions/loginWithPassword.js';

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
    }
});

class LoginForm extends Component {

    onSubmit(model) {
	Store.dispatch(loginWithPassword({user: model.emailAddress, password: model.password}));
    }

    render() {
	const { classes } = this.props;
	
	return (
	    <div>
	      <AppBar/>
	      <CenterGrid>
		<Paper className={classes.paper}>
		  <Typography className={classes.typography} variant="title">Log in</Typography>
		  <AutoForm schema={LoginSchema} onSubmit={this.onSubmit} >
		    <AutoField name="emailAddress" />
		    <TextField name="password" type="password"/>
		    <SubmitField label="Log in"/>
		  </AutoForm>
		</Paper>
	      </CenterGrid>
	    </div>
	);
    }
}

export default withStyles(styles)(LoginForm);
