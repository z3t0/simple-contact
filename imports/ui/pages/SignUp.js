import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '../AppBar.js';
import CenterGrid from '../components/CenterGrid.js';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import SignUpForm from '../components/SignUpForm.js';

const theme = createMuiTheme();

const styles = theme => ({
    root: {
	flexGrow: 1,
	padding: theme.spacing.unit * 2,
	margin: theme.spacing.unit * 2,
	textAlign: 'center',
    },
    item: {
	padding: theme.spacing.unit * 2,
	margin: theme.spacing.unit * 2,
    }
});


class SignUpPage extends Component {
    render() {
	const { classes } = this.props;
	
	return (
	    <div>
	      <MuiThemeProvider theme={theme}>
		<AppBar/>
		<CenterGrid>
		  <Paper className={classes.item}>
		    <Typography className={classes.item} variant="title">
		      Sign Up
		    </Typography>
		    <SignUpForm/>
		  </Paper>
		</CenterGrid>
	      </MuiThemeProvider>
	    </div>
	);
    }
}

export default withStyles(styles)(SignUpPage);
